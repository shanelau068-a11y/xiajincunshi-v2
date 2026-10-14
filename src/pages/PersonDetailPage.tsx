import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getPersonById } from '../data/people';
import { PageHeader } from '../components/PageHeader';
import { SourceLinks } from '../components/SourceLinks';
export function PersonDetailPage() {
  const { id } = useParams();
  const person = getPersonById(id);
  return (
    <div className="page-shell max-w-4xl">
      <Link to="/people" className="quiet-link mb-6">
        <ArrowLeft size={16} />
        返回人物志
      </Link>
      {!person ? (
        <div className="empty-state">未找到人物资料</div>
      ) : (
        <article className="person-detail">
          <PageHeader eyebrow={person.category} title={person.name}>
            {person.years}
          </PageHeader>
          <p className="biography">{person.biography.split(/\n\n来源：/)[0]}</p>
          <h2>事迹摘录</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-brown/75">
            {person.achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <SourceLinks files={[person.sourceFile]} />
        </article>
      )}
    </div>
  );
}
