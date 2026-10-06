// An illustrative assembled prompt using the marked COCO pair in the method figure.
// Cue fields vary across the eight settings; this is not the dataset's storage schema.
export const methodPrompt = {
  image: 'marked-pair.jpg',
  bbox_A: [360, 99, 495, 424],
  bbox_B: [239, 104, 311, 183],
  overlap2D: false,
  question: 'Is A in front of or behind B?',
  instruction: 'Consider depth and occlusion cues. Explain in 2–3 sentences, then end with Answer: front or Answer: behind.',
};

export const methodFigmaUrl = 'https://www.figma.com/design/5k9mEe4NBWjBUdK6ZHYpsq?node-id=65-4630';
