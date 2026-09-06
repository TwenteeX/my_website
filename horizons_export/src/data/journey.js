export const places = [
 {id:'beijing',en:'Beijing',zh:'北京',coords:[116.4074,39.9042],label:[843,107],pin:[825,128]},
 {id:'qingdao',en:'Qingdao',zh:'青岛',coords:[120.3826,36.0671],label:[871,165],pin:[851,164]},
 {id:'seattle',en:'Seattle',zh:'西雅图',coords:[-122.3321,47.6062],label:[140,94]},
 {id:'san-francisco',en:'San Francisco',zh:'旧金山',coords:[-122.4194,37.7749],label:[116,176]},
 {id:'sydney',en:'Sydney',zh:'悉尼',coords:[151.2093,-33.8688],label:[883,373]},
 {id:'chongqing',en:'Chongqing',zh:'重庆',coords:[106.5516,29.563],label:[740,206]},
 {id:'baoding',en:'Baoding',zh:'保定',coords:[115.4646,38.874],label:[766,127],pin:[798,146]},
 {id:'pittsburgh',en:'Pittsburgh',zh:'匹兹堡',coords:[-79.9959,40.4406],label:[304,165],pin:[296,147]},
 {id:'barcelona',en:'Barcelona',zh:'巴塞罗那',coords:[2.1734,41.3851],label:[515,113]},
 {id:'detroit',en:'Detroit',zh:'底特律',coords:[-83.0458,42.3314],label:[285,92],pin:[266,118]}
];
// Events are ordered by start date. Long stays retain their full date range.
export const journey = [
 {id:'tsinghua',place:'beijing',start:'2020-09-01',end:'2025-06-30',date:'2020—2025',en:'Tsinghua University',zh:'清华大学',detailEn:'Completed a bachelor’s degree in the School of Architecture.',detailZh:'在清华大学建筑学院完成本科学业。'},
 {id:'qingdao-study',place:'qingdao',start:'2023-06-01',end:'2023-06-30',date:'Jun 2023',dateZh:'2023.06',en:'Urban typology fieldwork',zh:'城市类型学研究',detailEn:'Studied the urban typology of May Fourth Square in Qingdao.',detailZh:'对青岛五四广场开展城市类型学研究。'},
 {id:'seattle-exchange',place:'seattle',start:'2023-07-01',end:'2023-07-31',date:'Jul 2023',dateZh:'2023.07',en:'Academic exchange',zh:'学术交流',detailEn:'Visited UW Architecture, Gensler, NBBJ, and GIX for academic and professional exchange.',detailZh:'与 UW 建筑学院、Gensler、NBBJ、GIX 等学术机构及建筑事务所开展交流。'},
 {id:'berkeley-exchange',place:'san-francisco',start:'2023-08-01',end:'2023-08-31',date:'Aug 2023',dateZh:'2023.08',en:'UC Berkeley exchange',zh:'加州大学伯克利分校交流',detailEn:'Academic exchange with UC Berkeley’s College of Environmental Design in the San Francisco Bay Area.',detailZh:'在旧金山湾区参与 UCB 交流活动，与环境设计学院开展学术交流。'},
 {id:'sydney-exchange',place:'sydney',start:'2024-02-01',end:'2024-05-31',date:'Feb—May 2024',dateZh:'2024.02—05',en:'University of Sydney',zh:'悉尼大学交换',detailEn:'Exchange studies in architecture at the University of Sydney.',detailZh:'在悉尼大学建筑学院交换学习。'},
 {id:'feeling-home',place:'chongqing',start:'2024-07-01',end:'2024-07-31',date:'Jul 2024',dateZh:'2024.07',en:'Feeling Home in Memory',zh:'Feeling Home in Memory',detailEn:'Interviewed a couple about their home and memories, then developed the VR project Feeling Home in Memory.',detailZh:'采访一对夫妇，以他们的居住经历与记忆完成 Feeling Home in Memory 项目。'},
 {id:'beiyue-temple',place:'baoding',start:'2024-08-01',end:'2024-08-31',date:'Aug 2024',dateZh:'2024.08',en:'Beiyue Temple survey',zh:'北岳庙古建筑测绘',detailEn:'Architectural surveying and documentation of Beiyue Temple in Baoding.',detailZh:'赴保定开展北岳庙古建筑测绘与记录。'},
 {id:'research-assistant',place:'beijing',start:'2025-06-01',end:'2025-08-31',date:'Jun—Aug 2025',dateZh:'2025.06—08',en:'Research assistant · Tsinghua',zh:'清华大学科研助理',detailEn:'Worked on Roomify at the Institute of Network Sciences and Cyberspace, Tsinghua University.',detailZh:'在清华大学网络空间与网络安全研究所担任科研助理，参与 Roomify 研究。'},
 {id:'cmu',place:'pittsburgh',start:'2025-08-01',end:'2027-05-31',date:'Aug 2025—May 2027',dateZh:'2025.08—2027.05',en:'Carnegie Mellon University',zh:'卡耐基梅隆大学',detailEn:'M.S. in Computational Design, Applied AI & Machine Learning track. Expected graduation: May 2027.',detailZh:'攻读计算设计硕士，方向为应用人工智能与机器学习，预计于 2027 年 5 月毕业。'},
 {id:'chi',place:'barcelona',start:'2026-04-01',end:'2026-04-30',date:'Apr 2026',dateZh:'2026.04',en:'CHI 2026',zh:'CHI 2026',detailEn:'Attended CHI 2026 with the Roomify research project.',detailZh:'携 Roomify 研究项目参加 CHI 2026。'},
 {id:'bytedance',place:'beijing',start:'2026-05-01',end:'2026-08-31',date:'May—Aug 2026',dateZh:'2026.05—08',en:'ByteDance Seed internship',zh:'字节跳动 Seed 实习',detailEn:'Machine learning product management internship focused on VLM data strategy and 3D coding.',detailZh:'机器学习产品经理实习，负责视觉语言模型数据策略与 3D 编程方向。'},
 {id:'uist',place:'detroit',start:'2026-11-01',end:'2026-11-30',date:'Nov 2026',dateZh:'2026.11',en:'UIST 2026 · Live demo',zh:'UIST 2026 · 现场演示',detailEn:'Planned live demonstration of Roomify at UIST 2026. Demo accepted.',detailZh:'计划在 UIST 2026 现场演示 Roomify；Demo 已录用。'}
];
export const projectPoint=([lon,lat])=>[(lon+180)*1000/360,(90-lat)*500/180];
// Route segments wrap at the antimeridian instead of crossing the whole map.
export function routePath(from,to){const a=projectPoint(from),b=projectPoint(to);let dx=b[0]-a[0];if(Math.abs(dx)>500)b[0]+=dx>0?-1000:1000;const bend=Math.min(100,Math.abs(b[0]-a[0])*.22+10);const d=(shift)=>`M ${a[0]+shift} ${a[1]} Q ${(a[0]+b[0])/2+shift} ${Math.min(a[1],b[1])-bend} ${b[0]+shift} ${b[1]}`;return [d(0),...(b[0]<0?[d(1000)]:b[0]>1000?[d(-1000)]:[])].join(' ')}
