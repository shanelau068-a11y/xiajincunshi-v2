export type BookChapter = {
  id: string;
  order: number;
  part: string;
  title: string;
  file: string;
  description: string;
};

export const bookChapters: BookChapter[] = [
  {
    "id": "preface",
    "order": 0,
    "part": "前言",
    "title": "前言",
    "file": "前言 fb82080e7d3083cfb0d4816f3d892320.html",
    "description": "说明村史编纂缘起、资料来源与保存乡土记忆的意义。"
  },
  {
    "id": "land",
    "order": 1,
    "part": "第一篇",
    "title": "土地资源",
    "file": "第一篇 土地资源 3842080e7d30828e9bbb81e000bdcbe6.html",
    "description": "记述村庄地理、田畴、水土、山林与自然资源。"
  },
  {
    "id": "origin",
    "order": 2,
    "part": "第二篇",
    "title": "先祖创乡",
    "file": "第二篇 先祖创乡 5272080e7d3082f1b970018faf48978c.html",
    "description": "追溯先民迁徙、开基创业与村落形成脉络。"
  },
  {
    "id": "construction",
    "order": 3,
    "part": "第三篇",
    "title": "乡村建设",
    "file": "第三篇 乡村建设 c092080e7d3083a8a708015986a0468a.html",
    "description": "记录道路、水利、公共设施与乡村面貌变迁。"
  },
  {
    "id": "population",
    "order": 4,
    "part": "第四篇",
    "title": "人口",
    "file": "第四篇 人口 eff2080e7d308315b6cc81cbc14ad003.html",
    "description": "呈现人口规模、姓氏分布、迁徙与家庭结构。"
  },
  {
    "id": "economy",
    "order": 5,
    "part": "第五篇",
    "title": "经济",
    "file": "第五篇 经济 cd42080e7d3082df878381d7c49a5917.html",
    "description": "梳理农业、副业、集体经济与村民生计变化。"
  },
  {
    "id": "politics",
    "order": 6,
    "part": "第六篇",
    "title": "政治",
    "file": "第六篇 政治 33a2080e7d3082c0941901bae276ffbb.html",
    "description": "记录村庄治理、组织沿革与基层公共事务。"
  },
  {
    "id": "people",
    "order": 7,
    "part": "第七篇",
    "title": "人物",
    "file": "第七篇 人物 0272080e7d308364a540010ffc320afc.html",
    "description": "收录村中贤达、干部、教师、乡贤与普通人物事迹。"
  },
  {
    "id": "culture",
    "order": 8,
    "part": "第八篇",
    "title": "文化",
    "file": "第八篇 文化 5302080e7d3083b790548134ce7beffa.html",
    "description": "展现民俗、信仰、文艺、方言与乡土文化传统。"
  },
  {
    "id": "education",
    "order": 9,
    "part": "第九篇",
    "title": "教育",
    "file": "第九篇 教育 e902080e7d3082cd94a101d4a1e74dde.html",
    "description": "记载学校、教师、学子与村庄教育发展。"
  },
  {
    "id": "chronicle",
    "order": 10,
    "part": "第十篇",
    "title": "大事记",
    "file": "第十篇 大事记 2462080e7d3082139b6401a9278097cd.html",
    "description": "按时间记录村庄重要事件与历史节点。"
  }
];

export const getChapterById = (id?: string | null) =>
  bookChapters.find((chapter) => chapter.id === id) ?? bookChapters[0];
