"""Compose the Pet's Tribe cover from the original concept map and app exports.

Run with Python + Pillow. This is an asset-authoring step, not part of the build.
"""
from pathlib import Path
from PIL import Image, ImageDraw

assets = Path(__file__).resolve().parents[1] / 'public' / 'images'
size = (640, 360)
background = '#f3f4f0'
concept = Image.new('RGB', size, background)
diagram = Image.open(assets / 'pet-structure.png').convert('RGB')
diagram.thumbnail((596, 300), Image.Resampling.LANCZOS)
concept.paste(diagram, ((size[0] - diagram.width) // 2, (size[1] - diagram.height) // 2))
concept.save(assets / 'pets-tribe-cover-poster.webp', lossless=True, method=6)

names = [
    'sign-in', 'profile-setup', 'community', 'nearby', 'pet-friends', 'events',
    'care', 'companions', 'adoption-detail', 'veterinary-support', 'volunteer',
    'pet-profile', 'diary', 'organization',
]
phone_width, phone_height, gap = 138, 299, 20
strip = Image.new('RGB', (44 + len(names) * (phone_width + gap), size[1]), background)
mask = Image.new('L', (phone_width, phone_height))
ImageDraw.Draw(mask).rounded_rectangle((0, 0, phone_width - 1, phone_height - 1), radius=13, fill=255)
for index, name in enumerate(names):
    screen = Image.open(assets / f'pets-tribe-{name}.webp').convert('RGB')
    screen = screen.resize((phone_width, phone_height), Image.Resampling.LANCZOS)
    strip.paste(screen, (22 + index * (phone_width + gap), 30), mask)

def screen_frame(progress):
    # Ease in and out without reversing direction or jumping back across screens.
    eased = progress * progress * (3 - 2 * progress)
    offset = round((strip.width - size[0]) * eased)
    return strip.crop((offset, 0, offset + size[0], size[1]))

frames = [concept]
durations = [2400]
first, last = screen_frame(0), screen_frame(1)
for step in range(1, 11):
    frames.append(Image.blend(concept, first, step / 10))
    durations.append(70)
frames.append(first)
durations.append(650)
for step in range(1, 181):
    frames.append(screen_frame(step / 180))
    durations.append(67)
frames.append(last)
durations.append(750)
for step in range(1, 11):
    frames.append(Image.blend(last, concept, step / 10))
    durations.append(70)

output = assets / 'pets-tribe-cover-motion.webp'
frames[0].save(output, save_all=True, append_images=frames[1:], duration=durations,
               loop=0, quality=76, method=3)
with Image.open(output) as image:
    assert image.is_animated and image.n_frames > 150
    assert image.size == size
    total_duration = 0
    for index in range(image.n_frames):
        image.seek(index)
        image.load()
        total_duration += image.info['duration']
    print(f'{output.name}: {image.n_frames} frames, {total_duration / 1000:.1f}s, {output.stat().st_size / 1024:.0f} KiB')
