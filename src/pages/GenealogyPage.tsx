import { GenealogyTree } from '../components/GenealogyTree';
import { PageHeader } from '../components/PageHeader';
import { genealogyPeople } from '../data/genealogy';
export function GenealogyPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="人物 · 支系 · 世代" title="下津族谱世系">
        族谱资料 {genealogyPeople.length} 位 · 原文与整理表记载
      </PageHeader>
      <GenealogyTree people={genealogyPeople} defaultFocusName="刘雄宣" />
    </div>
  );
}
