import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type Person } from '../data/people';
export function PersonCard({ person }: { person: Person }) {
  return (
    <Link to={`/people/${encodeURIComponent(person.id)}`} className="person-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="!mt-0 !text-xs text-brown/60">{person.category}</p>
          <h3>{person.name}</h3>
        </div>
        <ArrowUpRight size={18} className="text-moss" />
      </div>
      <small className="text-brown/55">{person.years}</small>
      <p>{person.summary}</p>
    </Link>
  );
}
