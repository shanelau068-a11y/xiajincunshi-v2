import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
export function AboutPage() {
  const sections = [
    [
      '项目介绍',
      '下津村史数字馆汇集村史阅读、人物传略、大事记、族谱世系、照片和地点资料，让村庄的记忆得以保存和传承。',
    ],
    [
      '资料来源',
      '主要资料为《下津村史》电子版 HTML、原书扫描图片及族谱关系整理表。人物来自第七篇，大事记来自第十篇，相关条目附有原文入口。',
    ],
    [
      '校对原则',
      '原文记载、整理表记载和关系推定分别保留依据。不因同名合并人物，不凭姓名猜辈份；未记载的配偶和母系不补写为事实。资料中的矛盾和缺漏继续列为待核。',
    ],
    [
      '版权说明',
      '村史文本、照片及其他资料的权利归相关权利人所有。本馆用于资料整理、展示与文化传承。涉及授权、署名或更正，可联系资料整理者处理。',
    ],
    [
      '贡献方式',
      '欢迎提供准确的姓名、生卒年代、原书页码、族谱出处、照片说明及地点实测资料。更正记录应附来源和核对依据。',
    ],
  ];
  return (
    <div className="page-shell max-w-4xl">
      <PageHeader eyebrow="乡土记忆 · 共同守护" title="关于下津村史数字馆" />
      {sections.map(([title, body]) => (
        <section key={title} className="border-t border-brown/15 py-6">
          <h2 className="font-serif text-2xl font-bold text-brown">{title}</h2>
          <p className="mt-3 leading-8 text-brown/75">{body}</p>
        </section>
      ))}
      <section className="border-t border-brown/15 py-6">
        <h2 className="font-serif text-2xl font-bold text-brown">联系与资料整理</h2>
        <p className="mt-3 leading-8 text-brown/75">
          资料整理：<span className="text-base">ShaneLau</span>
        </p>
        <p className="text-sm text-brown/55">公开邮箱及其他联系方式暂未设置。</p>
      </section>
      <Link className="quiet-link" to="/sources">
        查看资料与校对记录
      </Link>
    </div>
  );
}
