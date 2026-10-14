export type GenealogyPerson = {
  id: string;
  name: string;
  gender: '男' | '女';
  birthYear?: number;
  deathYear?: number;
  fatherId?: string;
  motherId?: string;
  spouseIds: string[];
  childrenIds: string[];
  description: string;
  clan?: string;
  sourceTitle?: string;
  sourceFile?: string;
  sourceFiles?: string[];
  aliases?: string[];
  generation?: number;
  generationName?: string;
  generationSystem?: string;
  generationEvidence?: '参考表明确记载' | '原文明确记载' | '亲子关系推定';
  reviewNotes?: string[];
};

export const genealogyPeople: GenealogyPerson[] = [
  {
    "id": "g_冯一娘_第一节_下津廖氏源流纪略",
    "name": "冯一娘",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖琼瑄于唐天宝二年（743）钦取进京，官拜参政大夫。其子廖四十一郎因\"安史之乱\"（755—763）由虔化迁宁化石壁寨，屡遭兵乱再迁顺昌合阳市（今南平市延平区峡阳镇）。五代十国时，廖文兴兄弟九人仕后唐，金阶佐庄宗。廖花（俗称花公）于宋太祖乾德元年（963），袭父廖文兴之职，出仕湖广参政莅任汀州。妣冯一娘（俗称花妈）诰封淑德太恭人。花公花妈生一子廖昌，任恩阴县尹。三孙：廖彻，太学生，敕赠云骑尉；廖政任陵宁县丞；廖敏任湖广德安府通判。传至五世玄孙46丁口，五代同堂。花公四世廖百一郎迁上杭城南，六世廖万一郎迁洪山（今属永定），十一世廖永铨迁梅县，十三世廖满郎迁大埔，二十世廖兴可于清嘉庆元年（1796）携弟入潮之东津乡开基草美廖。",
    "sourceTitle": "第一节 下津廖氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html",
    "clan": "冯氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html"
    ]
  },
  {
    "id": "g_廖东隐_第二节_廖厝",
    "name": "廖东隐",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖东隐：（方志载稳），据洋头村村碑记载于宋末迁枫溪洋头创乡，现传700余人。",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "clan": "廖氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "g_廖光景任_第一节_下津廖氏源流纪略",
    "name": "廖光景",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_琼瑄_第一节_下津廖氏源流纪略",
      "g_琳瑄_第一节_下津廖氏源流纪略",
      "g_瑞瑄_第一节_下津廖氏源流纪略"
    ],
    "description": "自廖崇德之后一百多年间，是廖氏历史上一个鼎盛时期，廖族任尚书官职7人，进士登第22人，举人39人，其他官宦180人，成为当时的名门望族。廖光景任唐宰相，生琼瑄、琳瑄、瑞瑄三子。",
    "sourceTitle": "第一节 下津廖氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html",
    "clan": "廖氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html"
    ]
  },
  {
    "id": "g_廖兴可_第三节_草美乡",
    "name": "廖兴可",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-LI-0003"
    ],
    "childrenIds": [],
    "description": "花公二十世；草美开基始祖套入“永”字辈\"永（套入开潮公派字辈）\"字辈：廖氏花公二十世 廖兴可 于清嘉庆元年（1796），携弟廖兴以由大埔县三河西坑邦田磜（今属茶阳镇）入潮养鸭群为生，选择巷内前一座荒沙墩搭草寮居住，因而得乡名草尾廖。",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "clan": "廖氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
      "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html"
    ]
  },
  {
    "id": "g_炎帝_第一节_下津洪氏源流纪略",
    "name": "炎帝",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "炎帝生于姜水而命姓为姜，他尝百草、辨五谷、驯六畜，开创农业，号神农氏。",
    "sourceTitle": "第一节 下津洪氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第五章 洪氏/第一节 下津洪氏源流纪略 a9c2080e7d3082f69090816be43e8cfa.html",
    "clan": "洪氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第五章 洪氏/第一节 下津洪氏源流纪略 a9c2080e7d3082f69090816be43e8cfa.html"
    ]
  },
  {
    "id": "g_蔡春潮_第六节_蔡氏",
    "name": "蔡春潮",
    "gender": "男",
    "birthYear": 1945,
    "spouseIds": [],
    "childrenIds": [],
    "description": "始祖 蔡春潮 1945年出生于下津，出东郊母姨嗣蔡为祖，1980年迁回下津办石板厂落籍本村。蔡氏在下津创祖已历46年，现传三世，1户，5人。",
    "clan": "蔡氏",
    "sourceTitle": "第六节 蔡氏",
    "sourceFile": "第二篇 先祖创乡/第十二章 落籍创祖/第六节 蔡氏 e9b2080e7d3083fbb0000180b5b752c8.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十二章 落籍创祖/第六节 蔡氏 e9b2080e7d3083fbb0000180b5b752c8.html"
    ]
  },
  {
    "id": "g_曾新汉_第三节_曾氏",
    "name": "曾新汉",
    "gender": "男",
    "birthYear": 1913,
    "spouseIds": [
      "ref_ZENG0007"
    ],
    "childrenIds": [],
    "description": "始祖 曾新汉 于1930年（其时17岁），由长乐县（今五华县）油田乡浮湖村迁入海阳县东津乡，以理发为业，租廖厝木樟妣房屋居住，娶薛巧云为妻，落籍本村，其后兴建房屋于五马内公厅北定居。曾氏在下津创祖已历89年，现传四世，有4户，16人。",
    "clan": "曾氏",
    "sourceTitle": "第三节 曾氏",
    "sourceFile": "第二篇 先祖创乡/第十二章 落籍创祖/第三节 曾氏 4802080e7d30839db14e01f35088b14c.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十二章 落籍创祖/第三节 曾氏 4802080e7d30839db14e01f35088b14c.html"
    ]
  },
  {
    "id": "g_陈莲峰_第二节_陈厝",
    "name": "陈莲峰",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-TIAN-1001",
      "ref_XJ-XU-1001",
      "ref_XJ-LIN-1001"
    ],
    "childrenIds": [
      "ref_XJ-CHEN-1017",
      "ref_XJ-CHEN-1018",
      "ref_XJ-CHEN-1019"
    ],
    "description": "开基祖 陈莲峰 避战乱举家由鮀浦迁于莲花山，结庐聚贤讲学。于元至元十九年（时年已四十），元朝以贤良授潮州总管府事。是年，卜择笔架山北麓，韩江东岸之滨开基下津陈厝。",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "fatherId": "ref_XJ-CHEN-1012",
    "aliases": [
      "陈莲峰卜"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "g_陈旺_第一节_下津陈氏源流纪略",
    "name": "陈旺",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "三、义门派： 义门派又称德安派。始祖陈旺，系南朝陈宣帝之胤，唐封晋国公。唐大和六年（832），迁居江州（今江西九江）德安县太平乡常乐里永靖村，建江州义门大宅院。唐大顺二年（891）唐昭宗诏赐立义门。至宋仁宗嘉祐八年（1063），奉旨分家。其后奉陈旺为义门派始祖。",
    "clan": "陈氏",
    "sourceTitle": "第一节 下津陈氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html"
    ]
  },
  {
    "id": "g_陈邕_第一节_下津陈氏源流纪略",
    "name": "陈邕",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "二、南院派： 南院派又称忠顺派。始祖陈邕，唐神龙乙巳科（705）进士，官至太子太傅。唐开元二十四年（736），因忤奸相李林甫，被贬入闽，居兴化（今莆田市），后移漳州驿站南厢山。陈邕兴造宅院于南厢山，名曰南山报劬寺，俗称\"南山寺\"。唐乾元元年（758）陈邕卒葬龙溪水头山。唐肃宗加封忠顺王。因而，南院派亦称忠顺派。",
    "clan": "陈氏",
    "sourceTitle": "第一节 下津陈氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html",
    "deathYear": 758,
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html"
    ]
  },
  {
    "id": "g_郭德福_第三节_郭氏",
    "name": "郭德福",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "杜猴寨散寨时，郭氏仅存 郭德简、郭德福 二户。他们于民国年间（比甘草木先迁），由杜猴寨迁弯堤脚开居，郭德简建屋在康部祥房屋南侧。郭德福以挻牛屎的收入为生（卖人养鱼，以堆论价）。",
    "clan": "郭氏",
    "sourceTitle": "第三节 郭氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html"
    ]
  },
  {
    "id": "g_郭德简_第三节_郭氏",
    "name": "郭德简",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "杜猴寨散寨时，郭氏仅存 郭德简、郭德福 二户。他们于民国年间（比甘草木先迁），由杜猴寨迁弯堤脚开居，郭德简建屋在康部祥房屋南侧。郭德福以挻牛屎的收入为生（卖人养鱼，以堆论价）。",
    "clan": "郭氏",
    "sourceTitle": "第三节 郭氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html"
    ]
  },
  {
    "id": "g_黄义成_第四节_绞队井黄氏",
    "name": "黄义成",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-HUANG-0022"
    ],
    "description": "始祖 黄义成 祖籍海阳县浮洋（今潮安区浮洋镇）菊塘村，青年时期漂洋过海到马来西亚谋生。1930年，携子黄炳森回潮州，先居于桥东铺尾，以经营农具为业。潮州沦陷期间（1939—1945），举家移居意溪，而后辗转东津，先居于番客内，后择绞队井廖厝定居，公卒葬八卦地山。其子黄炳森，以经营蔬菜为生。1952年，全家落籍下津。",
    "clan": "黄氏",
    "sourceTitle": "第四节 绞队井黄氏",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第四节 绞队井黄氏 dfd2080e7d30838a90e48196ea758dc6.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第四节 绞队井黄氏 dfd2080e7d30838a90e48196ea758dc6.html"
    ]
  },
  {
    "id": "g_姬叔封_第一节_下津康氏源流纪略",
    "name": "姬叔封",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康氏源自姬姓，望出京兆。始祖姬叔封，系周文王姬昌第九子。公元前1046年，周武王（周文王次子）封同母少弟叔封于康地（今河南禹州西北）食邑。因此，称康叔。",
    "clan": "姬氏",
    "sourceTitle": "第一节 下津康氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第一节 下津康氏源流纪略 5ba2080e7d3083d2a3160144bd8f7f1a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第一节 下津康氏源流纪略 5ba2080e7d3083d2a3160144bd8f7f1a.html"
    ]
  },
  {
    "id": "g_康部祥_第三节_杜猴寨康氏",
    "name": "康部祥",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康部祥 为一大户，约于民国初年，由杜猴寨迁弯堤脚荆棘丛生之地，披荆斩棘，重建住宅，现（2019）传五世，分3户，有14人。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "g_康大成_第三节_杜猴寨康氏",
    "name": "康大成",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_康才林_第三节_杜猴寨康氏",
      "ref_XJ-KANG-0016"
    ],
    "description": "康大成 为一大户，生两子，长子康才林，次子康才香。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "g_李福木_第二节_李氏",
    "name": "李福木",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_LI0010",
      "ref_LI0011",
      "ref_LI0012"
    ],
    "description": "李福木，以卖甘草货为生，有三子二女：长子李得茂（阿软），次子李得新送给松口冯家，更名冯发新，三子李亚积出武平，二女皆送人。",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "g_李老大_第二节_李氏",
    "name": "李老大",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "散寨时，李氏仅存 李老大（李得荣之父），以卖甘草货为生，时人称之\"甘草木\"、李福木、李老三 3户。他们于民国十七年由杜猴寨迁陈厝租屋居住。",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "aliases": [
      "李老",
      "甘草木"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "g_林浩涛_第二节_林氏",
    "name": "林浩涛",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "始祖 林浩涛 祖籍潮州城北门。于1939年，由北门到东津堤顶经营干果生意，后举家落籍下津村，居于廖厝埔。至2019年，传四世，分为5户，有34人。",
    "clan": "林氏",
    "sourceTitle": "第二节 林氏",
    "sourceFile": "第二篇 先祖创乡/第八章 洗马桥/第二节 林氏 6922080e7d30825da1c9814c94ff3da2.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第八章 洗马桥/第二节 林氏 6922080e7d30825da1c9814c94ff3da2.html"
    ]
  },
  {
    "id": "g_陈氏_第三节_窟尾沟乡",
    "name": "陈氏（刘益承配）",
    "gender": "女",
    "spouseIds": [
      "g_刘益承_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘铉_第三节_窟尾沟乡",
      "g_刘麟_第三节_窟尾沟乡"
    ],
    "description": "桃坑22世\"延\"字辈刘益承字我任。公增创田产，娶陈氏，生刘铉、刘麟二子。两子成家后，分为两大房。我任公与兄分房，迄今约历426年，传至桃坑38世\"泽\"字辈，现有295户，1326人。我任公祠兴工于1947年，竣工于1949年，时适逢解放，未行庆典。",
    "clan": "陈氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_陈锶敏_第三节_窟尾沟乡",
    "name": "陈锶敏",
    "gender": "女",
    "spouseIds": [
      "g_刘咏华_第三节_窟尾沟乡"
    ],
    "childrenIds": [],
    "description": "二女玉花： 适进发。育有一子一女：长女翠华，子咏华（配偶陈锶敏）。",
    "clan": "陈氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_洪氏_第三节_窟尾沟乡",
    "name": "洪氏",
    "gender": "女",
    "spouseIds": [
      "g_刘子实_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘力友_第三节_窟尾沟乡",
      "g_刘力瑞_第三节_窟尾沟乡"
    ],
    "description": "桃坑24世\"茂\"字辈 刘子实，公扩增田园，娶洪氏，生力友、力瑞二子。",
    "clan": "洪氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_黄丽香_第三节_窟尾沟乡",
    "name": "黄丽香",
    "gender": "女",
    "spouseIds": [
      "g_刘永淡_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘玉琴_第三节_窟尾沟乡",
      "g_刘锐泽_第三节_窟尾沟乡",
      "g_刘玉花_第三节_窟尾沟乡",
      "g_刘耀怀_第三节_窟尾沟乡",
      "g_刘玉珊_第三节_窟尾沟乡"
    ],
    "description": "桃坑35世\"昆\"字辈：永淡，配偶黄丽香。育有大女儿玉琴，大儿子锐泽，二女儿玉花，小儿子耀怀，小女儿玉珊。",
    "clan": "黄氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_梁瑞音_第三节_窟尾沟乡",
    "name": "梁瑞音",
    "gender": "女",
    "spouseIds": [
      "g_刘喜林_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘永利_第三节_窟尾沟乡",
      "g_刘永淡_第三节_窟尾沟乡"
    ],
    "description": "桃坑34世\"裕\"字辈：喜林配梁瑞音，育有二子：长子永利，次子永淡。锡林，生有一女：瑶珍(枫溪姑)。梁瑞音葬在溪边，飞天燕山下，梁瑞音是中津梁，照壁头这里，梁瑞音的哥哥的孙女叫巧娴，住中津，巧娴的姐姐住下津，巧娴姐老公在下津市场卖石螺。",
    "clan": "梁氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_梁氏妙贞_第四节_巷内乡",
    "name": "梁氏妙贞",
    "gender": "女",
    "spouseIds": [
      "g_刘茂翔_第四节_巷内乡"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0234",
      "g_刘力谦_第四节_巷内乡",
      "ref_XJ-LIU-0235",
      "ref_XJ-LIU-0236"
    ],
    "description": "一四八世（桃坑24世\"茂\"字辈）刘茂翔，获庠生功名，以子显贵，赠文林郎。妣梁氏妙贞，以子显贵，旌表节。生力添、力谦、力真、力任四子。公于明末（1643）主持兴建大夫第，现称旧厝公厅。",
    "clan": "梁氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "g_廖春玲_第三节_窟尾沟乡",
    "name": "廖春玲",
    "gender": "女",
    "spouseIds": [
      "g_刘耀怀_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘雄明_第三节_窟尾沟乡",
      "ref_XJ-LIU-0054"
    ],
    "description": "次子耀怀（桃坑36世\"启\"字辈）： 配偶廖春玲。育有一子一女：子雄明（桃坑37世\"鸿\"字辈），配偶陆佩东。雄明与陆佩东育有：子思博（桃坑38世\"泽\"字辈），女思彤。",
    "clan": "廖氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_林秋娥_第三节_窟尾沟乡",
    "name": "林秋娥",
    "gender": "女",
    "spouseIds": [
      "g_刘锐泽_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘雄宣_第三节_窟尾沟乡",
      "g_刘戴慧_第三节_窟尾沟乡"
    ],
    "description": "长子锐泽（桃坑36世\"启\"字辈）： 配偶林秋娥。育有一子一女：子雄宣（桃坑37世\"鸿\"字辈），配偶惠璇。雄宣与惠璇育有：女纯语，子镒齐（桃坑38世\"泽\"字辈）。",
    "clan": "林氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘策_第三节_窟尾沟乡",
    "name": "刘策",
    "gender": "男",
    "spouseIds": [
      "g_辛氏_第三节_窟尾沟乡",
      "g_郑氏_第二节_桃坑乡"
    ],
    "childrenIds": [
      "g_刘以松_第三节_窟尾沟乡",
      "g_刘梅松_第四节_巷内乡",
      "g_刘桂松_第三节_窟尾沟乡"
    ],
    "description": "刘氏一四三世（桃坑十九世\"日\"字辈）刘策字仕政，号松山，获庠生功名。公约生于明成化十三年（1477），约于明弘治十五年（1502）由桃坑乡迁窟尾沟乡开基，垦荒造田。策公之开基地在姚姓居址东侧，今大房大聚落背之高地，祖居尚有遗迹可考。公原配辛氏，继配郑氏，生以松、梅松、桂松三子。公卒葬盐埠（原洪厝园东侧）。公之三个儿子命名皆有\"松\"字，古代墓地也称\"粮山\"。三子在立墓时，为使子孙缅怀祖德，为考立谥号\"松山\"书刻于墓碑。尔后，裔孙遂以祖墓碑文尊称\"松山公\"。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "birthYear": 1477,
    "fatherId": "ref_XJ-LIU-0219",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 19,
    "generationSystem": "桃坑",
    "generationName": "日",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "g_刘戴慧_第三节_窟尾沟乡",
    "name": "刘戴慧",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-YU-0001"
    ],
    "childrenIds": [
      "g_余可申_第三节_窟尾沟乡"
    ],
    "description": "女戴慧，适余家铎。育有一子余可申。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘锐泽_第三节_窟尾沟乡",
    "motherId": "g_林秋娥_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘德荣_第三节_窟尾沟乡",
    "name": "刘德荣",
    "gender": "男",
    "spouseIds": [
      "g_许清娇_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘锡林_第三节_窟尾沟乡",
      "g_刘喜林_第三节_窟尾沟乡"
    ],
    "description": "长子德荣，配偶许清娇。长子锡林，次子喜林。许清娇葬在虎头山上。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘世乾_第三节_窟尾沟乡",
    "generation": 33,
    "generationSystem": "桃坑",
    "generationName": "德",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "g_刘惠璇_第三节_窟尾沟乡",
    "name": "刘惠璇",
    "gender": "女",
    "spouseIds": [
      "g_刘雄宣_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘纯语_第三节_窟尾沟乡",
      "g_刘镒齐_第三节_窟尾沟乡"
    ],
    "description": "长子锐泽（桃坑36世\"启\"字辈）： 配偶林秋娥。育有一子一女：子雄宣（桃坑37世\"鸿\"字辈），配偶惠璇。雄宣与惠璇育有：女纯语，子镒齐（桃坑38世\"泽\"字辈）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘佳琪_第三节_窟尾沟乡",
    "name": "刘佳琪",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-ZHANG-0001"
    ],
    "childrenIds": [],
    "description": "幺女玉珊： 适陈少伟。育有一女：佳琪（适张振钊）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "motherId": "g_刘玉珊_第三节_窟尾沟乡",
    "fatherId": "ref_XJ-CHEN-0003",
    "reviewNotes": [
      "原文只记名字，是刘氏女性的子女；当前沿用旧显示姓名，姓氏须核对，不应自动按母姓补刘。"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘力谦_第四节_巷内乡",
    "name": "刘力谦",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-GUO-0001",
      "ref_XJ-LIN-0002"
    ],
    "childrenIds": [
      "g_刘贻祥_第四节_巷内乡",
      "g_刘贻铮_第四节_巷内乡"
    ],
    "description": "刘氏149世/桃坑25世\"力\"字辈：一四九世（桃坑25世“力”字辈）刘力谦字注，号益庵。公于清康熙三十八年（1699）中己卯科举人，授江陵县知县……康熙皇帝钦赐“五马分符”，赏银褒奖。清康熙四十一年（1702），刘力谦任满……用赏银兴建公厅，以父亲名字命为“茂翔公厅”。力谦公致仕后纳林氏为妾，生贻祥、贻铮二子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘茂翔_第四节_巷内乡",
    "motherId": "g_梁氏妙贞_第四节_巷内乡",
    "aliases": [
      "力谦公致"
    ],
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "g_刘梅松_第四节_巷内乡",
    "name": "刘梅松",
    "gender": "男",
    "spouseIds": [
      "g_徐氏_第四节_巷内乡"
    ],
    "childrenIds": [
      "g_刘化雨_第四节_巷内乡"
    ],
    "description": "刘氏一四四世（桃坑二十世\"旭\"字辈）刘梅松字茂雪。公约生于明正德十三年（1518），约于明嘉靖二十六年（1547），由大房大祖屋移创巷内乡。开基地在今旧厝公厅南二巷与今巷内公厅北三巷之内，因而得巷内乡名。巷内祖居地明代挖掘的水井，至今保存完整，成为文物，是创乡故址的史证。梅松公娶徐氏，生化雨一子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "birthYear": 1518,
    "fatherId": "g_刘策_第三节_窟尾沟乡",
    "generation": 20,
    "generationSystem": "桃坑",
    "generationName": "旭",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘勤生_第九节_海鹅头刘氏",
    "name": "刘勤生",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0475"
    ],
    "description": "海鹅头刘氏，系刘开七之胤，始祖刘勤生，于民国初年，由饶平县坪溪迁东津乡响水坑内之下湖定居，传至其子刘炳林，因屡遭\"乌青队\"骚扰，于潮州沦陷间（1939—1945），由下湖迁海鹅头村定居。现传8户，35人。",
    "clan": "刘氏",
    "sourceTitle": "第九节 海鹅头刘氏",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第九节 海鹅头刘氏 8fd2080e7d3083bfafdd812cc353b14a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第九节 海鹅头刘氏 8fd2080e7d3083bfafdd812cc353b14a.html"
    ]
  },
  {
    "id": "g_刘锐泽_第三节_窟尾沟乡",
    "name": "刘锐泽",
    "gender": "男",
    "spouseIds": [
      "g_林秋娥_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘雄宣_第三节_窟尾沟乡",
      "g_刘戴慧_第三节_窟尾沟乡"
    ],
    "description": "长子锐泽（桃坑36世\"启\"字辈）： 配偶林秋娥。育有一子一女：子雄宣（桃坑37世\"鸿\"字辈），配偶惠璇。雄宣与惠璇育有：女纯语，子镒齐（桃坑38世\"泽\"字辈）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永淡_第三节_窟尾沟乡",
    "motherId": "g_黄丽香_第三节_窟尾沟乡",
    "generation": 36,
    "generationSystem": "桃坑",
    "generationName": "启",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘绍达_第三节_窟尾沟乡",
    "name": "刘绍达",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘世乾_第三节_窟尾沟乡"
    ],
    "description": "桃坑31世\"绍\"字辈：绍达，宗一之子。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "ref_XJ-LIU-0029",
    "generation": 31,
    "generationSystem": "桃坑",
    "generationName": "绍",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘世乾_第三节_窟尾沟乡",
    "name": "刘世乾",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘德荣_第三节_窟尾沟乡",
      "ref_XJ-LIU-0033"
    ],
    "description": "桃坑32世\"世\"字辈：世乾，绍达之子。生有二子：长子德荣，次子松镇。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘绍达_第三节_窟尾沟乡",
    "generation": 32,
    "generationSystem": "桃坑",
    "generationName": "世",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘枢_第二节_桃坑乡",
    "name": "刘枢",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-ZHENG-0002"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0209",
      "ref_XJ-LIU-0207",
      "ref_XJ-LIU-0208"
    ],
    "description": "刘枢字原丙，系甲四公房二房，妣郑氏，生勋、焘、然三子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0204",
    "motherId": "ref_XJ-ZHAO-0001",
    "generation": 12,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "g_刘锡林_第三节_窟尾沟乡",
    "name": "刘锡林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘瑶珍_第三节_窟尾沟乡"
    ],
    "description": "桃坑34世\"裕\"字辈：喜林配梁瑞音，育有二子：长子永利，次子永淡。锡林，生有一女：瑶珍(枫溪姑)。梁瑞音葬在溪边，飞天燕山下，梁瑞音是中津梁，照壁头这里，梁瑞音的哥哥的孙女叫巧娴，住中津，巧娴的姐姐住下津，巧娴姐老公在下津市场卖石螺。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘德荣_第三节_窟尾沟乡",
    "motherId": "g_许清娇_第三节_窟尾沟乡",
    "generation": 34,
    "generationSystem": "桃坑",
    "generationName": "裕",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘喜林_第三节_窟尾沟乡",
    "name": "刘喜林",
    "gender": "男",
    "spouseIds": [
      "g_梁瑞音_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘永利_第三节_窟尾沟乡",
      "g_刘永淡_第三节_窟尾沟乡"
    ],
    "description": "桃坑34世\"裕\"字辈：喜林配梁瑞音，育有二子：长子永利，次子永淡。锡林，生有一女：瑶珍(枫溪姑)。梁瑞音葬在溪边，飞天燕山下，梁瑞音是中津梁，照壁头这里，梁瑞音的哥哥的孙女叫巧娴，住中津，巧娴的姐姐住下津，巧娴姐老公在下津市场卖石螺。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘德荣_第三节_窟尾沟乡",
    "motherId": "g_许清娇_第三节_窟尾沟乡",
    "generation": 34,
    "generationSystem": "桃坑",
    "generationName": "裕",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘仰松_第三节_窟尾沟乡",
    "name": "刘仰松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "三子刘仰松，移居本乡西侧，扩展窟尾沟乡境，称三房。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘耀怀_第三节_窟尾沟乡",
    "name": "刘耀怀",
    "gender": "男",
    "spouseIds": [
      "g_廖春玲_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘雄明_第三节_窟尾沟乡",
      "ref_XJ-LIU-0054"
    ],
    "description": "次子耀怀（桃坑36世\"启\"字辈）： 配偶廖春玲。育有一子一女：子雄明（桃坑37世\"鸿\"字辈），配偶陆佩东。雄明与陆佩东育有：子思博（桃坑38世\"泽\"字辈），女思彤。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永淡_第三节_窟尾沟乡",
    "motherId": "g_黄丽香_第三节_窟尾沟乡",
    "generation": 36,
    "generationSystem": "桃坑",
    "generationName": "启",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘益承_第三节_窟尾沟乡",
    "name": "刘益承",
    "gender": "男",
    "spouseIds": [
      "g_陈氏_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘铉_第三节_窟尾沟乡",
      "g_刘麟_第三节_窟尾沟乡"
    ],
    "description": "桃坑22世\"延\"字辈刘益承字我任。公增创田产，娶陈氏，生刘铉、刘麟二子。两子成家后，分为两大房。我任公与兄分房，迄今约历426年，传至桃坑38世\"泽\"字辈，现有295户，1326人。我任公祠兴工于1947年，竣工于1949年，时适逢解放，未行庆典。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 22,
    "generationSystem": "桃坑",
    "generationName": "延",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘玉花_第三节_窟尾沟乡",
    "name": "刘玉花",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-UNKNOWN-0006"
    ],
    "childrenIds": [
      "g_刘翠华_第三节_窟尾沟乡",
      "g_刘咏华_第三节_窟尾沟乡"
    ],
    "description": "二女玉花： 适进发。育有一子一女：长女翠华，子咏华（配偶陈锶敏）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永淡_第三节_窟尾沟乡",
    "motherId": "g_黄丽香_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘玉琴_第三节_窟尾沟乡",
    "name": "刘玉琴",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-UNKNOWN-0001"
    ],
    "childrenIds": [
      "g_刘启泳_第三节_窟尾沟乡",
      "g_刘启跃_第三节_窟尾沟乡",
      "g_刘桂宜_第三节_窟尾沟乡"
    ],
    "description": "长女玉琴： 适坤成。育有二子一女：长子启泳，次子启跃，幺女桂宜（适江伟平）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永淡_第三节_窟尾沟乡",
    "motherId": "g_黄丽香_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘玉珊_第三节_窟尾沟乡",
    "name": "刘玉珊",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-CHEN-0003"
    ],
    "childrenIds": [
      "g_刘佳琪_第三节_窟尾沟乡"
    ],
    "description": "幺女玉珊： 适陈少伟。育有一女：佳琪（适张振钊）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永淡_第三节_窟尾沟乡",
    "motherId": "g_黄丽香_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘源明_第一节_桃坑刘氏源流纪略",
    "name": "刘源明",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "始祖源明公，约于公元前2285年，由帝都迁至封地建立刘国（今河北省唐县），以国为氏，称刘氏，谱称刘姓正宗。",
    "clan": "刘氏",
    "sourceTitle": "第一节 桃坑刘氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第一节 桃坑刘氏源流纪略 3222080e7d308204b91001e1e095c283.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第一节 桃坑刘氏源流纪略 3222080e7d308204b91001e1e095c283.html"
    ]
  },
  {
    "id": "g_陆佩东_第三节_窟尾沟乡",
    "name": "陆佩东",
    "gender": "女",
    "spouseIds": [
      "g_刘雄明_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘思博_第三节_窟尾沟乡",
      "g_刘思彤_第三节_窟尾沟乡"
    ],
    "description": "次子耀怀（桃坑36世\"启\"字辈）： 配偶廖春玲。育有一子一女：子雄明（桃坑37世\"鸿\"字辈），配偶陆佩东。雄明与陆佩东育有：子思博（桃坑38世\"泽\"字辈），女思彤。",
    "clan": "陆氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_辛氏_第三节_窟尾沟乡",
    "name": "辛氏",
    "gender": "女",
    "spouseIds": [
      "g_刘策_第三节_窟尾沟乡"
    ],
    "childrenIds": [],
    "description": "刘氏一四三世（桃坑十九世\"日\"字辈）刘策字仕政，号松山，获庠生功名。公约生于明成化十三年（1477），约于明弘治十五年（1502）由桃坑乡迁窟尾沟乡开基，垦荒造田。策公之开基地在姚姓居址东侧，今大房大聚落背之高地，祖居尚有遗迹可考。公原配辛氏，继配郑氏，生以松、梅松、桂松三子。公卒葬盐埠（原洪厝园东侧）。公之三个儿子命名皆有\"松\"字，古代墓地也称\"粮山\"。三子在立墓时，为使子孙缅怀祖德，为考立谥号\"松山\"书刻于墓碑。尔后，裔孙遂以祖墓碑文尊称\"松山公\"。",
    "clan": "辛氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_徐氏_第四节_巷内乡",
    "name": "徐氏",
    "gender": "女",
    "spouseIds": [
      "g_刘梅松_第四节_巷内乡"
    ],
    "childrenIds": [
      "g_刘化雨_第四节_巷内乡"
    ],
    "description": "刘氏一四四世（桃坑二十世\"旭\"字辈）刘梅松字茂雪。公约生于明正德十三年（1518），约于明嘉靖二十六年（1547），由大房大祖屋移创巷内乡。开基地在今旧厝公厅南二巷与今巷内公厅北三巷之内，因而得巷内乡名。巷内祖居地明代挖掘的水井，至今保存完整，成为文物，是创乡故址的史证。梅松公娶徐氏，生化雨一子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "g_许清娇_第三节_窟尾沟乡",
    "name": "许清娇",
    "gender": "女",
    "spouseIds": [
      "g_刘德荣_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘锡林_第三节_窟尾沟乡",
      "g_刘喜林_第三节_窟尾沟乡"
    ],
    "description": "长子德荣，配偶许清娇。长子锡林，次子喜林。许清娇葬在虎头山上。",
    "clan": "许氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_郑氏_第二节_桃坑乡",
    "name": "郑氏（刘策配）",
    "gender": "女",
    "spouseIds": [
      "g_刘策_第三节_窟尾沟乡"
    ],
    "childrenIds": [],
    "description": "刘氏一四三世（桃坑十九世\"日\"字辈）刘策字仕政，号松山，获庠生功名。公约生于明成化十三年（1477），约于明弘治十五年（1502）由桃坑乡迁窟尾沟乡开基，垦荒造田。策公之开基地在姚姓居址东侧，今大房大聚落背之高地，祖居尚有遗迹可考。公原配辛氏，继配郑氏，生以松、梅松、桂松三子。公卒葬盐埠（原洪厝园东侧）。公之三个儿子命名皆有\"松\"字，古代墓地也称\"粮山\"。三子在立墓时，为使子孙缅怀祖德，为考立谥号\"松山\"书刻于墓碑。尔后，裔孙遂以祖墓碑文尊称\"松山公\"。",
    "clan": "郑氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "郑氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_王忠良_第五节_王氏",
    "name": "王忠良",
    "gender": "男",
    "birthYear": 1955,
    "spouseIds": [],
    "childrenIds": [],
    "description": "始祖 王忠良 祖籍东津王厝（今属中津村）1955年出生于下津乡，落籍本村。王氏在下津创祖已历64年，现传三世，1户，8人。",
    "clan": "王氏",
    "sourceTitle": "第五节 王氏",
    "sourceFile": "第二篇 先祖创乡/第十二章 落籍创祖/第五节 王氏 1c92080e7d30836b8d868124fbaf0aa4.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十二章 落籍创祖/第五节 王氏 1c92080e7d30836b8d868124fbaf0aa4.html"
    ]
  },
  {
    "id": "g_吴应秋_第四节_吴氏",
    "name": "吴应秋",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "始祖 吴应秋 乳名兴弟，于1942年，由吴厝（今属中津村）应雇来巷内牵牛为生。1952年落籍下津，居于草尾乡。1984年归还所居侨房，由村批厝地于五马池西侧，自建楼房安居至今。吴氏在下津创祖已历67年，现传四世，1户，10人。",
    "clan": "吴氏",
    "sourceTitle": "第四节 吴氏",
    "sourceFile": "第二篇 先祖创乡/第十二章 落籍创祖/第四节 吴氏 a502080e7d3083eb9afe01593d22c5bc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十二章 落籍创祖/第四节 吴氏 a502080e7d3083eb9afe01593d22c5bc.html"
    ]
  },
  {
    "id": "g_许功甫_第二节_许氏",
    "name": "许功甫",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "始祖 许功甫 原籍丰顺县溜隍神沙半径村。公一生以教书为业，1953年调下津小学任教，携家眷居于廖厝埔，落籍本村。许氏在下津创祖迄今已历66年。传四世，有4户，23人。",
    "clan": "许氏",
    "sourceTitle": "第二节 许氏",
    "sourceFile": "第二篇 先祖创乡/第十二章 落籍创祖/第二节 许氏 3682080e7d30823f8fc50127b5187410.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十二章 落籍创祖/第二节 许氏 3682080e7d30823f8fc50127b5187410.html"
    ]
  },
  {
    "id": "g_钟锦麟_第三节_钟氏",
    "name": "钟锦麟",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-ZHONG-4003"
    ],
    "description": "海鹅头钟氏，始祖钟锦麟，于晚清时期，由河内后径村迁居于草寨（今黄田山军营内）。其子钟炳元，娶妻枫溪吴氏；民国二十六年（1937）钟锦麟伙同海鹅头村乡绅向国民党省政府打照缚地，并合伙一名客家人开设一个“三山公司”，在海鹅头山岞顶至径后一带开采瓷土。",
    "clan": "钟氏",
    "sourceTitle": "第三节 钟氏",
    "sourceFile": "第二篇 先祖创乡/第九章 海鹅头乡/第三节 钟氏 c192080e7d3082c79171010912b5da77.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第九章 海鹅头乡/第三节 钟氏 c192080e7d3082c79171010912b5da77.html",
      "第五篇 经济/第四章 工商业 e9d2080e7d3083f69a340195fe65df98.html"
    ]
  },
  {
    "id": "g_琳瑄_第一节_下津廖氏源流纪略",
    "name": "廖琳瑄",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "自廖崇德之后一百多年间，是廖氏历史上一个鼎盛时期，廖族任尚书官职7人，进士登第22人，举人39人，其他官宦180人，成为当时的名门望族。廖光景任唐宰相，生琼瑄、琳瑄、瑞瑄三子。",
    "sourceTitle": "第一节 下津廖氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html",
    "fatherId": "g_廖光景任_第一节_下津廖氏源流纪略",
    "clan": "廖氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html"
    ]
  },
  {
    "id": "g_琼瑄_第一节_下津廖氏源流纪略",
    "name": "廖琼瑄",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "自廖崇德之后一百多年间，是廖氏历史上一个鼎盛时期，廖族任尚书官职7人，进士登第22人，举人39人，其他官宦180人，成为当时的名门望族。廖光景任唐宰相，生琼瑄、琳瑄、瑞瑄三子。",
    "sourceTitle": "第一节 下津廖氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html",
    "fatherId": "g_廖光景任_第一节_下津廖氏源流纪略",
    "clan": "廖氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html"
    ]
  },
  {
    "id": "g_瑞瑄_第一节_下津廖氏源流纪略",
    "name": "廖瑞瑄",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "自廖崇德之后一百多年间，是廖氏历史上一个鼎盛时期，廖族任尚书官职7人，进士登第22人，举人39人，其他官宦180人，成为当时的名门望族。廖光景任唐宰相，生琼瑄、琳瑄、瑞瑄三子。",
    "sourceTitle": "第一节 下津廖氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html",
    "fatherId": "g_廖光景任_第一节_下津廖氏源流纪略",
    "clan": "廖氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html"
    ]
  },
  {
    "id": "g_康才林_第三节_杜猴寨康氏",
    "name": "康才林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康大成为一大户，生两子，长子康才林，次子康才香。康才林约于清宣统年间（1909—1911），由杜猴寨迁入盐墩后开居……",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "fatherId": "g_康大成_第三节_杜猴寨康氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "g_刘标殿_第四节_巷内乡",
    "name": "刘标殿",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-CHEN-0009",
      "ref_XJ-CAI-0001"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0230",
      "ref_XJ-LIU-0231"
    ],
    "description": "刘氏146世/桃坑22世\"延\"字辈：一四六世（桃坑22世“延”字辈）刘标殿字魁第。公获太学生学位，增广田宅。娶陈氏，生文旦一子，续娶蔡氏，生永泰一子，共生二子。；刘标殿：字魁第，明太学生。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘化雨_第四节_巷内乡",
    "motherId": "ref_XJ-CHEN-0008",
    "generation": 22,
    "generationSystem": "桃坑",
    "generationName": "延",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "g_刘潮津_第二节_桃坑乡",
    "name": "刘潮津",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0216",
      "ref_XJ-LIU-0215"
    ],
    "description": "刘氏139世/桃坑15世：一三九世（桃坑十五世）刘潮津：字东顺，获庠生功名。妣氏未详，生拱、寅二子。；刘潮津：字东顺，明庠生。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0210",
    "motherId": "ref_XJ-LI-0002",
    "generation": 15,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "g_刘纯语_第三节_窟尾沟乡",
    "name": "刘纯语",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "长子锐泽（桃坑36世\"启\"字辈）： 配偶林秋娥。育有一子一女：子雄宣（桃坑37世\"鸿\"字辈），配偶惠璇。雄宣与惠璇育有：女纯语，子镒齐（桃坑38世\"泽\"字辈）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘雄宣_第三节_窟尾沟乡",
    "motherId": "g_刘惠璇_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘翠华_第三节_窟尾沟乡",
    "name": "刘翠华",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "二女玉花： 适进发。育有一子一女：长女翠华，子咏华（配偶陈锶敏）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "motherId": "g_刘玉花_第三节_窟尾沟乡",
    "fatherId": "ref_XJ-UNKNOWN-0006",
    "reviewNotes": [
      "原文只记名字，是刘氏女性的子女；当前沿用旧显示姓名，姓氏须核对，不应自动按母姓补刘。"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘得山_第二节_桃坑乡",
    "name": "刘得山",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "一三八世（桃坑十四世）刘童：字本明，号若愚，妣李氏，生潮津、铿、得山、鉴四子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0210",
    "motherId": "ref_XJ-LI-0002",
    "generation": 15,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "g_刘高秦_第四节_巷内乡",
    "name": "刘高秦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘力田_第四节_巷内乡",
      "ref_XJ-LIU-0241",
      "ref_XJ-LIU-0242",
      "ref_XJ-LIU-0243"
    ],
    "description": "刘氏148世/桃坑24世\"茂\"字辈：刘高秦于明末由巷内移创竹抱顶聚落，竹抱顶因公择竹抱之北侧（顶）开基而得乡名。公妣氏失记，生力田、力二、力三、力四四子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "ref_XJ-LIU-0230",
    "motherId": "ref_XJ-LIANG-0002",
    "generation": 24,
    "generationSystem": "桃坑",
    "generationName": "茂",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "g_刘桂松_第三节_窟尾沟乡",
    "name": "刘桂松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏一四三世（桃坑十九世\"日\"字辈）刘策字仕政，号松山，获庠生功名。公约生于明成化十三年（1477），约于明弘治十五年（1502）由桃坑乡迁窟尾沟乡开基，垦荒造田。策公之开基地在姚姓居址东侧，今大房大聚落背之高地，祖居尚有遗迹可考。公原配辛氏，继配郑氏，生以松、梅松、桂松三子。公卒葬盐埠（原洪厝园东侧）。公之三个儿子命名皆有\"松\"字，古代墓地也称\"粮山\"。三子在立墓时，为使子孙缅怀祖德，为考立谥号\"松山\"书刻于墓碑。尔后，裔孙遂以祖墓碑文尊称\"松山公\"。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘策_第三节_窟尾沟乡",
    "generation": 20,
    "generationSystem": "桃坑",
    "generationName": "旭",
    "generationEvidence": "亲子关系推定",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘桂宜_第三节_窟尾沟乡",
    "name": "刘桂宜",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-JIANG-0001"
    ],
    "childrenIds": [],
    "description": "长女玉琴： 适坤成。育有二子一女：长子启泳，次子启跃，幺女桂宜（适江伟平）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "motherId": "g_刘玉琴_第三节_窟尾沟乡",
    "fatherId": "ref_XJ-UNKNOWN-0001",
    "reviewNotes": [
      "原文只记名字，是刘氏女性的子女；当前沿用旧显示姓名，姓氏须核对，不应自动按母姓补刘。"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘汉秋_第三节_窟尾沟乡",
    "name": "刘汉秋",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "永利育有四女一男：长女美娟（Mui Kiang），次女美华（Kwee Huay），三女美萍（Mui Pheng），四女美云，幺子汉秋（Hang Chew）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永利_第三节_窟尾沟乡",
    "generation": 36,
    "generationSystem": "桃坑",
    "generationName": "启",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘化雨_第四节_巷内乡",
    "name": "刘化雨",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-CHEN-0008"
    ],
    "childrenIds": [
      "g_刘标殿_第四节_巷内乡"
    ],
    "description": "刘氏145世/桃坑21世\"伯\"字辈：一四五世（桃坑21世“伯”字辈）刘化雨字光宗，获庠生功名，公增广田宅。娶陈氏，生标殿一子。；刘化雨：字光宗，明庠生。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘梅松_第四节_巷内乡",
    "motherId": "g_徐氏_第四节_巷内乡",
    "generation": 21,
    "generationSystem": "桃坑",
    "generationName": "伯",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "g_刘济孙_第二节_桃坑乡",
    "name": "刘济孙",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "一三四世（桃坑十世）刘铨：号东村，处士（德才兼备，不愿为官者）。元皇庆二年（1313）主编宗谱。公广增田宅，重建祠堂，立祭田赡宗子香灯，配享大宗祠。妣县君李氏、叶氏，生公孙、济孙二子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0202",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 11,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "g_刘力瑞_第三节_窟尾沟乡",
    "name": "刘力瑞",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘贻国_第三节_窟尾沟乡",
      "g_刘贻曹_第三节_窟尾沟乡"
    ],
    "description": "刘力瑞公妣氏未详，生贻国，贻曹二子。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘子实_第三节_窟尾沟乡",
    "motherId": "g_洪氏_第三节_窟尾沟乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘力田_第四节_巷内乡",
    "name": "刘力田",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘高秦于明末由巷内移创竹抱顶聚落，竹抱顶因公择竹抱之北侧（顶）开基而得乡名。竹抱顶厝座坐东朝西，埕外筑高墙围乡。公妣氏失记，生力田、力二、力三、力四四子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘高秦_第四节_巷内乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "g_刘力友_第三节_窟尾沟乡",
    "name": "刘力友",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘贻伯_第三节_窟尾沟乡",
      "g_刘贻统_第三节_窟尾沟乡",
      "g_刘贻创_第三节_窟尾沟乡"
    ],
    "description": "刘力友公妣氏未详，生贻伯、贻统、贻创三子。长子贻伯和次子贻统失传。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘子实_第三节_窟尾沟乡",
    "motherId": "g_洪氏_第三节_窟尾沟乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘麟_第三节_窟尾沟乡",
    "name": "刘麟",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑22世\"延\"字辈刘益承字我任。公增创田产，娶陈氏，生刘铉、刘麟二子。两子成家后，分为两大房。我任公与兄分房，迄今约历426年，传至桃坑38世\"泽\"字辈，现有295户，1326人。我任公祠兴工于1947年，竣工于1949年，时适逢解放，未行庆典。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘益承_第三节_窟尾沟乡",
    "motherId": "g_陈氏_第三节_窟尾沟乡",
    "generation": 23,
    "generationSystem": "桃坑",
    "generationName": "禧",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘茂翔_第四节_巷内乡",
    "name": "刘茂翔",
    "gender": "男",
    "spouseIds": [
      "g_梁氏妙贞_第四节_巷内乡"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0234",
      "g_刘力谦_第四节_巷内乡",
      "ref_XJ-LIU-0235",
      "ref_XJ-LIU-0236"
    ],
    "description": "刘氏148世/桃坑24世\"茂\"字辈：一四八世（桃坑24世“茂”字辈）刘茂翔，获庠生功名，以子显贵，赠文林郎。妣梁氏妙贞，以子显贵，旌表节。生力添、力谦、力真、力任四子。公于明末（1643）主持兴建大夫第，现称旧厝公厅。；刘茂翔：明庠生，清赠文林郎。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "ref_XJ-LIU-0230",
    "motherId": "ref_XJ-LIANG-0002",
    "generation": 24,
    "generationSystem": "桃坑",
    "generationName": "茂",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "g_刘美华_第三节_窟尾沟乡",
    "name": "刘美华",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "永利育有四女一男：长女美娟（Mui Kiang），次女美华（Kwee Huay），三女美萍（Mui Pheng），四女美云，幺子汉秋（Hang Chew）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永利_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘美娟_第三节_窟尾沟乡",
    "name": "刘美娟",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "永利育有四女一男：长女美娟（Mui Kiang），次女美华（Kwee Huay），三女美萍（Mui Pheng），四女美云，幺子汉秋（Hang Chew）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永利_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘美萍_第三节_窟尾沟乡",
    "name": "刘美萍",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "永利育有四女一男：长女美娟（Mui Kiang），次女美华（Kwee Huay），三女美萍（Mui Pheng），四女美云，幺子汉秋（Hang Chew）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永利_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘美云_第三节_窟尾沟乡",
    "name": "刘美云",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "永利育有四女一男：长女美娟（Mui Kiang），次女美华（Kwee Huay），三女美萍（Mui Pheng），四女美云，幺子汉秋（Hang Chew）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘永利_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘启泳_第三节_窟尾沟乡",
    "name": "刘启泳",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "长女玉琴： 适坤成。育有二子一女：长子启泳，次子启跃，幺女桂宜（适江伟平）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "motherId": "g_刘玉琴_第三节_窟尾沟乡",
    "fatherId": "ref_XJ-UNKNOWN-0001",
    "reviewNotes": [
      "原文只记名字，是刘氏女性的子女；当前沿用旧显示姓名，姓氏须核对，不应自动按母姓补刘。"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘启跃_第三节_窟尾沟乡",
    "name": "刘启跃",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "长女玉琴： 适坤成。育有二子一女：长子启泳，次子启跃，幺女桂宜（适江伟平）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "motherId": "g_刘玉琴_第三节_窟尾沟乡",
    "fatherId": "ref_XJ-UNKNOWN-0001",
    "reviewNotes": [
      "原文只记名字，是刘氏女性的子女；当前沿用旧显示姓名，姓氏须核对，不应自动按母姓补刘。"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘然老_第二节_桃坑乡",
    "name": "刘然老",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏132世/桃坑8世：刘权：妣氏未详，生炳、然老二子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0197",
    "generation": 8,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "g_刘顺兴_第二节_桃坑乡",
    "name": "刘顺兴",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-WU-0002"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0219"
    ],
    "description": "刘氏141世/桃坑17世：一四一世（桃坑十七世）刘顺兴：字文元，号素轩，妣吴氏，生锡一子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0216",
    "motherId": "ref_XJ-CHEN-0006",
    "generation": 17,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "g_刘思博_第三节_窟尾沟乡",
    "name": "刘思博",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "次子耀怀（桃坑36世\"启\"字辈）： 配偶廖春玲。育有一子一女：子雄明（桃坑37世\"鸿\"字辈），配偶陆佩东。雄明与陆佩东育有：子思博（桃坑38世\"泽\"字辈），女思彤。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘雄明_第三节_窟尾沟乡",
    "motherId": "g_陆佩东_第三节_窟尾沟乡",
    "generation": 38,
    "generationSystem": "桃坑",
    "generationName": "泽",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘思彤_第三节_窟尾沟乡",
    "name": "刘思彤",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "次子耀怀（桃坑36世\"启\"字辈）： 配偶廖春玲。育有一子一女：子雄明（桃坑37世\"鸿\"字辈），配偶陆佩东。雄明与陆佩东育有：子思博（桃坑38世\"泽\"字辈），女思彤。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘雄明_第三节_窟尾沟乡",
    "motherId": "g_陆佩东_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘雄明_第三节_窟尾沟乡",
    "name": "刘雄明",
    "gender": "男",
    "spouseIds": [
      "g_陆佩东_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘思博_第三节_窟尾沟乡",
      "g_刘思彤_第三节_窟尾沟乡"
    ],
    "description": "次子耀怀（桃坑36世\"启\"字辈）： 配偶廖春玲。育有一子一女：子雄明（桃坑37世\"鸿\"字辈），配偶陆佩东。雄明与陆佩东育有：子思博（桃坑38世\"泽\"字辈），女思彤。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘耀怀_第三节_窟尾沟乡",
    "motherId": "g_廖春玲_第三节_窟尾沟乡",
    "generation": 37,
    "generationSystem": "桃坑",
    "generationName": "鸿",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘雄宣_第三节_窟尾沟乡",
    "name": "刘雄宣",
    "gender": "男",
    "spouseIds": [
      "g_刘惠璇_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘纯语_第三节_窟尾沟乡",
      "g_刘镒齐_第三节_窟尾沟乡"
    ],
    "description": "长子锐泽（桃坑36世\"启\"字辈）： 配偶林秋娥。育有一子一女：子雄宣（桃坑37世\"鸿\"字辈），配偶惠璇。雄宣与惠璇育有：女纯语，子镒齐（桃坑38世\"泽\"字辈）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘锐泽_第三节_窟尾沟乡",
    "motherId": "g_林秋娥_第三节_窟尾沟乡",
    "generation": 37,
    "generationSystem": "桃坑",
    "generationName": "鸿",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘铉_第三节_窟尾沟乡",
    "name": "刘铉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘子实_第三节_窟尾沟乡"
    ],
    "description": "刘铉字炳谨，妣氏未详，生子实一子。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘益承_第三节_窟尾沟乡",
    "motherId": "g_陈氏_第三节_窟尾沟乡",
    "generation": 23,
    "generationSystem": "桃坑",
    "generationName": "禧",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘瑶珍_第三节_窟尾沟乡",
    "name": "刘瑶珍",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑34世\"裕\"字辈：喜林配梁瑞音，育有二子：长子永利，次子永淡。锡林，生有一女：瑶珍(枫溪姑)。梁瑞音葬在溪边，飞天燕山下，梁瑞音是中津梁，照壁头这里，梁瑞音的哥哥的孙女叫巧娴，住中津，巧娴的姐姐住下津，巧娴姐老公在下津市场卖石螺。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘锡林_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘贻伯_第三节_窟尾沟乡",
    "name": "刘贻伯",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘力友公妣氏未详，生贻伯、贻统、贻创三子。长子贻伯和次子贻统失传。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘力友_第三节_窟尾沟乡",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘贻曹_第三节_窟尾沟乡",
    "name": "刘贻曹",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑26世\"贻\"字辈：刘贻曹公增扩田产，其后于四房公厅东南侧兴建聚落。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘力瑞_第三节_窟尾沟乡",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘贻创_第三节_窟尾沟乡",
    "name": "刘贻创",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘远朝_第三节_窟尾沟乡",
      "g_刘远敬_第三节_窟尾沟乡",
      "g_刘远长_第三节_窟尾沟乡",
      "g_刘远侯_第三节_窟尾沟乡"
    ],
    "description": "刘贻创公扩增田产，于少窗公祖居南侧，兴建坐东朝西聚落，厝座为一厅四房，俗称四房公厅。公妣氏未详，生远朝、远敬、远长、远侯四子。儿子们成家后，分为四大房。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘力友_第三节_窟尾沟乡",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘贻国_第三节_窟尾沟乡",
    "name": "刘贻国",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘远高_第三节_窟尾沟乡"
    ],
    "description": "刘贻国公扩增田产，于四房公厅前兴建坐东朝西聚落，厝座为一厅三房及南北厢房。公妣氏未详，生远高一子。远高公妣氏未详，生支万、支千二子。支万公房守祖居，支千公移创后厝（下文表述）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘力瑞_第三节_窟尾沟乡",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘贻统_第三节_窟尾沟乡",
    "name": "刘贻统",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘力友公妣氏未详，生贻伯、贻统、贻创三子。长子贻伯和次子贻统失传。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘力友_第三节_窟尾沟乡",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘贻祥_第四节_巷内乡",
    "name": "刘贻祥",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "力谦公致仕后纳林氏为妾，生贻祥、贻铮二子。公为安置林氏及其所生儿子，于清乾隆元年（1736），在巷内公厅背兴建新公厅，以钦赐\"五马分符\"命名为五马内。子孙奉林氏妈为太婆，其后称\"阿婆房\"。尊称郭氏妈所生的嗣裔为\"阿娘房\"。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘力谦_第四节_巷内乡",
    "motherId": "ref_XJ-LIN-0002",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "g_刘贻铮_第四节_巷内乡",
    "name": "刘贻铮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "力谦公致仕后纳林氏为妾，生贻祥、贻铮二子。公为安置林氏及其所生儿子，于清乾隆元年（1736），在巷内公厅背兴建新公厅，以钦赐\"五马分符\"命名为五马内。子孙奉林氏妈为太婆，其后称\"阿婆房\"。尊称郭氏妈所生的嗣裔为\"阿娘房\"。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘力谦_第四节_巷内乡",
    "motherId": "ref_XJ-LIN-0002",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "g_刘以松_第三节_窟尾沟乡",
    "name": "刘以松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏一四三世（桃坑十九世\"日\"字辈）刘策字仕政，号松山，获庠生功名。公约生于明成化十三年（1477），约于明弘治十五年（1502）由桃坑乡迁窟尾沟乡开基，垦荒造田。策公之开基地在姚姓居址东侧，今大房大聚落背之高地，祖居尚有遗迹可考。公原配辛氏，继配郑氏，生以松、梅松、桂松三子。公卒葬盐埠（原洪厝园东侧）。公之三个儿子命名皆有\"松\"字，古代墓地也称\"粮山\"。三子在立墓时，为使子孙缅怀祖德，为考立谥号\"松山\"书刻于墓碑。尔后，裔孙遂以祖墓碑文尊称\"松山公\"。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘策_第三节_窟尾沟乡",
    "generation": 20,
    "generationSystem": "桃坑",
    "generationName": "旭",
    "generationEvidence": "亲子关系推定",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘镒齐_第三节_窟尾沟乡",
    "name": "刘镒齐",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "长子锐泽（桃坑36世\"启\"字辈）： 配偶林秋娥。育有一子一女：子雄宣（桃坑37世\"鸿\"字辈），配偶惠璇。雄宣与惠璇育有：女纯语，子镒齐（桃坑38世\"泽\"字辈）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘雄宣_第三节_窟尾沟乡",
    "motherId": "g_刘惠璇_第三节_窟尾沟乡",
    "generation": 38,
    "generationSystem": "桃坑",
    "generationName": "泽",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘永淡_第三节_窟尾沟乡",
    "name": "刘永淡",
    "gender": "男",
    "spouseIds": [
      "g_黄丽香_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘玉琴_第三节_窟尾沟乡",
      "g_刘锐泽_第三节_窟尾沟乡",
      "g_刘玉花_第三节_窟尾沟乡",
      "g_刘耀怀_第三节_窟尾沟乡",
      "g_刘玉珊_第三节_窟尾沟乡"
    ],
    "description": "桃坑35世\"昆\"字辈：永淡，配偶黄丽香。育有大女儿玉琴，大儿子锐泽，二女儿玉花，小儿子耀怀，小女儿玉珊。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘喜林_第三节_窟尾沟乡",
    "motherId": "g_梁瑞音_第三节_窟尾沟乡",
    "generation": 35,
    "generationSystem": "桃坑",
    "generationName": "昆",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘永利_第三节_窟尾沟乡",
    "name": "刘永利",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘美娟_第三节_窟尾沟乡",
      "g_刘美华_第三节_窟尾沟乡",
      "g_刘美萍_第三节_窟尾沟乡",
      "g_刘美云_第三节_窟尾沟乡",
      "g_刘汉秋_第三节_窟尾沟乡"
    ],
    "description": "永利育有四女一男：长女美娟（Mui Kiang），次女美华（Kwee Huay），三女美萍（Mui Pheng），四女美云，幺子汉秋（Hang Chew）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘喜林_第三节_窟尾沟乡",
    "motherId": "g_梁瑞音_第三节_窟尾沟乡",
    "generation": 35,
    "generationSystem": "桃坑",
    "generationName": "昆",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘咏华_第三节_窟尾沟乡",
    "name": "刘咏华",
    "gender": "男",
    "spouseIds": [
      "g_陈锶敏_第三节_窟尾沟乡"
    ],
    "childrenIds": [],
    "description": "二女玉花： 适进发。育有一子一女：长女翠华，子咏华（配偶陈锶敏）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "motherId": "g_刘玉花_第三节_窟尾沟乡",
    "fatherId": "ref_XJ-UNKNOWN-0006",
    "reviewNotes": [
      "原文只记名字，是刘氏女性的子女；当前沿用旧显示姓名，姓氏须核对，不应自动按母姓补刘。"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘远朝_第三节_窟尾沟乡",
    "name": "刘远朝",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘贻创公扩增田产，于少窗公祖居南侧，兴建坐东朝西聚落，厝座为一厅四房，俗称四房公厅。公妣氏未详，生远朝、远敬、远长、远侯四子。儿子们成家后，分为四大房。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘贻创_第三节_窟尾沟乡",
    "generation": 27,
    "generationSystem": "桃坑",
    "generationName": "远",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘远高_第三节_窟尾沟乡",
    "name": "刘远高",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘支万_第三节_窟尾沟乡",
      "g_刘支千_第三节_窟尾沟乡"
    ],
    "description": "刘贻国公扩增田产，于四房公厅前兴建坐东朝西聚落，厝座为一厅三房及南北厢房。公妣氏未详，生远高一子。远高公妣氏未详，生支万、支千二子。支万公房守祖居，支千公移创后厝（下文表述）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘贻国_第三节_窟尾沟乡",
    "generation": 27,
    "generationSystem": "桃坑",
    "generationName": "远",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html"
    ]
  },
  {
    "id": "g_刘远侯_第三节_窟尾沟乡",
    "name": "刘远侯",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘贻创公扩增田产，于少窗公祖居南侧，兴建坐东朝西聚落，厝座为一厅四房，俗称四房公厅。公妣氏未详，生远朝、远敬、远长、远侯四子。儿子们成家后，分为四大房。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘贻创_第三节_窟尾沟乡",
    "generation": 27,
    "generationSystem": "桃坑",
    "generationName": "远",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘远敬_第三节_窟尾沟乡",
    "name": "刘远敬",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘贻创公扩增田产，于少窗公祖居南侧，兴建坐东朝西聚落，厝座为一厅四房，俗称四房公厅。公妣氏未详，生远朝、远敬、远长、远侯四子。儿子们成家后，分为四大房。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘贻创_第三节_窟尾沟乡",
    "generation": 27,
    "generationSystem": "桃坑",
    "generationName": "远",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘远长_第三节_窟尾沟乡",
    "name": "刘远长",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘贻创公扩增田产，于少窗公祖居南侧，兴建坐东朝西聚落，厝座为一厅四房，俗称四房公厅。公妣氏未详，生远朝、远敬、远长、远侯四子。儿子们成家后，分为四大房。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘贻创_第三节_窟尾沟乡",
    "generation": 27,
    "generationSystem": "桃坑",
    "generationName": "远",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘真禄_第二节_桃坑乡",
    "name": "刘真禄",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "一三二世（桃坑八世）刘炳：官户曹给事中。妣宜人苏氏，生真庆、真禄二子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0199",
    "motherId": "ref_XJ-SU-0001",
    "generation": 9,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "g_刘真庆_第二节_桃坑乡",
    "name": "刘真庆",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-CHEN-0004",
      "ref_XJ-YE-0002"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0202"
    ],
    "description": "刘氏133世/桃坑9世：一三三世（桃坑九世）刘真庆：官承事郎机宜。妣孺人陈氏、叶氏，生铨一子。；刘真庆：宋承事郎机宜。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0199",
    "motherId": "ref_XJ-SU-0001",
    "generation": 9,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "g_刘支千_第三节_窟尾沟乡",
    "name": "刘支千",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0023",
      "ref_XJ-LIU-0024",
      "ref_XJ-LIU-0025",
      "ref_XJ-LIU-0026",
      "ref_XJ-LIU-0027"
    ],
    "description": "刘贻国公扩增田产，于四房公厅前兴建坐东朝西聚落，厝座为一厅三房及南北厢房。公妣氏未详，生远高一子。远高公妣氏未详，生支万、支千二子。支万公房守祖居，支千公移创后厝（下文表述）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘远高_第三节_窟尾沟乡",
    "generation": 28,
    "generationSystem": "桃坑",
    "generationName": "支",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘支万_第三节_窟尾沟乡",
    "name": "刘支万",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘贻国公扩增田产，于四房公厅前兴建坐东朝西聚落，厝座为一厅三房及南北厢房。公妣氏未详，生远高一子。远高公妣氏未详，生支万、支千二子。支万公房守祖居，支千公移创后厝（下文表述）。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘远高_第三节_窟尾沟乡",
    "generation": 28,
    "generationSystem": "桃坑",
    "generationName": "支",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_刘子实_第三节_窟尾沟乡",
    "name": "刘子实",
    "gender": "男",
    "spouseIds": [
      "g_洪氏_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘力友_第三节_窟尾沟乡",
      "g_刘力瑞_第三节_窟尾沟乡"
    ],
    "description": "桃坑24世\"茂\"字辈 刘子实，公扩增田园，娶洪氏，生力友、力瑞二子。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘铉_第三节_窟尾沟乡",
    "generation": 24,
    "generationSystem": "桃坑",
    "generationName": "茂",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "g_余可申_第三节_窟尾沟乡",
    "name": "余可申",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "女戴慧，适余家铎。育有一子余可申。",
    "clan": "余氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "motherId": "g_刘戴慧_第三节_窟尾沟乡",
    "fatherId": "ref_XJ-YU-0001",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0023",
    "name": "刘光春",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：刘支千……公生刘光春、刘光夏、刘光油、刘光振、刘光业五子，分家时每人各有五间房屋。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘支千_第三节_窟尾沟乡",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0024",
    "name": "刘光夏",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：刘支千……公生刘光春、刘光夏、刘光油、刘光振、刘光业五子，分家时每人各有五间房屋。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘支千_第三节_窟尾沟乡",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0025",
    "name": "刘光油",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：刘支千……公生刘光春、刘光夏、刘光油、刘光振、刘光业五子，分家时每人各有五间房屋。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘支千_第三节_窟尾沟乡",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0026",
    "name": "刘光振",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：刘支千……公生刘光春、刘光夏、刘光油、刘光振、刘光业五子，分家时每人各有五间房屋。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘支千_第三节_窟尾沟乡",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0027",
    "name": "刘光业",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：刘支千……公生刘光春、刘光夏、刘光油、刘光振、刘光业五子，分家时每人各有五间房屋。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘支千_第三节_窟尾沟乡",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0028",
    "name": "刘光勉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0029"
    ],
    "description": "远敬公厅由刘光勉主持，兴建于清咸丰年间（1851—1861）。桃坑29世\"光\"字辈：光勉。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0029",
    "name": "刘宗一",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_刘绍达_第三节_窟尾沟乡"
    ],
    "description": "桃坑30世\"宗\"字辈：宗一，光勉之子。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "ref_XJ-LIU-0028",
    "generation": 30,
    "generationSystem": "桃坑",
    "generationName": "宗",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0033",
    "name": "刘松镇",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑33世\"德\"字辈：次子松镇，早年迁徙侨居新加坡。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘世乾_第三节_窟尾沟乡",
    "generation": 33,
    "generationSystem": "桃坑",
    "generationName": "德",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-UNKNOWN-0001",
    "name": "坤成",
    "gender": "男",
    "spouseIds": [
      "g_刘玉琴_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘启泳_第三节_窟尾沟乡",
      "g_刘启跃_第三节_窟尾沟乡",
      "g_刘桂宜_第三节_窟尾沟乡"
    ],
    "description": "长女玉琴：适坤成。育有二子一女：长子启泳，次子启跃，幺女桂宜（适江伟平）。",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-JIANG-0001",
    "name": "江伟平",
    "gender": "男",
    "spouseIds": [
      "g_刘桂宜_第三节_窟尾沟乡"
    ],
    "childrenIds": [],
    "description": "幺女桂宜（适江伟平）。",
    "clan": "江氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-YU-0001",
    "name": "余家铎",
    "gender": "男",
    "spouseIds": [
      "g_刘戴慧_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_余可申_第三节_窟尾沟乡"
    ],
    "description": "女戴慧，适余家铎。育有一子余可申。",
    "clan": "余氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-UNKNOWN-0006",
    "name": "进发",
    "gender": "男",
    "spouseIds": [
      "g_刘玉花_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘翠华_第三节_窟尾沟乡",
      "g_刘咏华_第三节_窟尾沟乡"
    ],
    "description": "二女玉花：适进发。育有一子一女：长女翠华，子咏华。",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0054",
    "name": "刘岱华",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "次子耀怀……育有一子一女：子雄明……女岱华。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "fatherId": "g_刘耀怀_第三节_窟尾沟乡",
    "motherId": "g_廖春玲_第三节_窟尾沟乡",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-0003",
    "name": "陈少伟",
    "gender": "男",
    "spouseIds": [
      "g_刘玉珊_第三节_窟尾沟乡"
    ],
    "childrenIds": [
      "g_刘佳琪_第三节_窟尾沟乡"
    ],
    "description": "幺女玉珊：适陈少伟。育有一女：佳琪（适张振钊）。",
    "clan": "陈氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-ZHANG-0001",
    "name": "张振钊",
    "gender": "男",
    "spouseIds": [
      "g_刘佳琪_第三节_窟尾沟乡"
    ],
    "childrenIds": [],
    "description": "佳琪（适张振钊）。",
    "clan": "张氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0057",
    "name": "刘支旭",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑28世\"支\"字辈：清道光年间（1821—1850），由刘支旭、刘支选、刘支裕、刘支俊兄弟四人合力，于大房大厝座西侧、仰松公厅东侧之中间，兴建坐北朝南公厅，命名\"厚斋\"公厅。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 28,
    "generationSystem": "桃坑",
    "generationName": "支",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0058",
    "name": "刘支选",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑28世\"支\"字辈：清道光年间（1821—1850），由刘支旭、刘支选、刘支裕、刘支俊兄弟四人合力，于大房大厝座西侧、仰松公厅东侧之中间，兴建坐北朝南公厅，命名\"厚斋\"公厅。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 28,
    "generationSystem": "桃坑",
    "generationName": "支",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0059",
    "name": "刘支裕",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑28世\"支\"字辈：清道光年间（1821—1850），由刘支旭、刘支选、刘支裕、刘支俊兄弟四人合力，于大房大厝座西侧、仰松公厅东侧之中间，兴建坐北朝南公厅，命名\"厚斋\"公厅。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 28,
    "generationSystem": "桃坑",
    "generationName": "支",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0060",
    "name": "刘支俊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑28世\"支\"字辈：清道光年间（1821—1850），由刘支旭、刘支选、刘支裕、刘支俊兄弟四人合力，于大房大厝座西侧、仰松公厅东侧之中间，兴建坐北朝南公厅，命名\"厚斋\"公厅。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 28,
    "generationSystem": "桃坑",
    "generationName": "支",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0061",
    "name": "刘光兆",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：清咸丰年间（1851—1861），由刘光兆、刘光福、刘光静等率族兴建沙墩内坐北朝南厝座。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0062",
    "name": "刘光福",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：清咸丰年间（1851—1861），由刘光兆、刘光福、刘光静等率族兴建沙墩内坐北朝南厝座。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0063",
    "name": "刘光静",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：清咸丰年间（1851—1861），由刘光兆、刘光福、刘光静等率族兴建沙墩内坐北朝南厝座。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0064",
    "name": "刘支应",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑28世\"支\"字辈：清同治十二年（1873）岁次癸酉，支应公重修水井……侄儿刘光宝不服，诉颂于公堂。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 28,
    "generationSystem": "桃坑",
    "generationName": "支",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0065",
    "name": "刘光宝",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑29世\"光\"字辈：如刘光宝系何人之子孙失稽……侄儿刘光宝不服，诉颂于公堂。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 29,
    "generationSystem": "桃坑",
    "generationName": "光",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0070",
    "name": "刘贻和",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑26世\"贻\"字辈：力聚公厅兴建于清代，由刘贻和、刘贻声、刘贻宠、刘贻诚、刘贻昭、刘贻安兄弟六人合力筹建。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0071",
    "name": "刘贻声",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑26世\"贻\"字辈：力聚公厅兴建于清代，由刘贻和、刘贻声、刘贻宠、刘贻诚、刘贻昭、刘贻安兄弟六人合力筹建。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0072",
    "name": "刘贻宠",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑26世\"贻\"字辈：力聚公厅兴建于清代，由刘贻和、刘贻声、刘贻宠、刘贻诚、刘贻昭、刘贻安兄弟六人合力筹建。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0073",
    "name": "刘贻诚",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑26世\"贻\"字辈：力聚公厅兴建于清代，由刘贻和、刘贻声、刘贻宠、刘贻诚、刘贻昭、刘贻安兄弟六人合力筹建。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0074",
    "name": "刘贻昭",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑26世\"贻\"字辈：力聚公厅兴建于清代，由刘贻和、刘贻声、刘贻宠、刘贻诚、刘贻昭、刘贻安兄弟六人合力筹建。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0075",
    "name": "刘贻安",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑26世\"贻\"字辈：力聚公厅兴建于清代，由刘贻和、刘贻声、刘贻宠、刘贻诚、刘贻昭、刘贻安兄弟六人合力筹建。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 26,
    "generationSystem": "桃坑",
    "generationName": "贻",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0076",
    "name": "刘鸣岐",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "贻诚公厅由刘鸣岐、刘远应、刘远三（讳失传）、刘远顺兄弟四人合力于清代兴建，俗称四房公厅。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0077",
    "name": "刘远应",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑27世\"远\"字辈：贻诚公厅由刘鸣岐、刘远应、刘远三（讳失传）、刘远顺兄弟四人合力于清代兴建，俗称四房公厅。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 27,
    "generationSystem": "桃坑",
    "generationName": "远",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0078",
    "name": "刘远三",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑27世\"远\"字辈：贻诚公厅由刘鸣岐、刘远应、刘远三（讳失传）、刘远顺兄弟四人合力于清代兴建，俗称四房公厅。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 27,
    "generationSystem": "桃坑",
    "generationName": "远",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0079",
    "name": "刘远顺",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑27世\"远\"字辈：贻诚公厅由刘鸣岐、刘远应、刘远三（讳失传）、刘远顺兄弟四人合力于清代兴建，俗称四房公厅。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "generation": 27,
    "generationSystem": "桃坑",
    "generationName": "远",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0080",
    "name": "刘宗耀",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘宗耀",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0081",
    "name": "刘世隆",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘世隆；侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0082",
    "name": "刘亚狗",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘亚狗",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0083",
    "name": "刘庆松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘庆松",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0084",
    "name": "刘德洪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘德洪",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0085",
    "name": "刘裕杆",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘裕杆",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0086",
    "name": "刘留罗",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘留罗",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0087",
    "name": "刘木荣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘木荣",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0088",
    "name": "刘木欣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘木欣",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0089",
    "name": "刘裕标",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘裕标",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0090",
    "name": "刘新炎",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘新炎",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0091",
    "name": "刘裕森",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘裕森；侨居印度尼西亚：刘绍宜、刘钟松、刘德华、刘德贤、刘德明、刘裕钦、刘裕森",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0092",
    "name": "刘裕耀",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘裕耀；捐资芳名录：刘裕耀先生 壹仟。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0093",
    "name": "刘绍旺",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍旺",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0094",
    "name": "刘世照",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘世照",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0095",
    "name": "刘松坤",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘松坤",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0096",
    "name": "刘世宣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘世宣；侨居马来西亚：刘世宣",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0097",
    "name": "刘俊乾",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘俊乾",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0098",
    "name": "刘俊彬",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘俊彬",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0099",
    "name": "刘俊林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘俊林",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0100",
    "name": "刘德新",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘德新",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0101",
    "name": "刘潮安",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘潮安",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0102",
    "name": "刘森河",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居澳大利亚：刘森河",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0103",
    "name": "刘宗湖",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘宗湖；东津沦陷时期被日本军杀死：刘宗湖",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0104",
    "name": "刘绍构",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘绍构",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0105",
    "name": "刘绍锦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘绍锦",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0106",
    "name": "刘绍扬",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘绍扬",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0107",
    "name": "刘绍发",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘绍发",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0108",
    "name": "刘信亮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘信亮",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0109",
    "name": "刘芝发",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘芝发",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0110",
    "name": "刘芝茂",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘芝茂",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0111",
    "name": "刘梓生",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘梓生",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0112",
    "name": "刘汉生",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘汉生",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0113",
    "name": "刘永德",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘永德",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0114",
    "name": "刘永宁",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘永宁",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0115",
    "name": "刘世禄",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘世禄",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0116",
    "name": "刘世汉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘世汉",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0117",
    "name": "刘白番",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘白番",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0118",
    "name": "刘春元",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘春元",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0119",
    "name": "刘德安",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘德安",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0120",
    "name": "刘俊元",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘俊元",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0121",
    "name": "刘俊丰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘俊丰",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0122",
    "name": "刘昆鹏",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘昆鹏",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0123",
    "name": "刘维智",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘维智",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0124",
    "name": "刘庆名",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘庆名",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0125",
    "name": "刘溪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘溪",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0126",
    "name": "刘森三",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘森三",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0127",
    "name": "刘森四",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘森四",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0128",
    "name": "刘宏标",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘宏标",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0129",
    "name": "刘命钦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘命钦",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0130",
    "name": "刘婵桂",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘婵桂",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0131",
    "name": "刘婵龙",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘婵龙",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0132",
    "name": "刘喜德",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘喜德",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0133",
    "name": "刘庆寿",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘庆寿",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0134",
    "name": "刘世家",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘世家",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0135",
    "name": "刘宗祥",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居越南：刘宗祥",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0136",
    "name": "刘镜清",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居越南：刘镜清",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0137",
    "name": "刘维阳",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居越南：刘维阳",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0138",
    "name": "刘瑞彬",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘瑞彬",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0139",
    "name": "刘世珍",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘世珍",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0140",
    "name": "刘顺和",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘顺和",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0141",
    "name": "刘世守",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘世守",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0142",
    "name": "刘世木",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘世木",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0143",
    "name": "刘世佳",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘世佳；侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0144",
    "name": "刘绍晓",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍晓",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0145",
    "name": "刘耀汉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘耀汉",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0146",
    "name": "刘惠波",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居香港：刘惠波；人口篇补充：第一批：1953年10月移户口迁海南有32人：刘世升、刘桂炎、刘森炎、刘森发、刘森桂、刘凤莲、刘世润、刘钧岩、刘世培、刘世让、刘清祥、刘应喜、刘维胜、刘胡进、刘丽梅、刘芷森、刘教泉、刘裕章、刘德林、刘德熙、刘顺喜、刘裕生、刘松溪、刘镇芷、刘德真、廖锡林、廖振溪、廖双桂、刘蕏华、廖双舟、刘惠波、廖四妹。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0147",
    "name": "刘仰文",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居香港：刘仰文；刘仰文：（1905–2002）民国间，曾任闽粤赣军法处法官。1994年为下津小学书题校名。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第七篇 人物/第二章 民国人物 4402080e7d30829ba52c015ed0e545b4.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0148",
    "name": "刘耀南",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居香港：刘耀南",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0149",
    "name": "刘德报",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居台湾：刘德报；刘德报：（1901—？）曾任国民党军队某部校官，1949年移居台湾，1991年捐资5000元助建下津小学教学楼。；捐资芳名录：刘德报先生 伍仟。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第七篇 人物/第二章 民国人物 4402080e7d30829ba52c015ed0e545b4.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0150",
    "name": "刘镜泉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居台湾：刘镜泉；刘镜泉：民国时期曾任台湾警察局局长。1991年捐资1000元，助建下津小学教学楼。；捐资芳名录：刘镜泉先生 壹仟。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第七篇 人物/第二章 民国人物 4402080e7d30829ba52c015ed0e545b4.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0151",
    "name": "刘兆祥",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘兆祥",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0152",
    "name": "刘若波",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘若波；迁上海：刘若波",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0153",
    "name": "刘镜波",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘镜波",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0154",
    "name": "刘钧波",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘钧波",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0447",
    "name": "刘映波",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0156",
    "name": "刘硕波",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘硕波",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0157",
    "name": "刘镇波",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘镇波",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0158",
    "name": "刘应祥",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘应祥",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0159",
    "name": "刘照堂",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘照堂",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0160",
    "name": "刘照廷",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘照廷",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0161",
    "name": "刘昆盛",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁汕头：刘昆盛",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0162",
    "name": "刘衍韩",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁澄海：刘衍韩",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0163",
    "name": "刘世毫",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁澄海：刘世毫",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0164",
    "name": "刘维胜",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁惠州：刘维胜；人口篇补充：第一批：1953年10月移户口迁海南有32人：刘世升、刘桂炎、刘森炎、刘森发、刘森桂、刘凤莲、刘世润、刘钧岩、刘世培、刘世让、刘清祥、刘应喜、刘维胜、刘胡进、刘丽梅、刘芷森、刘教泉、刘裕章、刘德林、刘德熙、刘顺喜、刘裕生、刘松溪、刘镇芷、刘德真、廖锡林、廖振溪、廖双桂、刘蕏华、廖双舟、刘惠波、廖四妹。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0165",
    "name": "刘维勿",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁广州：刘维勿",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0166",
    "name": "刘森木",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁广州：刘森木",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0167",
    "name": "刘焕明",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁广州：刘焕明；刘焕明：1936年生，1955年应征入伍，任郑州军校教员，转业后在广东省肇庆专署财办工作，累职肇庆市技术监督局局长。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0168",
    "name": "刘怀忠",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁广州：刘怀忠；刘怀忠：1968年生，现任广东商业外贸出口基地总经理。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0169",
    "name": "刘裕新",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁黄冈：刘裕新；迁居韶关：刘德进、刘裕新；人口篇补充：1957年12月，刘农桐、刘世森、刘裕新、刘德荣、刘廷治、刘再进、刘喜钦、刘炳钦、黄上海、廖令湘八人，调往兴宁修建军用飞机场。；刘裕新：1920年生，1938年10月在潮安师范学校读书时参加中国共产党。1947年冬参加闽粤赣游击纵队，奉命上凤凰山，在纵队第四支队第二政治武装队工作。1948年1月任第四支队第三武工队队长。同年10月调任纵队《自由韩江》报社社长，接收华侨进步青年参加报社工作。1949年初奉命率报社41位同志上凤凰山，任第二期出版负责人。同年6月调任潮汕区委潮澄饶分委主任秘书，…",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第七篇 人物/第三章 革命人物 1b02080e7d30825a849501b2bd60fa6f.html",
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0170",
    "name": "刘裕龙",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁南宁：刘裕龙；经党员大会选举，呈报上级党委审批，产生下津村党委会。设书记1人，副书记2人，委员5人，下分设七个党支部。；刘裕龙：现任中共下津村党委委员，下津村村委副主任、治安主任。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第六篇 政治/第二章 中共下津党组织 2712080e7d30835ca08601b2a9b918a8.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0171",
    "name": "刘裕成",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁普宁：刘裕成；迁居潮州城：刘玉文、刘鹏、刘德平、刘裕成、刘木歆、刘世海、刘德松、刘桃南；人口篇补充：第三批：1970年9月移户口迁海南有41人：刘裕成、刘德喜、刘岳俊、刘顺成、刘裕明、刘裕民、刘裕宁、刘炳合、康舟坚、廖耀加、廖振松、刘荣辉、林素茂、廖御霞、刘裕丰、刘裕水、廖耀进、刘玉音、刘镇华、刘镇坤、刘裕炎、刘镇权、刘宗波、廖碧卿、刘成亮、刘锦湖、刘世锐、刘裕发、刘秀珍、刘昆明、廖耀城、刘德南、刘德任、刘巧花、刘瑞兰、刘再传、刘瑞浩、廖令奕、康巧习、刘绍荣、刘裕声。",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0172",
    "name": "刘廷顺",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "东津沦陷时期被日本军杀死：刘廷顺",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0173",
    "name": "刘裕千",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1949年被胡琏残部掠往台湾充兵：刘裕千",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0174",
    "name": "刘绍芸",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1949年被胡琏残部掠往台湾充兵：刘绍芸",
    "clan": "刘氏",
    "sourceTitle": "第三节 窟尾沟乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第三节 窟尾沟乡 3242080e7d3082a7b2730108cfa76a2a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0175",
    "name": "刘颖",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0176"
    ],
    "description": "刘氏123世：一二三世　刘颖：父被害，又因婚于潮，于五代后梁贞明三年（917）由广州迁徙潮州，卜择桃坑结庐隐居，洁身遁世，奉为桃坑刘氏开基祖。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0176",
    "name": "刘穆",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0177"
    ],
    "description": "刘氏124世：一二四世　刘穆：开辟家园，奉为桃坑刘氏始创祖。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0175",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0177",
    "name": "刘表",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0178"
    ],
    "description": "刘氏125世/桃坑1世：一二五世　刘表：于宋咸平四年（1001），举贤良方正，授承直郎、大理寺评事。奉为桃坑刘氏一世祖。；刘表：宋咸平四年（1001），举贤良方正，官授承直郎大理寺评事，崇祀乡贤祠。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0176",
    "generation": 1,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0178",
    "name": "刘默",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0179"
    ],
    "description": "刘氏126世/桃坑2世：一二六世（桃坑二世）刘默：于宋景祐三年（1036）举五经特奏题名，官拜文林郎，化州推官。；刘默：字时光，宋景祐三年（1036），举五经特奉奏题名，官拜文林郎、化州推官，崇祀乡贤祠。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0177",
    "generation": 2,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0179",
    "name": "刘克俊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0180",
      "ref_XJ-LIU-0181",
      "ref_XJ-LIU-0182"
    ],
    "description": "刘氏127世/桃坑3世：一二七世（桃坑三世）刘克俊：恩赠朝请大夫。公有子三：长刘允，次刘元，三刘亮。刘克俊（尊称朝请公）于宋宣和年间（1119—1125），肇修宗谱《天地人》三册。；刘克俊：字子材，号东山，宋大观元年（1107）以子允贵，恩赠朝奉郎。宋宣和六年（1124），敕恩改赠朝请郎，终赠朝请大夫。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0178",
    "generation": 3,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0180",
    "name": "刘允",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "manual_刘昉",
      "ref_XJ-LIU-0184"
    ],
    "description": "刘氏128世/桃坑4世：一二八世（桃坑四世）刘允：于宋绍圣四年（1097）登丁丑科进士。公为潮州八贤之一，终赠上柱国左金紫光禄大夫，尊称金紫公。有子二：长刘昉，次刘景。；刘允：字厚中，宋绍圣四年（1097）登丁丑科何昌言榜进士，历任循州户曹、程乡知县、化州知州、桂州知州，终赠上柱国左金紫光禄大夫。公在程乡县任上，恰逢大旱，庄稼失收，奏旨减免灾民租赋获准实施。致仕后，订正韩文，并刻版印刷发行。崇祀潮州八贤祠、化州功德祠、程乡名宦祠。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0179",
    "generation": 4,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0181",
    "name": "刘元",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏128世/桃坑4世：刘克俊……公有子三：长刘允，次刘元，三刘亮。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0179",
    "generation": 4,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0182",
    "name": "刘亮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏128世/桃坑4世：刘克俊……公有子三：长刘允，次刘元，三刘亮。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0179",
    "generation": 4,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0184",
    "name": "刘景",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-WU-0001",
      "ref_XJ-XU-0002",
      "ref_XJ-ZENG-0001",
      "ref_XJ-ZHAN-0001"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0185",
      "ref_XJ-LIU-0186",
      "ref_XJ-LIU-0187",
      "ref_XJ-LIU-0188",
      "ref_XJ-LIU-0189",
      "ref_XJ-LIU-0190",
      "ref_XJ-LIU-0191",
      "ref_XJ-LIU-0193",
      "ref_XJ-LIU-0192"
    ],
    "description": "刘氏129世/桃坑5世：一二九世（桃坑五世）刘景：生于宋治平三年（1066）岁次丙午，卒于宋隆兴元年（1163）岁次癸未十二月十六日，寿九十八。公娶吴、许、曾、詹四氏，俱封为夫人。生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。；刘景：（1066–1163），宋靖康元年（1126），举贤良方正，授朝请郎，历任广南路市舶，台湾台南知州，高雄州知州。公奉命提兵征服安南有功，晋阶银青光禄大夫，封爵开国男，赐食邑三百户，赏黄金三百（斤），三次奉旨上京面君。卒葬龟山，崇祀乡贤祠。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "birthYear": 1066,
    "deathYear": 1163,
    "fatherId": "ref_XJ-LIU-0180",
    "generation": 5,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-WU-0001",
    "name": "吴氏（刘景配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0184"
    ],
    "childrenIds": [],
    "description": "刘景公娶吴、许、曾、詹四氏，俱封为夫人。生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "吴氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-XU-0002",
    "name": "许氏（刘景配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0184"
    ],
    "childrenIds": [],
    "description": "刘景公娶吴、许、曾、詹四氏，俱封为夫人。生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "许氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-ZENG-0001",
    "name": "曾氏（刘景配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0184"
    ],
    "childrenIds": [],
    "description": "刘景公娶吴、许、曾、詹四氏，俱封为夫人。生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "曾氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-ZHAN-0001",
    "name": "詹氏（刘景配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0184"
    ],
    "childrenIds": [],
    "description": "刘景公娶吴、许、曾、詹四氏，俱封为夫人。生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "詹氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0185",
    "name": "刘济",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏130世/桃坑6世：刘景公……生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0186",
    "name": "刘涣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏130世/桃坑6世：刘景公……生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0187",
    "name": "刘瀚",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏130世/桃坑6世：刘景公……生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0188",
    "name": "刘泽",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏130世/桃坑6世：刘景公……生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0189",
    "name": "刘洛",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏130世/桃坑6世：刘景公……生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0190",
    "name": "刘潞",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏130世/桃坑6世：刘景公……生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0191",
    "name": "刘汭",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏130世/桃坑6世：刘景公……生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0192",
    "name": "刘淮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏130世/桃坑6世：刘景公……生济、涣、瀚、泽、洛、潞、汭、渍、淮九子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0193",
    "name": "刘渍",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-YE-0001"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0197",
      "ref_XJ-LIU-0194",
      "ref_XJ-LIU-0195",
      "ref_XJ-LIU-0196"
    ],
    "description": "刘氏130世/桃坑6世：一三〇世（桃坑六世）刘渍：字微甫，官迪功郎，娶叶氏，生权、模、栻、梓四子。；刘渍：字微甫，宋绍兴年间（1131–1162），官授迪功郎，直史馆五经博士。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0184",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 6,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-YE-0001",
    "name": "叶氏（刘渍配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0193"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0197",
      "ref_XJ-LIU-0194",
      "ref_XJ-LIU-0195",
      "ref_XJ-LIU-0196"
    ],
    "description": "刘渍：字微甫，官迪功郎，娶叶氏，生权、模、栻、梓四子。",
    "clan": "叶氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "叶氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0194",
    "name": "刘模",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏131世/桃坑7世：刘渍……娶叶氏，生权、模、栻、梓四子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0193",
    "motherId": "ref_XJ-YE-0001",
    "generation": 7,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0195",
    "name": "刘栻",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏131世/桃坑7世：刘渍……娶叶氏，生权、模、栻、梓四子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0193",
    "motherId": "ref_XJ-YE-0001",
    "generation": 7,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0196",
    "name": "刘梓",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏131世/桃坑7世：刘渍……娶叶氏，生权、模、栻、梓四子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0193",
    "motherId": "ref_XJ-YE-0001",
    "generation": 7,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0197",
    "name": "刘权",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0199",
      "g_刘然老_第二节_桃坑乡"
    ],
    "description": "刘氏131世/桃坑7世：一三一世（桃坑七世）刘权：妣氏未详，生炳、然老二子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0193",
    "motherId": "ref_XJ-YE-0001",
    "generation": 7,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0199",
    "name": "刘炳",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-SU-0001"
    ],
    "childrenIds": [
      "g_刘真庆_第二节_桃坑乡",
      "g_刘真禄_第二节_桃坑乡"
    ],
    "description": "刘氏132世/桃坑8世：一三二世（桃坑八世）刘炳：官户曹给事中。妣宜人苏氏，生真庆、真禄二子。；刘炳：宋贡士，官至户曹给事中。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0197",
    "generation": 8,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-SU-0001",
    "name": "苏氏（刘炳配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0199"
    ],
    "childrenIds": [
      "g_刘真庆_第二节_桃坑乡",
      "g_刘真禄_第二节_桃坑乡"
    ],
    "description": "刘炳：官户曹给事中。妣宜人苏氏，生真庆、真禄二子。",
    "clan": "苏氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "宜人苏",
      "宜人苏氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-0004",
    "name": "陈氏（刘真庆配）",
    "gender": "女",
    "spouseIds": [
      "g_刘真庆_第二节_桃坑乡"
    ],
    "childrenIds": [],
    "description": "刘真庆：官承事郎机宜。妣孺人陈氏、叶氏，生铨一子。",
    "clan": "陈氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "孺人陈",
      "孺人陈氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-YE-0002",
    "name": "叶氏（刘真庆配）",
    "gender": "女",
    "spouseIds": [
      "g_刘真庆_第二节_桃坑乡"
    ],
    "childrenIds": [],
    "description": "刘真庆：官承事郎机宜。妣孺人陈氏、叶氏，生铨一子。",
    "clan": "叶氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0202",
    "name": "刘铨",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-LI-0001",
      "ref_XJ-YE-0003"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0204",
      "g_刘济孙_第二节_桃坑乡"
    ],
    "description": "刘氏134世/桃坑10世：一三四世（桃坑十世）刘铨：号东村，处士。元皇庆二年（1313）主编宗谱。公广增田宅，重建祠堂，立祭田赡宗子香灯，配享大宗祠。妣县君李氏、叶氏，生公孙、济孙二子。；刘铨：号东村，宋处士。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "g_刘真庆_第二节_桃坑乡",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 10,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LI-0001",
    "name": "李氏（刘铨配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0202"
    ],
    "childrenIds": [],
    "description": "刘铨……妣县君李氏、叶氏，生公孙、济孙二子。",
    "clan": "李氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "县君李"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-YE-0003",
    "name": "叶氏（刘铨配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0202"
    ],
    "childrenIds": [],
    "description": "刘铨……妣县君李氏、叶氏，生公孙、济孙二子。",
    "clan": "叶氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0204",
    "name": "刘公孙",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-ZHAO-0001"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0205",
      "g_刘枢_第二节_桃坑乡"
    ],
    "description": "刘氏135世/桃坑11世：一三五世（桃坑十一世）刘公孙：号甲四学士，立蒸尝三顷。妣郡主赵氏，生桂、枢二子。其后立学士公祠，称甲四公房。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0202",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 11,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-ZHAO-0001",
    "name": "赵氏（刘公孙配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0204"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0205",
      "g_刘枢_第二节_桃坑乡"
    ],
    "description": "刘公孙：号甲四学士，立蒸尝三顷。妣郡主赵氏，生桂、枢二子。",
    "clan": "赵氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "郡主赵",
      "郡主赵氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0205",
    "name": "刘桂",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏136世/桃坑12世：一三六世（桃坑十二世）：刘桂系甲四公房长房，其后创上津旧厝刘，分支中津照壁。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0204",
    "motherId": "ref_XJ-ZHAO-0001",
    "generation": 12,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-ZHENG-0002",
    "name": "郑氏（刘枢配）",
    "gender": "女",
    "spouseIds": [
      "g_刘枢_第二节_桃坑乡"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0209",
      "ref_XJ-LIU-0207",
      "ref_XJ-LIU-0208"
    ],
    "description": "刘枢字原丙，系甲四公房二房，妣郑氏，生勋、焘、然三子。",
    "clan": "郑氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0207",
    "name": "刘焘",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏137世/桃坑13世：刘枢……妣郑氏，生勋、焘、然三子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "g_刘枢_第二节_桃坑乡",
    "motherId": "ref_XJ-ZHENG-0002",
    "generation": 13,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0208",
    "name": "刘然",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏137世/桃坑13世：刘枢……妣郑氏，生勋、焘、然三子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "g_刘枢_第二节_桃坑乡",
    "motherId": "ref_XJ-ZHENG-0002",
    "generation": 13,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0209",
    "name": "刘勋",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-CHEN-0005"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0210"
    ],
    "description": "刘氏137世/桃坑13世：一三七世（桃坑十三世）刘勋：字宗尧，号东叟，获庠生功名。妣县君陈氏，生童一子。；刘勋：字宗尧，号东叟，明庠生。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "g_刘枢_第二节_桃坑乡",
    "motherId": "ref_XJ-ZHENG-0002",
    "generation": 13,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-0005",
    "name": "陈氏（刘勋配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0209"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0210"
    ],
    "description": "刘勋……妣县君陈氏，生童一子。",
    "clan": "陈氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "县君陈",
      "县君陈氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0210",
    "name": "刘童",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-LI-0002"
    ],
    "childrenIds": [
      "g_刘潮津_第二节_桃坑乡",
      "ref_XJ-LIU-0211",
      "g_刘得山_第二节_桃坑乡",
      "ref_XJ-LIU-0213"
    ],
    "description": "刘氏138世/桃坑14世：一三八世（桃坑十四世）刘童：字本明，号若愚，妣李氏，生潮津、铿、得山、鉴四子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0209",
    "motherId": "ref_XJ-CHEN-0005",
    "generation": 14,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LI-0002",
    "name": "李氏（刘童配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0210"
    ],
    "childrenIds": [
      "g_刘潮津_第二节_桃坑乡",
      "ref_XJ-LIU-0211",
      "g_刘得山_第二节_桃坑乡",
      "ref_XJ-LIU-0213"
    ],
    "description": "刘童：字本明，号若愚，妣李氏，生潮津、铿、得山、鉴四子。",
    "clan": "李氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "李氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0211",
    "name": "刘铿",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏139世/桃坑15世：刘童……妣李氏，生潮津、铿、得山、鉴四子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0210",
    "motherId": "ref_XJ-LI-0002",
    "generation": 15,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0213",
    "name": "刘鉴",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏139世/桃坑15世：刘童……妣李氏，生潮津、铿、得山、鉴四子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0210",
    "motherId": "ref_XJ-LI-0002",
    "generation": 15,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0215",
    "name": "刘寅",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏140世/桃坑16世：刘潮津……妣氏未详，生拱、寅二子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "g_刘潮津_第二节_桃坑乡",
    "generation": 16,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0216",
    "name": "刘拱",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-CHEN-0006"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0217",
      "g_刘顺兴_第二节_桃坑乡"
    ],
    "description": "刘氏140世/桃坑16世：一四〇世（桃坑十六世）刘拱：字廷敬，号默简，获庠生功名。妣陈氏，生顷、顺兴二子。；刘拱：字廷敬，号默简，明庠生。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "g_刘潮津_第二节_桃坑乡",
    "generation": 16,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-0006",
    "name": "陈氏（刘拱配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0216"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0217",
      "g_刘顺兴_第二节_桃坑乡"
    ],
    "description": "刘拱……妣陈氏，生顷、顺兴二子。",
    "clan": "陈氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0217",
    "name": "刘顷",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏141世/桃坑17世：刘拱……妣陈氏，生顷、顺兴二子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0216",
    "motherId": "ref_XJ-CHEN-0006",
    "generation": 17,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-WU-0002",
    "name": "吴氏（刘顺兴配）",
    "gender": "女",
    "spouseIds": [
      "g_刘顺兴_第二节_桃坑乡"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0219"
    ],
    "description": "刘顺兴：字文元，号素轩，妣吴氏，生锡一子。",
    "clan": "吴氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "aliases": [
      "吴氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0219",
    "name": "刘锡",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-CHEN-0007",
      "ref_XJ-WU-0003"
    ],
    "childrenIds": [
      "g_刘策_第三节_窟尾沟乡",
      "ref_XJ-LIU-0220",
      "ref_XJ-LIU-0221"
    ],
    "description": "刘氏142世/桃坑18世：一四二世（桃坑十八世）刘锡：字朝纪，号新溪，妣陈氏、吴氏，生策、簧、廉三子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "g_刘顺兴_第二节_桃坑乡",
    "motherId": "ref_XJ-WU-0002",
    "generation": 18,
    "generationSystem": "桃坑",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-0007",
    "name": "陈氏（刘锡配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0219"
    ],
    "childrenIds": [],
    "description": "刘锡：字朝纪，号新溪，妣陈氏、吴氏，生策、簧、廉三子。",
    "clan": "陈氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-WU-0003",
    "name": "吴氏（刘锡配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0219"
    ],
    "childrenIds": [],
    "description": "刘锡：字朝纪，号新溪，妣陈氏、吴氏，生策、簧、廉三子。",
    "clan": "吴氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0220",
    "name": "刘簧",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏143世/桃坑19世：刘锡……生策、簧、廉三子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0219",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 19,
    "generationSystem": "桃坑",
    "generationName": "日",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0221",
    "name": "刘廉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏143世/桃坑19世：刘锡……生策、簧、廉三子。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0219",
    "reviewNotes": [
      "原文列父亲多位配偶，未说明具体生母；保留父系关系。"
    ],
    "generation": 19,
    "generationSystem": "桃坑",
    "generationName": "日",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0222",
    "name": "刘少集",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘少集（尊称中舍公），于宋淳熙五年（1178）作《家谱引》续修十世宗谱。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0223",
    "name": "刘镇",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘镇（尊称教谕公），于元皇庆二年（1313）撰重修谱序，刘英发、刘铨续修宗谱。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0224",
    "name": "刘英发",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘镇（尊称教谕公），于元皇庆二年（1313）撰重修谱序，刘英发、刘铨续修宗谱。；刘英发：字伯秀，元授从仕郎，官容州通判。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0225",
    "name": "刘义",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘义字孟宜（桂平知县），于明宣德四年（1429）重修谱牒并作序。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0226",
    "name": "刘志学",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘志学（漳州府同知）于明嘉靖七年（1528）重修族谱，作《世系图说》。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0227",
    "name": "刘茂楠",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清光绪年间（1875—1908）刘茂楠续修《潮州桃坑东津派刘氏族谱》。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-0008",
    "name": "陈氏（刘化雨配）",
    "gender": "女",
    "spouseIds": [
      "g_刘化雨_第四节_巷内乡"
    ],
    "childrenIds": [
      "g_刘标殿_第四节_巷内乡"
    ],
    "description": "刘化雨……娶陈氏，生标殿一子。",
    "clan": "陈氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-0009",
    "name": "陈氏（刘标殿配）",
    "gender": "女",
    "spouseIds": [
      "g_刘标殿_第四节_巷内乡"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0230"
    ],
    "description": "刘标殿……娶陈氏，生文旦一子。",
    "clan": "陈氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-CAI-0001",
    "name": "蔡氏（刘标殿续配）",
    "gender": "女",
    "spouseIds": [
      "g_刘标殿_第四节_巷内乡"
    ],
    "childrenIds": [
      "ref_XJ-LIU-0231"
    ],
    "description": "刘标殿……续娶蔡氏，生永泰一子。",
    "clan": "蔡氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0230",
    "name": "刘文旦",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-LIANG-0002"
    ],
    "childrenIds": [
      "g_刘茂翔_第四节_巷内乡",
      "g_刘高秦_第四节_巷内乡"
    ],
    "description": "刘氏147世/桃坑23世\"禧\"字辈：一四七世（桃坑23世“禧”字辈）刘文旦号景新，公获廩膳生功名，增广田宅，娶梁氏，生茂翔、高秦二子。；刘文旦：号景新，明廩膳生。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘标殿_第四节_巷内乡",
    "motherId": "ref_XJ-CHEN-0009",
    "generation": 23,
    "generationSystem": "桃坑",
    "generationName": "禧",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIANG-0002",
    "name": "梁氏（刘文旦配）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0230"
    ],
    "childrenIds": [
      "g_刘茂翔_第四节_巷内乡",
      "g_刘高秦_第四节_巷内乡"
    ],
    "description": "刘文旦……娶梁氏，生茂翔、高秦二子。",
    "clan": "梁氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "aliases": [
      "梁氏"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0231",
    "name": "刘永泰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏147世/桃坑23世\"禧\"字辈：刘永泰嗣母家为祖。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘标殿_第四节_巷内乡",
    "motherId": "ref_XJ-CAI-0001",
    "generation": 23,
    "generationSystem": "桃坑",
    "generationName": "禧",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0234",
    "name": "刘力添",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏149世/桃坑25世\"力\"字辈：刘茂翔……生力添、力谦、力真、力任四子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘茂翔_第四节_巷内乡",
    "motherId": "g_梁氏妙贞_第四节_巷内乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0235",
    "name": "刘力真",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏149世/桃坑25世\"力\"字辈：刘茂翔……生力添、力谦、力真、力任四子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘茂翔_第四节_巷内乡",
    "motherId": "g_梁氏妙贞_第四节_巷内乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0236",
    "name": "刘力任",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏149世/桃坑25世\"力\"字辈：刘茂翔……生力添、力谦、力真、力任四子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘茂翔_第四节_巷内乡",
    "motherId": "g_梁氏妙贞_第四节_巷内乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-GUO-0001",
    "name": "郭氏（刘力谦配）",
    "gender": "女",
    "spouseIds": [
      "g_刘力谦_第四节_巷内乡"
    ],
    "childrenIds": [],
    "description": "尊称郭氏妈所生的嗣裔为“阿娘房”。",
    "clan": "郭氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIN-0002",
    "name": "林氏（刘力谦妾）",
    "gender": "女",
    "spouseIds": [
      "g_刘力谦_第四节_巷内乡"
    ],
    "childrenIds": [
      "g_刘贻祥_第四节_巷内乡",
      "g_刘贻铮_第四节_巷内乡"
    ],
    "description": "力谦公致仕后纳林氏为妾，生贻祥、贻铮二子。子孙奉林氏妈为太婆，其后称“阿婆房”。",
    "clan": "林氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0241",
    "name": "刘力二",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏149世/桃坑25世\"力\"字辈：刘高秦……公妣氏失记，生力田、力二、力三、力四四子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘高秦_第四节_巷内乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0242",
    "name": "刘力三",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏149世/桃坑25世\"力\"字辈：刘高秦……公妣氏失记，生力田、力二、力三、力四四子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘高秦_第四节_巷内乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0243",
    "name": "刘力四",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏149世/桃坑25世\"力\"字辈：刘高秦……公妣氏失记，生力田、力二、力三、力四四子。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "g_刘高秦_第四节_巷内乡",
    "generation": 25,
    "generationSystem": "桃坑",
    "generationName": "力",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0244",
    "name": "刘贻昇",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清嘉庆年间（1796—1820）刘贻昇家族兴建后埕聚落，因而，该房称为后埕社。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0245",
    "name": "刘贻信",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清嘉庆年间（1796—1820）刘贻信家族兴建榱丛下房屋，因而该房称为榱丛下派。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0246",
    "name": "刘贻大",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘贻大家族，兴建五马前坐北朝南厝座。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0247",
    "name": "刘绍烈",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘绍烈家族，于清咸丰年间（1851—1861）兴建假山聚落。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0248",
    "name": "刘绍德",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘绍德家族，于清同治年间（1862—1874）兴建五马内背北侧、铺仔前乡东侧厝座。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0249",
    "name": "刘绍存",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘绍存家族，于民国十年（1921），兴建廖元兴聚落前厝座。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0250",
    "name": "刘德树",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘德树家族，于民国十二年（1923），兴建五马池东侧厝座。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0469",
    "name": "刘宗发",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘宗敬、刘宗金侨居柬埔寨，刘宗发侨居泰国。两地传至“绍”字辈分为七大户。",
    "clan": "刘氏",
    "sourceTitle": "第七节 铺仔前",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0252",
    "name": "刘德寿",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "在东津堤顶两侧兴建房屋：刘德寿、刘德贞、刘德勋、刘德才、刘锦云、刘绍丰、刘寿年。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0253",
    "name": "刘德贞",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "在东津堤顶两侧兴建房屋：刘德寿、刘德贞、刘德勋、刘德才、刘锦云、刘绍丰、刘寿年。；人口篇补充：1960年，由部队直接退伍参加海南建设有刘世荣、刘德贞、廖振坤三人。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0254",
    "name": "刘德勋",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "在东津堤顶两侧兴建房屋：刘德寿、刘德贞、刘德勋、刘德才、刘锦云、刘绍丰、刘寿年。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0255",
    "name": "刘德才",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "在东津堤顶两侧兴建房屋：刘德寿、刘德贞、刘德勋、刘德才、刘锦云、刘绍丰、刘寿年。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0256",
    "name": "刘锦云",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "在东津堤顶两侧兴建房屋：刘德寿、刘德贞、刘德勋、刘德才、刘锦云、刘绍丰、刘寿年。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0439",
    "name": "刘绍丰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国者有：刘宗标、刘明进、刘清泉、刘绍丰。",
    "clan": "刘氏",
    "sourceTitle": "第五节 盐墩乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0258",
    "name": "刘寿年",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-WU-0004"
    ],
    "childrenIds": [],
    "description": "在东津堤顶两侧兴建房屋：刘德寿、刘德贞、刘德勋、刘德才、刘锦云、刘绍丰、刘寿年。；刘寿年：清末至民国时期，在堤顶开药铺，悬壶济世，是时为韩江东岸知名人物。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第二章 民国人物 4402080e7d30829ba52c015ed0e545b4.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0259",
    "name": "刘树楠",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "在埔尾兴建房屋：刘树楠、刘世成、刘德进。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0260",
    "name": "刘世成",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "在埔尾兴建房屋：刘树楠、刘世成、刘德进。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0261",
    "name": "刘德进",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "在埔尾兴建房屋：刘树楠、刘世成、刘德进。；迁居韶关：刘德进、刘裕新；人口篇补充：1959年1月，康国龙、康忠礼、康振明、廖振强、刘春祥、刘福湘、刘裕生、刘德进、刘碧如、刘裕猷、刘世超、刘世真、刘来花、刘细妹、刘丽英、刘碧云、刘淡金、刘炳钦、刘碧娥、刘美真、廖振钿、廖丽娇、廖佩卿、管应杰、赖森泉、张清良、张木炎、张秋吟、张天有、柯锡镇、钟光亮、黄松就、黄林强调往平远石正炼钢铁。；刘德进：幼随父赴南洋谋生，青年时期在南洋参加革命，化名刘迪讯。1946年奉命回潮州凤凰山打游击，尔后转入部队赴福建作战。1960年调广州公安系统工作，曾任韶关监狱、三水监狱、花县监狱监狱长、政委，晋阶警监衔，正处级离休。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第三章 革命人物 1b02080e7d30825a849501b2bd60fa6f.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0262",
    "name": "刘德仁",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "潮州沦陷期间（1939—1945）……被日军杀死三人，其中巷内刘德仁、刘沛林二人，竹抱顶刘寿年妻子吴氏一人。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0263",
    "name": "刘沛林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "潮州沦陷期间（1939—1945）……被日军杀死三人，其中巷内刘德仁、刘沛林二人，竹抱顶刘寿年妻子吴氏一人。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-WU-0004",
    "name": "吴氏（刘寿年妻）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-LIU-0258"
    ],
    "childrenIds": [],
    "description": "潮州沦陷期间（1939—1945）……竹抱顶刘寿年妻子吴氏一人。",
    "clan": "吴氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0264",
    "name": "刘鸿杰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1949年，刘鸿杰被胡琏兵团残部抓往台湾充兵，现居台湾。居台湾：刘鸿杰。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0265",
    "name": "刘绍仪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0266",
    "name": "刘绍潜",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0267",
    "name": "刘绍淡",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0268",
    "name": "刘绍满",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0269",
    "name": "刘理如",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0270",
    "name": "刘理来",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0271",
    "name": "刘理素",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0272",
    "name": "刘世思",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0273",
    "name": "刘弟仔",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0274",
    "name": "刘世四",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0275",
    "name": "刘世武",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0276",
    "name": "刘世意",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0277",
    "name": "刘金春",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0278",
    "name": "刘金辉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0279",
    "name": "刘应溪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0280",
    "name": "刘德英",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0281",
    "name": "刘德银",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0282",
    "name": "刘德强",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0283",
    "name": "刘德钧",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0284",
    "name": "刘亚八",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0285",
    "name": "刘廷松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0286",
    "name": "刘廷楷",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国：刘绍仪、刘绍潜、刘绍淡、刘绍满、刘理如、刘理来、刘理素、刘世思、刘弟仔、刘世佳、刘世四、刘世武、刘世隆、刘世意、刘金春、刘金辉、刘应溪、刘德英、刘德银、刘德强、刘德钧、刘亚八、刘廷松、刘廷楷",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0287",
    "name": "刘绍义",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0288",
    "name": "刘世学",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0289",
    "name": "刘世美",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发；人口篇补充：中共意溪公社党委书记廖松楠推荐刘世美任老农总顾问，并到下津调动老农；1953年，中共中央提出对农业实行社会主义改造，走互助合作的道路。是年，刘世美率先试办互助组成功。；1955年下半年，下津乡五个初级社合并为前进农业生产合作社，刘世美任该社主任。；1957年秋至1958年春建成，工程由意溪镇副镇长刘世美主持。；1956—1957任第三任下津党支部书记；1953—1956任乡长/高级社主任；1956年代表前进社领奖；刘世美：1931年生，1950年参加土改工作，1953年始率先创办互助组、初级社，成为意溪区农业走集体化道路的知名人物。曾任下津乡乡长、前进高级社主任、中共下津前进社党支部书记、东津乡党总支副书记、西都乡党支部书记、意溪镇副镇长、意溪公社副社长。1964年任汕头地区农业局老农顾问，1992年始任下津老人组组长。1955年评为省级劳动模范，1956年2月出席广东省第…",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第五篇 经济/第一章 体制沿革 1762080e7d308285b1ff019da4c35c5a.html",
      "第五篇 经济/第三章 水利 c8a2080e7d308251972001241fef9362.html",
      "第六篇 政治/第二章 中共下津党组织 2712080e7d30835ca08601b2a9b918a8.html",
      "第六篇 政治/第三章 人民代表大会 b392080e7d3082f69e2e818a5f0f7530.html",
      "第六篇 政治/第五章 政绩表彰称号 74e2080e7d30832bb00e81bbc2dbc878.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0290",
    "name": "刘世昌",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0291",
    "name": "刘世强",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0292",
    "name": "刘锦坤",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0293",
    "name": "刘德恭",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0294",
    "name": "刘德成",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发；迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0295",
    "name": "刘德明",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发；侨居印度尼西亚：刘绍宜、刘钟松、刘德华、刘德贤、刘德明、刘裕钦、刘裕森",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0296",
    "name": "刘德敬",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0297",
    "name": "刘正发",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居新加坡：刘绍义、刘世学、刘世美、刘世昌、刘世强、刘锦坤、刘德恭、刘德成、刘德明、刘德敬、刘正发",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0298",
    "name": "刘世鑫",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘世鑫、刘德阳",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0299",
    "name": "刘德阳",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居马来西亚：刘世鑫、刘德阳",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0300",
    "name": "刘绍宜",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居印度尼西亚：刘绍宜、刘钟松、刘德华、刘德贤、刘德明、刘裕钦、刘裕森；迁居磷溪：刘绍宜、刘世静",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0301",
    "name": "刘钟松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居印度尼西亚：刘绍宜、刘钟松、刘德华、刘德贤、刘德明、刘裕钦、刘裕森",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0302",
    "name": "刘德华",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居印度尼西亚：刘绍宜、刘钟松、刘德华、刘德贤、刘德明、刘裕钦、刘裕森",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0303",
    "name": "刘德贤",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居印度尼西亚：刘绍宜、刘钟松、刘德华、刘德贤、刘德明、刘裕钦、刘裕森；人口篇补充：1959年8月，刘德贤、刘镇炎、刘德恩、廖振歆、廖森树、廖令桐六人调往梅县白渡煤矿、田心煤矿挑煤。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0304",
    "name": "刘裕钦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居印度尼西亚：刘绍宜、刘钟松、刘德华、刘德贤、刘德明、刘裕钦、刘裕森；人口篇补充：第四批：1970年11月移户口迁海南有32人：刘德标、刘德兰、刘德贵、刘德茂、刘德仰、刘德广、刘世秋、刘石珠、刘佩吟、刘雪琴、刘世宏、刘裕湘、刘裕俊、刘裕奕、刘惠华、刘楚儿、刘秀卿、刘裕钦、刘燕华、刘燕玉、刘汉钿、刘昆祥、刘昆荣、廖耀辉、廖雪卿、廖森汉、陈顺辉、黄汉章、林明亮、林其洪、刘航珍、刘燕娇。；刘裕钦：曾任下津大队会计、村委。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0305",
    "name": "刘金省",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居越南：刘金省、刘金城",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0306",
    "name": "刘金城",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居越南：刘金省、刘金城；刘金城：1955年9月组建东津木器社，任该社主任。1958年任意溪农械厂车间主管。1961年任意溪木器厂厂长、党支部书记。1968年任意溪公社工交主任。1969年任潮安县二轻局绣衣总厂厂长，党支部书记、潮安县二轻系统党总支副书记。1984年起在潮安县国营工业公司负责管理生产至退休。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0307",
    "name": "刘裕丰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居加拿大：刘裕丰、刘裕宏；人口篇补充：第三批：1970年9月移户口迁海南有41人：刘裕成、刘德喜、刘岳俊、刘顺成、刘裕明、刘裕民、刘裕宁、刘炳合、康舟坚、廖耀加、廖振松、刘荣辉、林素茂、廖御霞、刘裕丰、刘裕水、廖耀进、刘玉音、刘镇华、刘镇坤、刘裕炎、刘镇权、刘宗波、廖碧卿、刘成亮、刘锦湖、刘世锐、刘裕发、刘秀珍、刘昆明、廖耀城、刘德南、刘德任、刘巧花、刘瑞兰、刘再传、刘瑞浩、廖令奕、康巧习、刘绍荣、刘裕声。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0308",
    "name": "刘裕宏",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居加拿大：刘裕丰、刘裕宏",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0309",
    "name": "刘骧本",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居日本：刘骧本",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0310",
    "name": "刘世祯",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居香港：刘世祯、刘世明、刘廷芝、刘广港",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0311",
    "name": "刘世明",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居香港：刘世祯、刘世明、刘廷芝、刘广港",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0312",
    "name": "刘廷芝",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居香港：刘世祯、刘世明、刘廷芝、刘广港",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0313",
    "name": "刘广港",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居香港：刘世祯、刘世明、刘廷芝、刘广港",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0314",
    "name": "刘艺良",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居澳门：刘艺良、刘裕鑫；刘艺良：1957年8月生，1975年参加工作，无党派人士，研究生学历，工商管理博士。1978年到澳门从事物业管理、房地产、进出口贸易行业，1986年任澳门创世地产实业有限公司董事长，1998年任澳门创世集团有限公司董事长。主要社会职务：澳门地区中国和平统一促进会会长，澳门归侨总会会长，澳门特别行政区经济发展委员会委员，澳门特区政府公共房屋食物委员会会员。2013年…",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第七章 乡贤风采 cd62080e7d308383bb3701c343dffc64.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0315",
    "name": "刘裕鑫",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居澳门：刘艺良、刘裕鑫",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0316",
    "name": "刘仲熊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居湖北：刘仲熊、刘东；刘仲熊：湖北省医科大学儿科系主任，儿科研究所所长，第一临床儿科主任、教授。现任湖北省儿科学会主任委员。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0317",
    "name": "刘东",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居湖北：刘仲熊、刘东",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0318",
    "name": "刘厝边",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁福建：刘厝边、刘秋秋",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0319",
    "name": "刘秋秋",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁福建：刘厝边、刘秋秋",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0320",
    "name": "刘德熙",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁海南：刘德熙、刘裕水；人口篇补充：第一批：1953年10月移户口迁海南有32人：刘世升、刘桂炎、刘森炎、刘森发、刘森桂、刘凤莲、刘世润、刘钧岩、刘世培、刘世让、刘清祥、刘应喜、刘维胜、刘胡进、刘丽梅、刘芷森、刘教泉、刘裕章、刘德林、刘德熙、刘顺喜、刘裕生、刘松溪、刘镇芷、刘德真、廖锡林、廖振溪、廖双桂、刘蕏华、廖双舟、刘惠波、廖四妹。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0321",
    "name": "刘裕水",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁海南：刘德熙、刘裕水；人口篇补充：第三批：1970年9月移户口迁海南有41人：刘裕成、刘德喜、刘岳俊、刘顺成、刘裕明、刘裕民、刘裕宁、刘炳合、康舟坚、廖耀加、廖振松、刘荣辉、林素茂、廖御霞、刘裕丰、刘裕水、廖耀进、刘玉音、刘镇华、刘镇坤、刘裕炎、刘镇权、刘宗波、廖碧卿、刘成亮、刘锦湖、刘世锐、刘裕发、刘秀珍、刘昆明、廖耀城、刘德南、刘德任、刘巧花、刘瑞兰、刘再传、刘瑞浩、廖令奕、康巧习、刘绍荣、刘裕声。；刘裕水：曾任下津大队党支部委员、民兵营长。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0322",
    "name": "刘德祥",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居梅州：刘德祥、刘裕源、刘裕昭",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0323",
    "name": "刘裕源",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居梅州：刘德祥、刘裕源、刘裕昭",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0324",
    "name": "刘裕昭",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居梅州：刘德祥、刘裕源、刘裕昭",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0325",
    "name": "刘德元",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居惠州：刘德元、刘崇亮",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0326",
    "name": "刘崇亮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居惠州：刘德元、刘崇亮",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0327",
    "name": "刘岳熊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居河源：刘岳熊、刘玉熊",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0328",
    "name": "刘玉熊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居河源：刘岳熊、刘玉熊",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0329",
    "name": "刘世全",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦；刘世全：1938年生。1958年赴广州在广东省航运公司当学徒，累职广东粤丰公司总经理。；捐资芳名录：刘世全先生 伍仟。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0330",
    "name": "刘长学",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0331",
    "name": "刘兆熊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦；刘兆熊：曾任广东省水利厅处级干部。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0332",
    "name": "刘孟熊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦；刘孟熊：曾任韶关机械厂高级工程师，处级干部。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0333",
    "name": "刘洪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦；刘洪：广州雅西达公司总经理。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0334",
    "name": "刘裕钊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0335",
    "name": "刘裕舜",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦；刘裕舜：1983年生，北京人民公安大学毕业，现任东莞市监狱第七分监区区长（正科）。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0336",
    "name": "刘群",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦；刘群：中共广州黄埔电机厂党支部书记。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0337",
    "name": "刘思荣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0338",
    "name": "刘铭成",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0339",
    "name": "刘佳悦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居广州：刘世全、刘长学、刘兆熊、刘孟熊、刘洪、刘德成、刘裕钊、刘裕舜、刘群、刘思荣、刘铭成、刘佳悦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0340",
    "name": "刘世从",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0341",
    "name": "刘世杰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0342",
    "name": "刘世河",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0343",
    "name": "刘振武",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0344",
    "name": "刘其俊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0345",
    "name": "刘松昌",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0346",
    "name": "刘秋桐",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0347",
    "name": "刘德光",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0348",
    "name": "刘旭贞",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0349",
    "name": "刘锦城",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪；刘锦城：中共汕头市金平区纪委副书记。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0350",
    "name": "刘德猪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居汕头：刘世从、刘世杰、刘世河、刘振武、刘其俊、刘松昌、刘秋桐、刘德光、刘旭贞、刘锦城、刘德猪",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0351",
    "name": "刘世钦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居揭阳：刘世钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0352",
    "name": "刘世海",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居饶平：刘贻铮、刘世海；迁居潮州城：刘玉文、刘鹏、刘德平、刘裕成、刘木歆、刘世海、刘德松、刘桃南",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0353",
    "name": "刘裕思",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁枫溪：刘裕思、刘裕志",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0354",
    "name": "刘裕志",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁枫溪：刘裕思、刘裕志",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0355",
    "name": "刘世静",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居磷溪：刘绍宜、刘世静",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0356",
    "name": "刘宗传",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居意溪：刘宗传、刘绍计、刘两杰",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0357",
    "name": "刘绍计",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居意溪：刘宗传、刘绍计、刘两杰",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0358",
    "name": "刘两杰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居意溪：刘宗传、刘绍计、刘两杰",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0359",
    "name": "刘绍炳",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0360",
    "name": "刘镇标",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0361",
    "name": "刘镇森",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0362",
    "name": "刘四妹",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0363",
    "name": "刘桂财",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0364",
    "name": "刘贤熊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦；刘贤熊：1939年生，1958年应征入伍，在中国人民解放军某部服役，奉命参加抗美援越战争，在战斗中负伤，获一等残废证书及荣誉军人称号。",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
      "第七篇 人物/第五章 烈士、荣誉军人 8032080e7d308340901481bc5419fb9d.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0365",
    "name": "刘加润",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0366",
    "name": "刘银钊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0367",
    "name": "刘哑仔",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0368",
    "name": "刘永钦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居中津：刘绍炳、刘镇标、刘镇森、刘四妹、刘桂财、刘贤熊、刘加润、刘银钊、刘哑仔、刘永钦",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0369",
    "name": "刘玉文",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居潮州城：刘玉文、刘鹏、刘德平、刘裕成、刘木歆、刘世海、刘德松、刘桃南",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0370",
    "name": "刘鹏",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居潮州城：刘玉文、刘鹏、刘德平、刘裕成、刘木歆、刘世海、刘德松、刘桃南",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0371",
    "name": "刘德平",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居潮州城：刘玉文、刘鹏、刘德平、刘裕成、刘木歆、刘世海、刘德松、刘桃南",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0372",
    "name": "刘木歆",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居潮州城：刘玉文、刘鹏、刘德平、刘裕成、刘木歆、刘世海、刘德松、刘桃南",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0373",
    "name": "刘德松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居潮州城：刘玉文、刘鹏、刘德平、刘裕成、刘木歆、刘世海、刘德松、刘桃南",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0374",
    "name": "刘桃南",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁居潮州城：刘玉文、刘鹏、刘德平、刘裕成、刘木歆、刘世海、刘德松、刘桃南",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0375",
    "name": "刘大痴",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁向不详：刘大痴、刘九嗳、刘大舜、刘坤松；迁向不详：刘宗得长子刘大痴、三子刘九嗳、四子刘大舜、五子刘坤松",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "ref_XJ-LIU-0379",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0376",
    "name": "刘九嗳",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁向不详：刘大痴、刘九嗳、刘大舜、刘坤松；迁向不详：刘宗得长子刘大痴、三子刘九嗳、四子刘大舜、五子刘坤松",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "ref_XJ-LIU-0379",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0377",
    "name": "刘大舜",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁向不详：刘大痴、刘九嗳、刘大舜、刘坤松；迁向不详：刘宗得长子刘大痴、三子刘九嗳、四子刘大舜、五子刘坤松",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "ref_XJ-LIU-0379",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0378",
    "name": "刘坤松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁向不详：刘大痴、刘九嗳、刘大舜、刘坤松；迁向不详：刘宗得长子刘大痴、三子刘九嗳、四子刘大舜、五子刘坤松",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "fatherId": "ref_XJ-LIU-0379",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0379",
    "name": "刘宗得",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIU-0375",
      "ref_XJ-LIU-0376",
      "ref_XJ-LIU-0377",
      "ref_XJ-LIU-0378"
    ],
    "description": "迁向不详：刘宗得长子刘大痴、三子刘九嗳、四子刘大舜、五子刘坤松",
    "clan": "刘氏",
    "sourceTitle": "第四节 巷内乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第四节 巷内乡 f1a2080e7d30832c914981ca1b270134.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0432",
    "name": "刘延美",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏146世/桃坑22世\"延\"字辈：刘氏一四六世（桃坑22世\"延\"字辈）刘延美公于清康熙五十八年（1719），由桃坑徙出盐墩开基创乡，现传十二世至\"德\"字辈，有48户，229人。",
    "clan": "刘氏",
    "sourceTitle": "第五节 盐墩乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
    "generation": 22,
    "generationSystem": "桃坑",
    "generationName": "延",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0433",
    "name": "刘禧远",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏147世/桃坑23世\"禧\"字辈：刘氏一四七世（桃坑23世\"禧\"字辈）刘禧远（甲六公房）公于清乾隆六年（1741），由埔东刘厝移盐墩开基。迄今已历278年，现传十一世至\"德\"字辈，居本乡有8户，42人。",
    "clan": "刘氏",
    "sourceTitle": "第五节 盐墩乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
    "generation": 23,
    "generationSystem": "桃坑",
    "generationName": "禧",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0434",
    "name": "刘成谦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘成谦（支字辈）于清末民初迁台湾，现传近百人。；人口篇补充：其中刘成谦于清代迁台湾，现传近百人，廖春潮家族旅居香港，现传50多人。",
    "clan": "刘氏",
    "sourceTitle": "第五节 盐墩乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0435",
    "name": "刘宗龙",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末及民国年间，侨居越南者有：刘宗龙。",
    "clan": "刘氏",
    "sourceTitle": "第五节 盐墩乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0436",
    "name": "刘宗标",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国者有：刘宗标、刘明进、刘清泉、刘绍丰。",
    "clan": "刘氏",
    "sourceTitle": "第五节 盐墩乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0437",
    "name": "刘明进",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国者有：刘宗标、刘明进、刘清泉、刘绍丰。",
    "clan": "刘氏",
    "sourceTitle": "第五节 盐墩乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0438",
    "name": "刘清泉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居泰国者有：刘宗标、刘明进、刘清泉、刘绍丰。",
    "clan": "刘氏",
    "sourceTitle": "第五节 盐墩乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第五节 盐墩乡 ad12080e7d3082e0a712812f59f6421a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0440",
    "name": "刘茂科",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏148世/桃坑24世\"茂\"字辈：刘氏一四八世（桃坑24世）刘茂科字元袋，公约于清乾隆二十八年（1763），由桃坑祖居卜居于韩江东岸之滨开创茂利乡。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "generation": 24,
    "generationSystem": "桃坑",
    "generationName": "茂",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0441",
    "name": "刘濬川",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "民国十八年（1929），刘濬川于廖元兴背的沙墩后开拓二亩余地家园。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0442",
    "name": "刘锡雄",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "晚清时期至民国间，先后侨居于新加坡者有：刘锡雄、刘深泉、刘宗安。；捐资芳名录：刘锡雄先生 贰仟。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0443",
    "name": "刘深泉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "晚清时期至民国间，先后侨居于新加坡者有：刘锡雄、刘深泉、刘宗安。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0444",
    "name": "刘宗安",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "晚清时期至民国间，先后侨居于新加坡者有：刘锡雄、刘深泉、刘宗安。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0445",
    "name": "刘映东",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居于泰国者有：刘映东、刘映青。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0446",
    "name": "刘映青",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居于泰国者有：刘映东、刘映青。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0448",
    "name": "刘世德",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0449",
    "name": "刘国章",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0450",
    "name": "刘家琪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0451",
    "name": "刘家骧",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0452",
    "name": "刘家骏",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0453",
    "name": "刘家驷",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。；捐资芳名录：刘家驷先生 壹仟。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0454",
    "name": "刘家锐",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0455",
    "name": "刘家骥",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0456",
    "name": "刘家聪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。；捐资芳名录：刘家聪先生 壹仟。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0457",
    "name": "刘家驺",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "旅居于香港者有：刘映波、刘世德、刘国章、刘家琪、刘家骧、刘家骏、刘家驷、刘家锐、刘家骥、刘家聪、刘家驺。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0458",
    "name": "刘良举",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "先后迁出者有：刘良举家迁潮州南春路，刘映泽因任教迁居北京。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0459",
    "name": "刘映泽",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "先后迁出者有：刘良举家迁潮州南春路，刘映泽因任教迁居北京。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0460",
    "name": "刘裕汉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘裕汉出仙田乡从丁姓，刘裕林出意溪从黄姓。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0461",
    "name": "刘裕林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘裕汉出仙田乡从丁姓，刘裕林出意溪从黄姓。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0462",
    "name": "刘子丹",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘子丹迁出，去向不明。",
    "clan": "刘氏",
    "sourceTitle": "第六节 茂利乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第六节 茂利乡 ad22080e7d30822798a481ef89060790.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0463",
    "name": "刘潮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "铺仔前刘氏系龙图公房子南公派下黄冈派支系，先祖刘潮为元代海阳县教谕，公的孙子刘荣由桃坑迁黄冈。；刘潮：字子南，元潮州路海阳县教谕。",
    "clan": "刘氏",
    "sourceTitle": "第七节 铺仔前",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0464",
    "name": "刘荣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "公的孙子刘荣由桃坑迁黄冈，其后有裔孙中秀才，故称秀才公房。",
    "clan": "刘氏",
    "sourceTitle": "第七节 铺仔前",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0466",
    "name": "刘宗兴",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初外迁概况：刘宗兴迁居埔尾，现传3户10人。",
    "clan": "刘氏",
    "sourceTitle": "第七节 铺仔前",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0467",
    "name": "刘宗敬",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘宗敬、刘宗金侨居柬埔寨，刘宗发侨居泰国。两地传至“绍”字辈分为七大户。",
    "clan": "刘氏",
    "sourceTitle": "第七节 铺仔前",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0468",
    "name": "刘宗金",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘宗敬、刘宗金侨居柬埔寨，刘宗发侨居泰国。两地传至“绍”字辈分为七大户。",
    "clan": "刘氏",
    "sourceTitle": "第七节 铺仔前",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0470",
    "name": "刘宗森",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "东津沦陷时期（1939—1945），被驻笔架山日军烧毁房屋二间，刘宗森路过虎池码头时被日寇刺死。",
    "clan": "刘氏",
    "sourceTitle": "第七节 铺仔前",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第七节 铺仔前 5fc2080e7d30820cba5c010ebe41c104.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0471",
    "name": "刘开七",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘氏136世：刘氏一三六世刘开七为潮州、循州、梅州肇基祖，其嗣裔称开七公派；海鹅头刘氏，系刘开七之胤。",
    "clan": "刘氏",
    "sourceTitle": "第八节 洗马桥刘氏",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第八节 洗马桥刘氏 84c2080e7d3083bfb8dc813dcd08ce7f.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第八节 洗马桥刘氏 84c2080e7d3083bfb8dc813dcd08ce7f.html",
      "第二篇 先祖创乡/第一章 刘氏/第九节 海鹅头刘氏 8fd2080e7d3083bfafdd812cc353b14a.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0472",
    "name": "刘耀文",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "刘耀文近年来热心寻根访祖，终在饶平县饶洋镇埔下村石井自然村找到祖源，获得自一百四十世起用的字辈，获知自一百四十六世祖来此开基，并就老辈知道的祖讳，自一百六十二世至一百六十七，编成家谱。",
    "clan": "刘氏",
    "sourceTitle": "第八节 洗马桥刘氏",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第八节 洗马桥刘氏 84c2080e7d3083bfb8dc813dcd08ce7f.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第八节 洗马桥刘氏 84c2080e7d3083bfb8dc813dcd08ce7f.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-0475",
    "name": "刘炳林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "传至其子刘炳林，因屡遭“乌青队”骚扰，于潮州沦陷间（1939—1945），由下湖迁海鹅头村定居。",
    "clan": "刘氏",
    "sourceTitle": "第九节 海鹅头刘氏",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第九节 海鹅头刘氏 8fd2080e7d3083bfafdd812cc353b14a.html",
    "fatherId": "g_刘勤生_第九节_海鹅头刘氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第九节 海鹅头刘氏 8fd2080e7d3083bfafdd812cc353b14a.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0120",
    "name": "廖开潮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖开潮于宋端宗年间（1276—1277），因避战乱，携家眷，由莆田乌分门楼石榴花街石榴花巷井脚迁徙入潮，卜择潮城韩江东岸开基，始创地在今画门神一带，因而得廖厝埔地名。",
    "clan": "廖氏",
    "sourceTitle": "第一节 下津廖氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第一节 下津廖氏源流纪略 2082080e7d30829e807281c24b540ba0.html",
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0121",
    "name": "廖烈然",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "开潮公五世：开潮公传至五世廖烈然，廖崖柏、廖润松、廖自忆分为四大房。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0122",
    "name": "廖崖柏",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "开潮公五世：开潮公传至五世廖烈然，廖崖柏、廖润松、廖自忆分为四大房。廖崖柏：约于明宣德三年（1428），由祖屋移创廖厝埔聚落。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0123",
    "name": "廖润松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "开潮公五世：廖润松：约于明宣德三年（1428），由祖屋徙韩江之滨兴建聚落，1756年韩江筑码头，因廖姓聚落而称廖厝码头。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0124",
    "name": "廖自忆",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "开潮公五世：明宣德十年（1435）之前，韩江东岸未筑堤……东厢堤筑后，自忆公房嗣裔将建亭的水窟屯莫沙土，兴建聚落，时人称之为水仙亭，久之，称为水心亭。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0126",
    "name": "廖永记",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖永记：于清代开创绞队井。廖永记：于清同治元年（1862），由画门神徙创绞队井聚落。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0127",
    "name": "廖绍光",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIAO-0128"
    ],
    "description": "廖绍光：于清代兴建画门神背桑树脚聚落，传至廖先荣迁意溪创祖，该支现传80余人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0128",
    "name": "廖先荣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖绍光：于清代兴建画门神背桑树脚聚落，传至廖先荣迁意溪创祖，该支现传80余人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "fatherId": "ref_XJ-LIAO-0127",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0129",
    "name": "廖大妹",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIAO-0130"
    ],
    "description": "廖大妹及儿子廖振发先后迁马来西亚侨居。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0130",
    "name": "廖振发",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖大妹及儿子廖振发先后迁马来西亚侨居。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "motherId": "ref_XJ-LIAO-0129",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0131",
    "name": "廖绍宾",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖绍宾：于清代兴建桑树脚西侧、脚桶黄背、廖厝埔南侧的七字形聚落，即今廖厝埔厅东。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0132",
    "name": "廖狮哥",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖狮哥迁梅县丙村，廖狮弟侨居新加坡。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0133",
    "name": "廖狮弟",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖狮哥迁梅县丙村，廖狮弟侨居新加坡。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0134",
    "name": "廖东平",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖东平：于东津堤顶兴建房屋。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0135",
    "name": "廖木溪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1949年9月，廖木溪（乳名猪屎）被胡琏兵团残部捉往台湾充兵。；捐资芳名录：廖木溪先生 壹仟。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0136",
    "name": "廖再木",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0137",
    "name": "廖振溪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。；人口篇补充：第一批：1953年10月移户口迁海南有32人：刘世升、刘桂炎、刘森炎、刘森发、刘森桂、刘凤莲、刘世润、刘钧岩、刘世培、刘世让、刘清祥、刘应喜、刘维胜、刘胡进、刘丽梅、刘芷森、刘教泉、刘裕章、刘德林、刘德熙、刘顺喜、刘裕生、刘松溪、刘镇芷、刘德真、廖锡林、廖振溪、廖双桂、刘蕏华、廖双舟、刘惠波、廖四妹。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0138",
    "name": "廖明正",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0139",
    "name": "廖明丰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0140",
    "name": "廖先板",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0141",
    "name": "廖先科",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0142",
    "name": "廖先权",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0143",
    "name": "廖老哑",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0144",
    "name": "廖振正",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0145",
    "name": "廖弟九",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0146",
    "name": "廖五",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0147",
    "name": "廖振美",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清末民初，廖再木、廖振溪、廖明正、廖明丰在堤顶建屋。清代至民国间，先后侨居新加坡者有：廖先板、廖先科、廖先权、廖老哑、廖振正，廖弟九、廖五、廖振美、廖再木。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0148",
    "name": "廖木盛",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1949年9月，廖木盛被胡琏兵团残部捉往台湾充兵。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0149",
    "name": "廖绍章",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖绍章：于1911年携家眷迁潮州城下西平路池仔顶内居住。同时在仙街头租铺创办\"廖合利\"铺号。传至廖先勤、廖先松、廖先源增创\"廖合利松记\"、\"廖合祥\"商号。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0184",
    "name": "廖先勤",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIAO-0185"
    ],
    "description": "廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0151",
    "name": "廖先松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "传至廖先勤、廖先松、廖先源增创\"廖合利松记\"、\"廖合祥\"商号。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0152",
    "name": "廖先源",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "传至廖先勤、廖先松、廖先源增创\"廖合利松记\"、\"廖合祥\"商号。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0153",
    "name": "廖永道",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖永道：于1911年，携家眷徙创弯堤廖厝……该家族以\"做桌\"（办理酒席）为业。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0154",
    "name": "廖永禄",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1911年，廖永禄、廖永理、廖来家、廖方墙四大户合力重建家园。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0155",
    "name": "廖永理",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1911年，廖永禄、廖永理、廖来家、廖方墙四大户合力重建家园。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0156",
    "name": "廖来家",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1911年，廖永禄、廖永理、廖来家、廖方墙四大户合力重建家园。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0157",
    "name": "廖方墙",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1911年，廖永禄、廖永理、廖来家、廖方墙四大户合力重建家园。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0158",
    "name": "廖绍贞",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖厝埔先后迁新加坡侨居有：廖绍贞、廖亚五（\"声\"字辈）、廖作传、廖炎通，共传30余人。侨居马来西亚有：廖添树，传10余人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0159",
    "name": "廖亚五",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖厝埔先后迁新加坡侨居有：廖绍贞、廖亚五（\"声\"字辈）、廖作传、廖炎通，共传30余人。侨居马来西亚有：廖添树，传10余人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0160",
    "name": "廖作传",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖厝埔先后迁新加坡侨居有：廖绍贞、廖亚五（\"声\"字辈）、廖作传、廖炎通，共传30余人。侨居马来西亚有：廖添树，传10余人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0161",
    "name": "廖炎通",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖厝埔先后迁新加坡侨居有：廖绍贞、廖亚五（\"声\"字辈）、廖作传、廖炎通，共传30余人。侨居马来西亚有：廖添树，传10余人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0162",
    "name": "廖添树",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖厝埔先后迁新加坡侨居有：廖绍贞、廖亚五（\"声\"字辈）、廖作传、廖炎通，共传30余人。侨居马来西亚有：廖添树，传10余人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0163",
    "name": "廖广渤",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "明万历年间，廖广渤以拔贡任台州判署。廖厝原坐向是坐东朝西面临韩江，明万历年间，廖广渤一族迁居明经第。；廖广渤：字衍泉。明万历年间拔贡，任台州判署天台县事，兴利除害，民颂召杜，升台州府正堂，帝赐明经第。致仕居乡好施乐善。万历四十年（1612）适东津（弯堤）堤陷，渤倡修完固，田庐无淹没之患，乡人德之。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0164",
    "name": "廖锦元",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "由于天灾人祸，该聚落可考者仅有廖锦元、廖木章两大户居住。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0165",
    "name": "廖木章",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "由于天灾人祸，该聚落可考者仅有廖锦元、廖木章两大户居住。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0166",
    "name": "廖碧堂",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "清代，廖碧堂获贡生员、武举人功名，还有文武进士各一人。该聚落可考者，廖碧堂后裔居上座及北巷，廖绍林居下座。；廖碧堂：清府学生员、武举人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0167",
    "name": "廖绍林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIAO-0168"
    ],
    "description": "廖绍林：于晚清时期迁凤塘，长子廖德芳守祖居，廖德光长子廖惠通过继廖德芳。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0168",
    "name": "廖德芳",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖绍林：于晚清时期迁凤塘，长子廖德芳守祖居，廖德光长子廖惠通过继廖德芳。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "fatherId": "ref_XJ-LIAO-0167",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0169",
    "name": "廖德光",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIAO-0170"
    ],
    "description": "廖绍林：于晚清时期迁凤塘，长子廖德芳守祖居，廖德光长子廖惠通过继廖德芳。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0170",
    "name": "廖惠通",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖绍林：于晚清时期迁凤塘，长子廖德芳守祖居，廖德光长子廖惠通过继廖德芳。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "fatherId": "ref_XJ-LIAO-0169",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0171",
    "name": "廖松兴",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖松兴于民国年间迁铺头埔。明经第廖厝现有5户，22人。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0172",
    "name": "廖大道",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁出有：廖大道侨居新加坡。廖振映迁韶关。廖振汉迁潮州城内。廖振亮（乳名亚耐）于1949年9月被胡琏残部抓往台湾充兵。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0173",
    "name": "廖振映",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁出有：廖大道侨居新加坡。廖振映迁韶关。廖振汉迁潮州城内。廖振亮（乳名亚耐）于1949年9月被胡琏残部抓往台湾充兵。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0174",
    "name": "廖振汉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁出有：廖大道侨居新加坡。廖振映迁韶关。廖振汉迁潮州城内。廖振亮（乳名亚耐）于1949年9月被胡琏残部抓往台湾充兵。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0175",
    "name": "廖振亮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁出有：廖大道侨居新加坡。廖振映迁韶关。廖振汉迁潮州城内。廖振亮（乳名亚耐）于1949年9月被胡琏残部抓往台湾充兵。；廖振亮：1951年生，中共广东金融学院党委副书记、副校长、教授。佛山农商银行独立董事。；捐资芳名录：廖振亮先生 壹仟。",
    "clan": "廖氏",
    "sourceTitle": "第二节 廖厝",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第二节 廖厝 65a2080e7d308339979e01cf3c52a2c3.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0181",
    "name": "廖兴以",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "花公二十世附近：廖氏花公二十世 廖兴可 于清嘉庆元年（1796），携弟廖兴以由大埔县三河西坑邦田磜（今属茶阳镇）入潮养鸭群为生。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LI-0003",
    "name": "李德宜",
    "gender": "女",
    "spouseIds": [
      "g_廖兴可_第三节_草美乡"
    ],
    "childrenIds": [],
    "description": "该乡族长见廖兴可为人勤劳诚实，将义女李德宜许配他为妻，允许他们在斯地创乡，还将沙墩前被沙积压的田地租与耕种。",
    "clan": "李氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0182",
    "name": "廖先治",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖先治家族于清光绪二十二年（1896年），在潮州城上东堤创办\"廖元兴\"商号。至1916年，在廖厝祠南侧购地兴建儒林第厝座，建筑面积1708平方米。；廖先治：行老二（1843—1928），清授九品登仕佐郎，廖元兴创始人。公精于农事，菜蔬常抢先上市而得好价。1896年在潮州上东堤创办\"廖元兴\"商号。其家族商务拓展至丰顺、兴宁、澄海、汕头、广州、上海、天津、江苏、香港、泰国等地，富甲东津乡。妻陈慈祥（1843–1937），为经商积累资金。生六子十八孙，五代同堂。勤俭持家，因子孙众多，读书放学时间不一，她采用\"分碟法…",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0183",
    "name": "廖先告",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "族人世代以农为主业，以挑鱼苗为副业。至晚清时期，廖先治家族以经商为业，廖先告家族以造船为业。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0185",
    "name": "廖大麟",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "fatherId": "ref_XJ-LIAO-0184",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0186",
    "name": "廖海木",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0187",
    "name": "廖海平",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0188",
    "name": "廖振合",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0189",
    "name": "廖令芝",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0190",
    "name": "廖振池",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0191",
    "name": "廖振权",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0192",
    "name": "廖源贤",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0193",
    "name": "廖双舟",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁...；人口篇补充：第一批：1953年10月移户口迁海南有32人：刘世升、刘桂炎、刘森炎、刘森发、刘森桂、刘凤莲、刘世润、刘钧岩、刘世培、刘世让、刘清祥、刘应喜、刘维胜、刘胡进、刘丽梅、刘芷森、刘教泉、刘裕章、刘德林、刘德熙、刘顺喜、刘裕生、刘松溪、刘镇芷、刘德真、廖锡林、廖振溪、廖双桂、刘蕏华、廖双舟、刘惠波、廖四妹。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0194",
    "name": "廖耀城",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁...；人口篇补充：第三批：1970年9月移户口迁海南有41人：刘裕成、刘德喜、刘岳俊、刘顺成、刘裕明、刘裕民、刘裕宁、刘炳合、康舟坚、廖耀加、廖振松、刘荣辉、林素茂、廖御霞、刘裕丰、刘裕水、廖耀进、刘玉音、刘镇华、刘镇坤、刘裕炎、刘镇权、刘宗波、廖碧卿、刘成亮、刘锦湖、刘世锐、刘裕发、刘秀珍、刘昆明、廖耀城、刘德南、刘德任、刘巧花、刘瑞兰、刘再传、刘瑞浩、廖令奕、康巧习、刘绍荣、刘裕声。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0195",
    "name": "廖耀加",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁...；人口篇补充：第三批：1970年9月移户口迁海南有41人：刘裕成、刘德喜、刘岳俊、刘顺成、刘裕明、刘裕民、刘裕宁、刘炳合、康舟坚、廖耀加、廖振松、刘荣辉、林素茂、廖御霞、刘裕丰、刘裕水、廖耀进、刘玉音、刘镇华、刘镇坤、刘裕炎、刘镇权、刘宗波、廖碧卿、刘成亮、刘锦湖、刘世锐、刘裕发、刘秀珍、刘昆明、廖耀城、刘德南、刘德任、刘巧花、刘瑞兰、刘再传、刘瑞浩、廖令奕、康巧习、刘绍荣、刘裕声。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0196",
    "name": "廖炎潮",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0197",
    "name": "廖大松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0198",
    "name": "廖源通",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0199",
    "name": "廖耀锦",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0200",
    "name": "廖双强",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0201",
    "name": "廖海茂",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0202",
    "name": "廖源贞",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0203",
    "name": "廖映庭",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0204",
    "name": "廖海松",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0205",
    "name": "廖海藩",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0206",
    "name": "廖振杰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0207",
    "name": "廖十一",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0208",
    "name": "廖十三",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-LIAO-0209",
    "name": "廖振垂",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "迁徙概况：廖先勤于清光绪年间迁樟林，至其子廖大麟于民国初年返乡。迁汕头：廖海木、廖海平、廖振合、廖令芝（后落籍惠来）、廖振池、廖振权等；迁澄海：廖源贤；迁海南：廖双舟、廖耀城、廖耀加；侨居泰国：廖炎潮、廖大松、廖源通、廖耀锦、廖双强、廖海茂、廖源贞、廖映庭等；侨居新加坡：廖海松、廖海藩、廖振杰；侨居马来西亚：廖十一、廖十三、廖振垂。",
    "clan": "廖氏",
    "sourceTitle": "第三节 草美乡",
    "sourceFile": "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第二章 廖氏/第三节 草美乡 c8f2080e7d30823aa8b381959f82fbef.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1004",
    "name": "陈翔",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-CHEN-1005"
    ],
    "description": "东汉时，陈翔仕汉任御史中丞相，居于颍川。其子陈寔，汉桓帝时任太丘长。",
    "clan": "陈氏",
    "sourceTitle": "第一节 下津陈氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1005",
    "name": "陈寔",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "其子陈寔，汉桓帝时任太丘长。南北朝时……追封陈寔为颍川侯，立颍川郡望，奉陈寔为颍川陈氏始祖。",
    "clan": "陈氏",
    "sourceTitle": "第一节 下津陈氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html",
    "fatherId": "ref_XJ-CHEN-1004",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1009",
    "name": "陈夫则",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "唐建中二年（781），陈夫则、陈夷锡致仕，南院派举族三百四十余户从漳州迁嘉禾屿（今厦门）之南。",
    "clan": "陈氏",
    "sourceTitle": "第一节 下津陈氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1010",
    "name": "陈夷锡",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "唐建中二年（781），陈夫则、陈夷锡致仕，南院派举族三百四十余户从漳州迁嘉禾屿（今厦门）之南。",
    "clan": "陈氏",
    "sourceTitle": "第一节 下津陈氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第一节 下津陈氏源流纪略 fd92080e7d3082e1b21e01b80e76353e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1012",
    "name": "陈存叟",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "g_陈莲峰_第二节_陈厝"
    ],
    "description": "陈厝一世祖；陈政21代裔孙：陈厝一世祖陈存叟祖籍漳州龙溪县，系陈政之21代裔孙。公于宋嘉定七年（1214）登甲戌科进士……1243年卒葬海阳归仁都登塘盘龙埔。；陈存叟：讳恪，字子严，号存叟（1184—1243），漳州龙溪人。宋嘉定七年甲戌年（1214）正奏进士，任宋朝奉大夫，宝谟阁待制，兼修国史。在职忠心秉国，御赐玉温金链，以表其忠。年老致仕云游入潮，后隐居鮀浦江东。卒葬于归仁都，登塘盘龙埔。1984年移葬庵埠霞露官厅园地，奉为东津陈氏一世祖。",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "deathYear": 1243,
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-TIAN-1001",
    "name": "田氏（陈莲峰配）",
    "gender": "女",
    "spouseIds": [
      "g_陈莲峰_第二节_陈厝"
    ],
    "childrenIds": [],
    "description": "公娶田、许、林三氏，生三子，长子陈桂轩……次子陈桂林……三子陈桂山。",
    "clan": "田氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-XU-1001",
    "name": "许氏（陈莲峰配）",
    "gender": "女",
    "spouseIds": [
      "g_陈莲峰_第二节_陈厝"
    ],
    "childrenIds": [],
    "description": "公娶田、许、林三氏，生三子，长子陈桂轩……次子陈桂林……三子陈桂山。",
    "clan": "许氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-LIN-1001",
    "name": "林氏（陈莲峰配）",
    "gender": "女",
    "spouseIds": [
      "g_陈莲峰_第二节_陈厝"
    ],
    "childrenIds": [],
    "description": "公娶田、许、林三氏，生三子，长子陈桂轩……次子陈桂林……三子陈桂山。",
    "clan": "林氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1017",
    "name": "陈桂轩",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "长子陈桂轩守祖居；次子陈桂林迁龙美（今属汕头）裔衍庵埠霞露；三子陈桂山迁饶平火寨。；陈桂轩：讳与志，蓬峰公长子（1284–1312）。守陈厝祖居，因子常斋贵，元勋授奎章阁引礼舍人，诰赠太常寺博士。",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "fatherId": "g_陈莲峰_第二节_陈厝",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1018",
    "name": "陈桂林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "长子陈桂轩守祖居；次子陈桂林迁龙美（今属汕头）裔衍庵埠霞露；三子陈桂山迁饶平火寨。",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "fatherId": "g_陈莲峰_第二节_陈厝",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1019",
    "name": "陈桂山",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "长子陈桂轩守祖居；次子陈桂林迁龙美（今属汕头）裔衍庵埠霞露；三子陈桂山迁饶平火寨。",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "fatherId": "g_陈莲峰_第二节_陈厝",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1020",
    "name": "陈泽华",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：陈泽华、陈番新、陈再强、陈建平、陈建溪）",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1021",
    "name": "陈番新",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：陈泽华、陈番新、陈再强、陈建平、陈建溪）",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1022",
    "name": "陈再强",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：陈泽华、陈番新、陈再强、陈建平、陈建溪）",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1023",
    "name": "陈建平",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：陈泽华、陈番新、陈再强、陈建平、陈建溪）；陈建平：1957年生，1975年高中毕业于意溪中学。1976年应征入伍在中国人民解放军89211部队后勤部汽车营三连服役，1978年荣记\"三等功\"被评为\"学习雷锋积极分子\"，1979年任副班长。1980年3月加入中国共产党。1981年3月至2017年8月，经潮州市民政局安置到潮州市工商行政管理局工作，期间1992年8月在潮州市经考试和考核合格，被录用为国家干部。1…",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-CHEN-1024",
    "name": "陈建溪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：陈泽华、陈番新、陈再强、陈建平、陈建溪）",
    "clan": "陈氏",
    "sourceTitle": "第二节 陈厝",
    "sourceFile": "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第三章 陈氏/第二节 陈厝 7c52080e7d3082a99b4d815b6d56c54e.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0001",
    "name": "康厝林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "唐光启元年（885），康厝林随王潮兄弟由河南固始入闽平定福建，战后定居于龙溪康厝林（以开基祖名字命地名）……龙溪康氏裔衍下津。",
    "clan": "康氏",
    "sourceTitle": "第一节 下津康氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第一节 下津康氏源流纪略 5ba2080e7d3083d2a3160144bd8f7f1a.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第一节 下津康氏源流纪略 5ba2080e7d3083d2a3160144bd8f7f1a.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0003",
    "name": "康木芝",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居南洋：康木芝、康木顺、康新荣、康舟仁",
    "clan": "康氏",
    "sourceTitle": "第二节 康厝",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0004",
    "name": "康木顺",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居南洋：康木芝、康木顺、康新荣、康舟仁",
    "clan": "康氏",
    "sourceTitle": "第二节 康厝",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0005",
    "name": "康新荣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居南洋：康木芝、康木顺、康新荣、康舟仁",
    "clan": "康氏",
    "sourceTitle": "第二节 康厝",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0006",
    "name": "康舟仁",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "侨居南洋：康木芝、康木顺、康新荣、康舟仁",
    "clan": "康氏",
    "sourceTitle": "第二节 康厝",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0007",
    "name": "康舟丰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1976年康厝始置独立生产队，即下津大队第六生产队，康舟丰任队长。",
    "clan": "康氏",
    "sourceTitle": "第二节 康厝",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0008",
    "name": "康振明",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "继之，康振明任队长，1989年，属下津村第4村民小组。；人口篇补充：1959年1月，康国龙、康忠礼、康振明、廖振强、刘春祥、刘福湘、刘裕生、刘德进、刘碧如、刘裕猷、刘世超、刘世真、刘来花、刘细妹、刘丽英、刘碧云、刘淡金、刘炳钦、刘碧娥、刘美真、廖振钿、廖丽娇、廖佩卿、管应杰、赖森泉、张清良、张木炎、张秋吟、张天有、柯锡镇、钟光亮、黄松就、黄林强调往平远石正炼钢铁。",
    "clan": "康氏",
    "sourceTitle": "第二节 康厝",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第二节 康厝 7d22080e7d3083029e48016b00b4b581.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0010",
    "name": "康永万",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康永万、康永才、康永年三兄弟为一大户。康永万约于光绪三十一年（1905），由杜猴寨率先迁入盐墩后……康永才到泰国当拳师，康永年出山边寨黄家。；自清光绪三十一年（1905），康永万最先迁走，至民国十七年（1928），李甘草木最后撤走散寨。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
      "第二篇 先祖创乡/第十一章 杜猴寨/第一节 杜猴寨概况 3962080e7d3082a38166016dc36145c3.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0011",
    "name": "康永才",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康永万、康永才、康永年三兄弟为一大户。康永万约于光绪三十一年（1905），由杜猴寨率先迁入盐墩后……康永才到泰国当拳师，康永年出山边寨黄家。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0012",
    "name": "康永年",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康永万、康永才、康永年三兄弟为一大户。康永万约于光绪三十一年（1905），由杜猴寨率先迁入盐墩后……康永才到泰国当拳师，康永年出山边寨黄家。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0013",
    "name": "康国龙",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "其时，康国龙的父亲才两岁；人口篇补充：1959年1月，康国龙、康忠礼、康振明、廖振强、刘春祥、刘福湘、刘裕生、刘德进、刘碧如、刘裕猷、刘世超、刘世真、刘来花、刘细妹、刘丽英、刘碧云、刘淡金、刘炳钦、刘碧娥、刘美真、廖振钿、廖丽娇、廖佩卿、管应杰、赖森泉、张清良、张木炎、张秋吟、张天有、柯锡镇、钟光亮、黄松就、黄林强调往平远石正炼钢铁。；下津乡康国龙、吴素贞、廖振波、廖淑兰、吴淡霞、刘德来、康得名等优秀学员被吸收为共产党员。……康国龙任书记。；康国龙：1950年任东津乡一村农会主席，参加土改工作，派往厦寺学习并加入中共党员。1952年10月，选任中共下津乡党支部第一任书记兼下津乡农会主席。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
      "第六篇 政治/第二章 中共下津党组织 2712080e7d30835ca08601b2a9b918a8.html",
      "第六篇 政治/第四章 下津群团组织 e9f2080e7d30835c9f2c011411dbf094.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html",
      "第四篇 人口/第三章 人口迁播 4772080e7d3082bea98e8176554cb5ce.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0016",
    "name": "康才香",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康大成为一大户，生两子，长子康才林，次子康才香。康才香约于民国初年，由杜猴寨迁盐墩后定居……",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "fatherId": "g_康大成_第三节_杜猴寨康氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0017",
    "name": "康忠来",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康才林约于清宣统年间（1909—1911），由杜猴寨迁入盐墩后开居，现（2019）传五世，分4户，有22人。（其中康忠来一户在广州，康忠炎一户在梅州，退休后返潮州城内定居）。；康忠来：1938年生，青年时期应征入伍，退伍后分配海运工作，累职外轮轮科副科长。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0018",
    "name": "康忠炎",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "康才林约于清宣统年间（1909—1911），由杜猴寨迁入盐墩后开居，现（2019）传五世，分4户，有22人。（其中康忠来一户在广州，康忠炎一户在梅州，退休后返潮州城内定居）。；康忠炎：1945年生，1964年应征入伍，1969年退伍分配梅县煤矿工作，累职梅州矿务局财务科长。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0020",
    "name": "康忠林",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：康忠林、康舟文、康忠进、康忠楷、康忠义）",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0021",
    "name": "康舟文",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：康忠林、康舟文、康忠进、康忠楷、康忠义）；（提供资料：刘潮森、康舟文、李泽权、郭得庆、康忠进）；康舟文：曾任下津大队治安主任，村委委员。",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0022",
    "name": "康忠进",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：康忠林、康舟文、康忠进、康忠楷、康忠义）；（提供资料：刘潮森、康舟文、李泽权、郭得庆、康忠进）",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0023",
    "name": "康忠楷",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：康忠林、康舟文、康忠进、康忠楷、康忠义）",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "ref_XJ-KANG-0024",
    "name": "康忠义",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：康忠林、康舟文、康忠进、康忠楷、康忠义）",
    "clan": "康氏",
    "sourceTitle": "第三节 杜猴寨康氏",
    "sourceFile": "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第四章 康氏/第三节 杜猴寨康氏 68e2080e7d3083be80ec8161543b0a46.html"
    ]
  },
  {
    "id": "ref_XJ-HONG-0005",
    "name": "共普",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "其子共普于汉灵帝时（168—188）任从官。宦官曹节等与朱瑀矫诏杀太傅陈蕃和大将军窦武，共普怕祸及于己，隐于敦煌。以祖有水德，在共字左旁加水，改称洪姓。其后蔚为敦煌望族，以敦煌为郡望，奉共普为敦煌洪氏一世祖。",
    "clan": "洪氏",
    "sourceTitle": "第一节 下津洪氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第五章 洪氏/第一节 下津洪氏源流纪略 a9c2080e7d3082f69090816be43e8cfa.html",
    "fatherId": "manual_共勋",
    "sourceFiles": [
      "第二篇 先祖创乡/第五章 洪氏/第一节 下津洪氏源流纪略 a9c2080e7d3082f69090816be43e8cfa.html"
    ]
  },
  {
    "id": "ref_XJ-HONG-0006",
    "name": "洪天赐",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "三十五世 洪天赐 世居晋江大御巷，公于宋宝庆二年（1226）登壬会龙榜进士，授广州司法参军，继调任潮州司理参军。公在潮州任上时，家乡遭受盗贼流劫，房亲接踵迁徙入潮，择地开基。",
    "clan": "洪氏",
    "sourceTitle": "第一节 下津洪氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第五章 洪氏/第一节 下津洪氏源流纪略 a9c2080e7d3082f69090816be43e8cfa.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第五章 洪氏/第一节 下津洪氏源流纪略 a9c2080e7d3082f69090816be43e8cfa.html"
    ]
  },
  {
    "id": "ref_XJ-HONG-0008",
    "name": "洪木贞",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "manual_洪金汉",
      "manual_洪汉清"
    ],
    "description": "1940年10月，驻笔架山日军放火烧塌公厅及房屋，仅存洪木贞一户守居。公生金汉、汉清二子。",
    "clan": "洪氏",
    "sourceTitle": "第二节 洪厝",
    "sourceFile": "第二篇 先祖创乡/第五章 洪氏/第二节 洪厝 05b2080e7d3083618408814bc506a6ba.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第五章 洪氏/第二节 洪厝 05b2080e7d3083618408814bc506a6ba.html"
    ]
  },
  {
    "id": "ref_XJ-PAN-1008",
    "name": "潘明溪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "注：铺尾采风由本村潘明溪引路。",
    "clan": "潘氏",
    "sourceTitle": "第二节 潘厝",
    "sourceFile": "第二篇 先祖创乡/第六章 潘氏/第二节 潘厝 8c62080e7d3082689c3001416fe1a0f7.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第六章 潘氏/第二节 潘厝 8c62080e7d3082689c3001416fe1a0f7.html"
    ]
  },
  {
    "id": "ref_XJ-HONG-0014",
    "name": "洪桐龙",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（根据《红砂乡志》及洪桐芝、洪桐龙提供资料综合整理。）",
    "clan": "洪氏",
    "sourceTitle": "第二节 洪厝",
    "sourceFile": "第二篇 先祖创乡/第五章 洪氏/第二节 洪厝 05b2080e7d3083618408814bc506a6ba.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第五章 洪氏/第二节 洪厝 05b2080e7d3083618408814bc506a6ba.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0010",
    "name": "脚桶黄开基祖（推定黄良士）",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "脚桶黄公厅立祖讳良士为厅名，由此可推：一、黄良士是开基祖。",
    "clan": "黄氏",
    "sourceTitle": "第二节 脚桶黄",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0011",
    "name": "黄良丰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "明代沙坝黄孝子名曰黄良丰，倘若黄良士与黄良丰属同辈份、同时代的人物，那么，脚桶黄创乡于明代。",
    "clan": "黄氏",
    "sourceTitle": "第二节 脚桶黄",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0012",
    "name": "黄永",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "民国元年（1912），由旅泰侨亲黄永、黄世春等主持，集资重建家园。",
    "clan": "黄氏",
    "sourceTitle": "第二节 脚桶黄",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0013",
    "name": "黄世春",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "民国元年（1912），由旅泰侨亲黄永、黄世春等主持，集资重建家园。",
    "clan": "黄氏",
    "sourceTitle": "第二节 脚桶黄",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0014",
    "name": "黄福泰",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1988年，由旅泰侨亲黄福泰、黄福英、黄福朝向有关部门申请落实侨房，按政策规定出资赎回产权。1989年重修公厅，置龛祭祖。",
    "clan": "黄氏",
    "sourceTitle": "第二节 脚桶黄",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0015",
    "name": "黄福英",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1988年，由旅泰侨亲黄福泰、黄福英、黄福朝向有关部门申请落实侨房，按政策规定出资赎回产权。1989年重修公厅，置龛祭祖。；捐资芳名录：黄福英先生 壹仟伍佰。",
    "clan": "黄氏",
    "sourceTitle": "第二节 脚桶黄",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0016",
    "name": "黄福朝",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1988年，由旅泰侨亲黄福泰、黄福英、黄福朝向有关部门申请落实侨房，按政策规定出资赎回产权。1989年重修公厅，置龛祭祖。；捐资芳名录：黄福朝先生、黄蔡静娟女士 叁仟。",
    "clan": "黄氏",
    "sourceTitle": "第二节 脚桶黄",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0017",
    "name": "黄民生",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（根据黄民生提供资料整理。）",
    "clan": "黄氏",
    "sourceTitle": "第二节 脚桶黄",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第二节 脚桶黄 74f2080e7d30833f9e7581dfb87135dc.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0019",
    "name": "山边寨黄氏洗马桥支",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1967年，下津大队决定并乡，6户安置在洗马桥寨居住，2户安置在海鹅头村居住。山边寨黄氏现传31户，123人，其中，居于洗马桥25户，98人，居于海鹅头6户，25人。",
    "clan": "黄氏",
    "sourceTitle": "第三节 山边寨",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第三节 山边寨 b512080e7d3083029b3d81450eb431d2.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第三节 山边寨 b512080e7d3083029b3d81450eb431d2.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0020",
    "name": "山边寨黄氏海鹅头支",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "1967年，下津大队决定并乡，6户安置在洗马桥寨居住，2户安置在海鹅头村居住。山边寨黄氏现传31户，123人，其中，居于洗马桥25户，98人，居于海鹅头6户，25人。",
    "clan": "黄氏",
    "sourceTitle": "第三节 山边寨",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第三节 山边寨 b512080e7d3083029b3d81450eb431d2.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第三节 山边寨 b512080e7d3083029b3d81450eb431d2.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0022",
    "name": "黄炳森",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "其子黄炳森，以经营蔬菜为生。1952年，全家落籍下津。",
    "clan": "黄氏",
    "sourceTitle": "第四节 绞队井黄氏",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第四节 绞队井黄氏 dfd2080e7d30838a90e48196ea758dc6.html",
    "fatherId": "g_黄义成_第四节_绞队井黄氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第四节 绞队井黄氏 dfd2080e7d30838a90e48196ea758dc6.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-0023",
    "name": "黄芝孝",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：黄芝孝）",
    "clan": "黄氏",
    "sourceTitle": "第四节 绞队井黄氏",
    "sourceFile": "第二篇 先祖创乡/第七章 黄氏/第四节 绞队井黄氏 dfd2080e7d30838a90e48196ea758dc6.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第七章 黄氏/第四节 绞队井黄氏 dfd2080e7d30838a90e48196ea758dc6.html"
    ]
  },
  {
    "id": "ref_XJ-LIN-3003",
    "name": "林锦炎",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "至2019年，有31户，136人。其中包括林锦炎于1952年，由潮州城内迁入洗马桥村落籍所传的户数和人口。",
    "clan": "林氏",
    "sourceTitle": "第二节 林氏",
    "sourceFile": "第二篇 先祖创乡/第八章 洗马桥/第二节 林氏 6922080e7d30825da1c9814c94ff3da2.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第八章 洗马桥/第二节 林氏 6922080e7d30825da1c9814c94ff3da2.html"
    ]
  },
  {
    "id": "ref_XJ-HUANG-3001",
    "name": "黄氏（林绍章之母）",
    "gender": "女",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-LIN-3005"
    ],
    "description": "林绍章于1959年（其时八岁），随母黄氏，由福建武平老城，到潮州寻亲未遂，经人牵引，投友于海鹅头自然村，落籍下津村。",
    "clan": "黄氏",
    "sourceTitle": "第二节 林氏",
    "sourceFile": "第二篇 先祖创乡/第八章 洗马桥/第二节 林氏 6922080e7d30825da1c9814c94ff3da2.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第八章 洗马桥/第二节 林氏 6922080e7d30825da1c9814c94ff3da2.html"
    ]
  },
  {
    "id": "ref_XJ-LIN-3005",
    "name": "林绍章",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "始祖林绍章于1959年（其时八岁），随母黄氏，由福建武平老城，到潮州寻亲未遂，经人牵引，投友于海鹅头自然村，落籍下津村。至2019年3月，已传三世，一户，有8人。",
    "clan": "林氏",
    "sourceTitle": "第二节 林氏",
    "sourceFile": "第二篇 先祖创乡/第八章 洗马桥/第二节 林氏 6922080e7d30825da1c9814c94ff3da2.html",
    "birthYear": 1951,
    "motherId": "ref_XJ-HUANG-3001",
    "sourceFiles": [
      "第二篇 先祖创乡/第八章 洗马桥/第二节 林氏 6922080e7d30825da1c9814c94ff3da2.html"
    ]
  },
  {
    "id": "ref_XJ-LIU-4001",
    "name": "刘伯殿",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "桃坑21世：海鹅头原地名称栖凤，是明代桃坑刘氏21世刘伯殿卜择栖凤开基。尔后嗣裔迁洋东刘定居，奉伯殿公为始祖。",
    "clan": "刘氏",
    "sourceTitle": "第一节 海鹅头乡概况",
    "sourceFile": "第二篇 先祖创乡/第九章 海鹅头乡/第一节 海鹅头乡概况 12f2080e7d308304aa0281ae2b7da3d4.html",
    "generation": 21,
    "generationSystem": "桃坑",
    "generationName": "伯",
    "generationEvidence": "参考表明确记载",
    "sourceFiles": [
      "第二篇 先祖创乡/第九章 海鹅头乡/第一节 海鹅头乡概况 12f2080e7d308304aa0281ae2b7da3d4.html"
    ]
  },
  {
    "id": "ref_XJ-ZHANG-4010",
    "name": "张启盛",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "张肇基第三子：其第三子张启盛，于明洪武年间，由乌石徙浮滨咸美开基。",
    "clan": "张氏",
    "sourceTitle": "第二节 张氏",
    "sourceFile": "第二篇 先祖创乡/第九章 海鹅头乡/第二节 张氏 8da2080e7d30821599ea810c2f752fdf.html",
    "fatherId": "manual_张肇基",
    "sourceFiles": [
      "第二篇 先祖创乡/第九章 海鹅头乡/第二节 张氏 8da2080e7d30821599ea810c2f752fdf.html"
    ]
  },
  {
    "id": "ref_XJ-WU-4001",
    "name": "吴氏（钟炳元妻）",
    "gender": "女",
    "spouseIds": [
      "ref_XJ-ZHONG-4003"
    ],
    "childrenIds": [],
    "description": "其子钟炳元，娶妻枫溪吴氏，其家乡以制陶瓷为业。",
    "clan": "吴氏",
    "sourceTitle": "第三节 钟氏",
    "sourceFile": "第二篇 先祖创乡/第九章 海鹅头乡/第三节 钟氏 c192080e7d3082c79171010912b5da77.html",
    "aliases": [
      "枫溪吴"
    ],
    "sourceFiles": [
      "第二篇 先祖创乡/第九章 海鹅头乡/第三节 钟氏 c192080e7d3082c79171010912b5da77.html"
    ]
  },
  {
    "id": "ref_XJ-ZHONG-4003",
    "name": "钟炳元",
    "gender": "男",
    "spouseIds": [
      "ref_XJ-WU-4001"
    ],
    "childrenIds": [],
    "description": "其子钟炳元，娶妻枫溪吴氏……钟炳元在径后挖田头粪池时，发现瓷土。于是，在响水利用流水落差动力，兴建水碓加工瓷泥，销往岳父家乡的瓷厂。1952年，钟炳元举家迁海鹅头村落籍。",
    "clan": "钟氏",
    "sourceTitle": "第三节 钟氏",
    "sourceFile": "第二篇 先祖创乡/第九章 海鹅头乡/第三节 钟氏 c192080e7d3082c79171010912b5da77.html",
    "fatherId": "g_钟锦麟_第三节_钟氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第九章 海鹅头乡/第三节 钟氏 c192080e7d3082c79171010912b5da77.html"
    ]
  },
  {
    "id": "ref_XJ-KE-5001",
    "name": "柯卢",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "柯相有个裔孙名叫柯卢，传至春秋时，他的后代以祖字“柯”为姓，称柯氏。",
    "clan": "柯氏",
    "sourceTitle": "第二节 柯氏",
    "sourceFile": "第二篇 先祖创乡/第十章 沙瓯乡/第二节 柯氏 8472080e7d3083eeadf901fd885cb2e3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十章 沙瓯乡/第二节 柯氏 8472080e7d3083eeadf901fd885cb2e3.html"
    ]
  },
  {
    "id": "ref_XJ-ZL-5001",
    "name": "海鹅头老人组",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：海鹅头老人组）",
    "clan": "海氏",
    "sourceTitle": "第二节 柯氏",
    "sourceFile": "第二篇 先祖创乡/第十章 沙瓯乡/第二节 柯氏 8472080e7d3083eeadf901fd885cb2e3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十章 沙瓯乡/第二节 柯氏 8472080e7d3083eeadf901fd885cb2e3.html"
    ]
  },
  {
    "id": "ref_LI0002",
    "name": "理微",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_LI0003"
    ],
    "description": "至商末，大臣理微，因直谏纣王而被杀害。他的儿子理利贞，为避追杀……",
    "clan": "理/李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_LI0003",
    "name": "李利贞",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "他的儿子理利贞，为避追杀……为了感谢李子活命之恩，就将“理”字改为“李”字，称李氏，李利贞是李氏的肇姓始祖。",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "fatherId": "ref_LI0002",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_LI0005",
    "name": "李老大（甘草木）",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_LI0006",
      "ref_LI0007",
      "ref_LI0008"
    ],
    "description": "散寨时，李氏仅存李老大（李得荣之父），以卖甘草货为生，时人称之“甘草木”、李福木、李老三3户。他们于民国十七年由杜猴寨迁陈厝租屋居住。；甘草木生三子，长子李得荣……次子李得添及三子李得和……",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_LI0006",
    "name": "李得荣",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "甘草木生三子，长子李得荣，散寨时年仅12岁，次子李得添及三子李得和，兄弟俩先到澄海谋生，后辗转迁台湾发展。；李得和于1991年返乡省亲，适逢兴建下津小学，热心捐资助建，留名梓里。",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "fatherId": "ref_LI0005",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_LI0007",
    "name": "李得添",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "甘草木生三子，长子李得荣，散寨时年仅12岁，次子李得添及三子李得和，兄弟俩先到澄海谋生，后辗转迁台湾发展。；李得和于1991年返乡省亲，适逢兴建下津小学，热心捐资助建，留名梓里。",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "fatherId": "ref_LI0005",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_LI0008",
    "name": "李得和",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "甘草木生三子，长子李得荣，散寨时年仅12岁，次子李得添及三子李得和，兄弟俩先到澄海谋生，后辗转迁台湾发展。；李得和于1991年返乡省亲，适逢兴建下津小学，热心捐资助建，留名梓里。；捐资芳名录：李得和先生 壹仟。",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "fatherId": "ref_LI0005",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
      "第九篇 教育/第七章 捐资兴学 8f02080e7d30836ca3da014ecbe26d06.html"
    ]
  },
  {
    "id": "ref_LI0010",
    "name": "李得茂",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "长子李得茂（阿软）",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "fatherId": "g_李福木_第二节_李氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_LI0011",
    "name": "李得新（冯发新）",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "次子李得新送给松口冯家，更名冯发新",
    "clan": "李/冯氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "fatherId": "g_李福木_第二节_李氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_LI0012",
    "name": "李亚积",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "三子李亚积出武平",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "fatherId": "g_李福木_第二节_李氏",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_LI0015",
    "name": "李老三（名失传）",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "李老三（名失传），曾婚，因早丧，妻改适，无嗣绝户。",
    "clan": "李氏",
    "sourceTitle": "第二节 李氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第二节 李氏 c762080e7d3083699ad9817abdb80463.html"
    ]
  },
  {
    "id": "ref_GUO0004",
    "name": "郭春溪",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "解放初期，郭春溪迁回河内莲上村。",
    "clan": "郭氏",
    "sourceTitle": "第三节 郭氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html"
    ]
  },
  {
    "id": "ref_GUO0005",
    "name": "郭春木",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_GUO0006"
    ],
    "description": "郭春木迁三房，其子孙随母姓。仅长子应征入伍时以郭得庆名字登记……；郭春木：曾任东津瓷矿场党支部书记。",
    "clan": "郭氏",
    "sourceTitle": "第三节 郭氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_GUO0006",
    "name": "郭得庆",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "仅长子应征入伍时以郭得庆名字登记，退伍后在下津开诊所，曾用“刘郭生”为诊所名号。；（提供资料：刘潮森、康舟文、李泽权、郭得庆、康忠进）",
    "clan": "郭氏",
    "sourceTitle": "第三节 郭氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
    "fatherId": "ref_GUO0005",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html"
    ]
  },
  {
    "id": "ref_LIU0001",
    "name": "刘潮森",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：刘潮森、康舟文、李泽权、郭得庆、康忠进）；继之，刘春仁组建建英社、刘金存组建群益社、刘丽英组建新光社、刘潮森组建第五农业生产合作社。；东津乡第一任民兵队长刘利成、一村民兵队长刘潮森，二村民兵队长刘贞汉。；刘潮森：中共下津村党支部第二批吸收党员，与郭春木组建瓷土矿党支部，1955年组建第五农业生产合作社。公社化以后，曾任下津大队副大队长，分管经营管理。组建意溪公社瓷粉厂，任厂长。",
    "clan": "刘氏",
    "sourceTitle": "第三节 郭氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
      "第五篇 经济/第一章 体制沿革 1762080e7d308285b1ff019da4c35c5a.html",
      "第六篇 政治/第四章 下津群团组织 e9f2080e7d30835c9f2c011411dbf094.html",
      "第七篇 人物/第六章 现代人物 fd52080e7d308343be2a011f402c9d56.html"
    ]
  },
  {
    "id": "ref_LI0016",
    "name": "李泽权",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "（提供资料：刘潮森、康舟文、李泽权、郭得庆、康忠进）",
    "clan": "李氏",
    "sourceTitle": "第三节 郭氏",
    "sourceFile": "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十一章 杜猴寨/第三节 郭氏 4f52080e7d3082679c7681af0809e104.html"
    ]
  },
  {
    "id": "ref_FANG0010",
    "name": "方英俊",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "下津方氏始祖 方英俊 于民国十一年（1922），由仙庭乡迁居东津乡绞队井廖厝，以经营豉油为业。1952年举家落籍本村。",
    "clan": "方氏",
    "sourceTitle": "第一节 方氏",
    "sourceFile": "第二篇 先祖创乡/第十二章 落籍创祖/第一节 方氏 3272080e7d30832887e7016f9861d2d3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十二章 落籍创祖/第一节 方氏 3272080e7d30832887e7016f9861d2d3.html"
    ]
  },
  {
    "id": "ref_FANG0011",
    "name": "方绍远",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "据《仙庭乡谱志》和方绍远提供资料整理。",
    "clan": "方氏",
    "sourceTitle": "第一节 方氏",
    "sourceFile": "第二篇 先祖创乡/第十二章 落籍创祖/第一节 方氏 3272080e7d30832887e7016f9861d2d3.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十二章 落籍创祖/第一节 方氏 3272080e7d30832887e7016f9861d2d3.html"
    ]
  },
  {
    "id": "ref_ZENG0007",
    "name": "薛巧云",
    "gender": "女",
    "spouseIds": [
      "g_曾新汉_第三节_曾氏"
    ],
    "childrenIds": [],
    "description": "娶薛巧云为妻，落籍本村。",
    "clan": "薛氏",
    "sourceTitle": "第三节 曾氏",
    "sourceFile": "第二篇 先祖创乡/第十二章 落籍创祖/第三节 曾氏 4802080e7d30839db14e01f35088b14c.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第十二章 落籍创祖/第三节 曾氏 4802080e7d30839db14e01f35088b14c.html"
    ]
  },
  {
    "id": "manual_刘昉",
    "name": "刘昉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "来自族谱参考表的亲属关系补充，待校对详情。",
    "clan": "刘氏",
    "sourceTitle": "第二节 桃坑乡",
    "sourceFile": "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
    "fatherId": "ref_XJ-LIU-0180",
    "generation": 5,
    "generationSystem": "桃坑",
    "generationEvidence": "亲子关系推定",
    "sourceFiles": [
      "第二篇 先祖创乡/第一章 刘氏/第二节 桃坑乡 1d72080e7d3082dd82ab811bc7d7f235.html",
      "第七篇 人物/第一章 古代人物 cd72080e7d3083b6992b0154aab98074.html"
    ]
  },
  {
    "id": "manual_共勋",
    "name": "共勋",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-HONG-0005"
    ],
    "description": "来自族谱参考表的亲属关系补充，待校对详情。",
    "clan": "共氏",
    "sourceTitle": "第一节 下津洪氏源流纪略",
    "sourceFile": "第二篇 先祖创乡/第五章 洪氏/第一节 下津洪氏源流纪略 a9c2080e7d3082f69090816be43e8cfa.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第五章 洪氏/第一节 下津洪氏源流纪略 a9c2080e7d3082f69090816be43e8cfa.html"
    ]
  },
  {
    "id": "manual_洪金汉",
    "name": "洪金汉",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "来自族谱参考表的亲属关系补充，待校对详情。",
    "clan": "洪氏",
    "sourceTitle": "第二节 洪厝",
    "sourceFile": "第二篇 先祖创乡/第五章 洪氏/第二节 洪厝 05b2080e7d3083618408814bc506a6ba.html",
    "fatherId": "ref_XJ-HONG-0008",
    "sourceFiles": [
      "第二篇 先祖创乡/第五章 洪氏/第二节 洪厝 05b2080e7d3083618408814bc506a6ba.html"
    ]
  },
  {
    "id": "manual_洪汉清",
    "name": "洪汉清",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [],
    "description": "来自族谱参考表的亲属关系补充，待校对详情。",
    "clan": "洪氏",
    "sourceTitle": "第二节 洪厝",
    "sourceFile": "第二篇 先祖创乡/第五章 洪氏/第二节 洪厝 05b2080e7d3083618408814bc506a6ba.html",
    "fatherId": "ref_XJ-HONG-0008",
    "sourceFiles": [
      "第二篇 先祖创乡/第五章 洪氏/第二节 洪厝 05b2080e7d3083618408814bc506a6ba.html"
    ]
  },
  {
    "id": "manual_张肇基",
    "name": "张肇基",
    "gender": "男",
    "spouseIds": [],
    "childrenIds": [
      "ref_XJ-ZHANG-4010"
    ],
    "description": "来自族谱参考表的亲属关系补充，待校对详情。",
    "clan": "张氏",
    "sourceTitle": "第二节 张氏",
    "sourceFile": "第二篇 先祖创乡/第九章 海鹅头乡/第二节 张氏 8da2080e7d30821599ea810c2f752fdf.html",
    "sourceFiles": [
      "第二篇 先祖创乡/第九章 海鹅头乡/第二节 张氏 8da2080e7d30821599ea810c2f752fdf.html"
    ]
  }
];
