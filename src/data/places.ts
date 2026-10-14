export type Place = {
  id: string;
  name: string;
  type: '祠堂' | '学校' | '古井' | '桥梁' | '庙宇' | '老宅' | '农田';
  lng: number;
  lat: number;
  coordinateStatus?: '已定位' | '待校对';
  x: number;
  y: number;
  description: string;
};

export const places: Place[] = [
  {
    id: 'ancestral-hall',
    name: '下津祠堂',
    type: '祠堂',
    lng: 116.65,
    lat: 23.6667,
    coordinateStatus: '待校对',
    x: 48,
    y: 42,
    description: '宗族议事、祭祀与节庆活动的重要空间。当前经纬度为村域附近示例坐标，后续可按实地位置校准。',
  },
  {
    id: 'school',
    name: '村小旧址',
    type: '学校',
    lng: 116.6521,
    lat: 23.6682,
    coordinateStatus: '待校对',
    x: 66,
    y: 31,
    description: '承载几代村民求学记忆的旧校址。当前经纬度为示例定位，后续可替换为准确坐标。',
  },
  {
    id: 'well',
    name: '古井',
    type: '古井',
    lng: 116.6482,
    lat: 23.6653,
    coordinateStatus: '待校对',
    x: 36,
    y: 58,
    description: '旧时村民汲水之处，也是日常交往的节点。当前经纬度为示例定位，后续可替换为准确坐标。',
  },
  {
    id: 'bridge',
    name: '石桥',
    type: '桥梁',
    lng: 116.6511,
    lat: 23.6644,
    coordinateStatus: '待校对',
    x: 58,
    y: 67,
    description: '连接田畴与村巷的传统桥梁。当前经纬度为示例定位，后续可替换为准确坐标。',
  },
  {
    id: 'temple',
    name: '庙宇遗址',
    type: '庙宇',
    lng: 116.6471,
    lat: 23.6678,
    coordinateStatus: '待校对',
    x: 28,
    y: 34,
    description: '乡土信仰和民俗活动的历史地点。当前经纬度为示例定位，后续可替换为准确坐标。',
  },
  {
    id: 'old-house',
    name: '老宅群',
    type: '老宅',
    lng: 116.6494,
    lat: 23.6688,
    coordinateStatus: '待校对',
    x: 44,
    y: 24,
    description: '保留传统建筑格局的老屋片区。当前经纬度为示例定位，后续可替换为准确坐标。',
  },
  {
    id: 'fields',
    name: '南畈农田',
    type: '农田',
    lng: 116.653,
    lat: 23.6637,
    coordinateStatus: '待校对',
    x: 73,
    y: 72,
    description: '主要耕作区域，记录村庄农业生产记忆。当前经纬度为示例定位，后续可替换为准确坐标。',
  },
];
