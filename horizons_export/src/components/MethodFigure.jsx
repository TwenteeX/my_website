import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { methodPrompt, methodFigmaUrl } from '@/data/vlmMethod';

export default function MethodFigure({ src, language }) {
  const zh = language === 'zh';
  return <figure className="method-figure">
    <p className="method-scroll-hint">{zh ? '横向滑动，浏览四个阶段 →' : 'Scroll horizontally to explore all four stages →'}</p>
    <div className="method-figure-scroll" role="region" tabIndex={0}
      aria-label={zh ? '四阶段方法图，可横向滚动浏览' : 'Four-stage method diagram; scroll horizontally on small screens'}>
      <img src={src} width={1780} height={1243}
        alt={zh ? '从标记图像和空间线索构建 JSON 提示词，比较两组零样本基线、三组提示线索实验和三组 QLoRA 微调，再评估生成理由与前后关系回答。' : 'Marked images and spatial cues become a JSON prompt; two zero-shot baselines, three prompt-cue settings, and three QLoRA settings share an evaluation of generated rationales and front/behind answers.'} />
    </div>
    <figcaption className="method-figure-caption">
      <p>{zh ? '完整实验流程：输入、提示词构建、训练与推理、评测。JSON 展示一个示例提示词。' : 'The complete experimental pipeline: inputs, prompt construction, training and inference, and evaluation. The JSON card shows an example prompt.'}</p>
      <div className="method-figure-links">
        <a href={src} target="_blank" rel="noreferrer">{zh ? '查看完整方法图' : 'View full diagram'}<ArrowUpRight size={13} /></a>
        <a href={methodFigmaUrl} target="_blank" rel="noreferrer">{zh ? '在 Figma 中查看' : 'View in Figma'}<ArrowUpRight size={13} /></a>
      </div>
    </figcaption>
    <details className="method-prompt-example">
      <summary>{zh ? '阅读示例提示词 · JSON' : 'Read the example prompt · JSON'}</summary>
      <pre><code>{JSON.stringify(methodPrompt, null, 2)}</code></pre>
    </details>
  </figure>;
}
