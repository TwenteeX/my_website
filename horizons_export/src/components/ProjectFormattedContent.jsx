import React from 'react';

const IMAGE_MARKER = /^\[\[IMAGE:([^|\]]+)(?:\|([^[\]]*))?]]$/;

/**
 * Renders project copy with:
 * - Paragraphs split by blank lines (\\n\\n)
 * - Lines starting with "### " as subheadings (bold, larger)
 * - Single-line blocks matching [[IMAGE:/path.png]] as figures
 */
export function FormattedBody({ content }) {
  if (content == null || String(content).trim() === '') return null;

  const blocks = String(content).trim().split(/\n\n+/);

  return (
    <div className="not-prose space-y-4 text-[1.05rem] md:text-lg leading-relaxed text-foreground/85">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        const imageMatch = trimmed.match(IMAGE_MARKER);
        if (imageMatch) {
          const src = imageMatch[1].trim();
          const alt = (imageMatch[2] || '').trim();
          return (
            <img
              key={i}
              src={src}
              alt={alt}
              className="w-full h-auto object-cover rounded-xl shadow-lg my-8 border border-border/40"
            />
          );
        }
        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={i}
              className="text-xl md:text-2xl font-bold text-foreground font-display tracking-tight mt-10 mb-3 first:mt-0 scroll-mt-28"
            >
              {trimmed.slice(4).trim()}
            </h3>
          );
        }
        return (
          <p key={i} className="mb-0">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
