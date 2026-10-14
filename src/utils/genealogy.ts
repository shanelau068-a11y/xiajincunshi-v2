import type { GenealogyPerson } from '../data/genealogy';

export const liuGenerationChars = '日旭伯延禧茂力贻远支光宗绍世德裕昆启鸿泽';

export function generationLabel(person?: GenealogyPerson) {
  if (person?.gender === '女') return '';
  if (!person?.generation) return '世系待考';
  const char = person.generationName;
  const note = person.generationEvidence === '亲子关系推定' ? '（推定）' : '';
  return `第${person.generation}世${char ? ` ${char}字辈` : ''}${note}`;
}

export function childrenOf(person: GenealogyPerson | undefined, people: GenealogyPerson[]) {
  if (!person) return [];
  // A spouse may have children from another marriage. Use recorded parent IDs.
  const children = people.filter(
    (child) => child.fatherId === person.id || child.motherId === person.id,
  );
  const order = new Map(person.childrenIds.map((id, index) => [id, index]));
  return children.sort((a, b) => (order.get(a.id) ?? Infinity) - (order.get(b.id) ?? Infinity));
}

export function siblingsOf(person: GenealogyPerson | undefined, people: GenealogyPerson[]) {
  if (!person) return [];
  return people.filter(
    (p) =>
      p.id !== person.id &&
      ((person.fatherId && p.fatherId === person.fatherId) ||
        (person.motherId && p.motherId === person.motherId)),
  );
}
