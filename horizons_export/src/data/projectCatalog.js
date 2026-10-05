// Homepage-sized summaries and cover choices; full research content stays in projects.js.
// Roomify stays first; other projects sort by their latest year.
// This order resolves ties within the same year.
export const projectOrder = [1, 10, 9, 8, 7, 3, 6, 4, 11, 2, 5, 12];
export const projectImages = {
  1: '/images/roomify-demo.gif', 2: '/images/boardgame-head.png',
  3: '/images/imagine-head.png', 4: '/images/hongkong-head.png',
  5: '/images/pets-tribe-cover-motion.webp', 6: '/images/vr-head.png',
  7: '/images/SyneSound 1.png', 8: '/images/domesticade-heroimage.png',
  9: '/images/VLMFT-method.png',
  10: '/images/peter-pan-showcase-cover.jpg',
  11: '/images/batavia-cover.jpg',
  12: '/images/perspective-cover.jpg',
};
export const projectCards = {
  1: { en: 'Generative environments, grounded in real space.', zh: '以真实空间为基础的生成式虚拟环境。', recognition: 'CHI 2026 · UIST 2026 Demo', image: '/images/roomify-demo-card.gif', poster: '/images/roomify-demo-poster.jpg' },
  9: { en: 'A custom depth benchmark, from public data to model tuning.', zh: '从公开数据到自建深度评测基准与模型微调。', image: '/images/VLMFT-img.png', fit: 'contain' },
  10: { en: 'A projected shadow, a physical space, and a playful exchange.', zh: '以影子为媒介，在真实空间中展开具身交互。', recognition: 'CMU School of Design Showcase' },
  11: { title: { en: 'Sinking Batavia', zh: '巴达维亚之沉没' }, en: 'Three cinematic worlds, translated into a coastal museum.', zh: '将电影中的三层世界转译为海岸上的文化共生博物馆。' },
  12: { title: { en: 'The Other Perspective', zh: '另一种视角' }, en: 'A community pavilion for people, plants, and the city.', zh: '以共同建造的公共装置，呈现人、植物与城市的共生。', recognition: 'Best Popularity Award' },
  7: { en: 'Making music through color, shape, and motion.', zh: '用色彩、形状与动作创作音乐。', image: '/images/SyneSound 6.png', recognition: 'NOVA Most InNOVAtive Prize' },
  8: { en: 'Everyday rooms become playable AR worlds.', zh: '将日常房间变成可玩的 AR 世界。' },
  6: { en: 'Reconstructing memories of home in virtual reality.', zh: '在虚拟现实中重建关于家的记忆。' },
  3: { en: 'From emotional responses to exhibition spaces.', zh: '从情绪感知到展览空间设计。' },
  2: { en: 'Campus movement translated into a game and AR guide.', zh: '将校园行为数据转化为桌游与 AR 导览。' },
  4: { en: 'Reading a city through its street-level colors.', zh: '通过街道色彩，观察与理解城市。' },
  5: { en: 'Mutual help between people, with pets at the center.', zh: '以宠物为中心，建立人与机构之间的互助关系。', poster: '/images/pets-tribe-cover-poster.webp' },
};
export const projectFilters = [
  { id: 'all', en: 'All work', zh: '全部', ids: null },
  { id: 'products', en: 'Products', zh: '产品', ids: [1, 5, 7] },
  { id: 'compdesign', en: 'Computational design', zh: '计算设计', ids: [2, 3, 9] },
  { id: 'architecture', en: 'Architecture', zh: '建筑', ids: [11, 12] },
  { id: 'dataviz', en: 'Data & cities', zh: '数据与城市', ids: [4] },
  { id: 'xr', en: 'Spatial experiences', zh: '空间体验', ids: [1, 6, 8, 10, 12] },
];
export function orderProjects(projects) {
  const latestYear = (project) => Math.max(...(String(project.year || '').match(/\d{4}/g) || ['0']).map(Number));
  const rank = (id) => projectOrder.includes(id) ? projectOrder.indexOf(id) : projectOrder.length;
  return [...projects].sort((a, b) => {
    if (a.id === 1 || b.id === 1) return Number(b.id === 1) - Number(a.id === 1);
    return latestYear(b) - latestYear(a) || rank(a.id) - rank(b.id);
  });
}
