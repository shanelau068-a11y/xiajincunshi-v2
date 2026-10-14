import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { type TimelineEvent } from '../data/timeline';
import { SourceLinks } from './SourceLinks';
export function Timeline({ events }: { events: TimelineEvent[] }) {
  const [activeId, setActiveId] = useState<string | undefined>(events[0]?.id);
  return (
    <div>
      {events.map((event) => (
        <article className="timeline-item" key={event.id}>
          <div className="timeline-year">{event.year}</div>
          <div className="timeline-body">
            <button
              onClick={() => setActiveId(activeId === event.id ? undefined : event.id)}
              aria-expanded={activeId === event.id}
            >
              <div className="flex items-start gap-3">
                <h2 className="flex-1">{event.title}</h2>
                <ChevronDown size={17} className="mt-2 shrink-0" />
              </div>
              <small className="text-moss">{event.category}</small>
              <p>{event.summary}</p>
            </button>
            {activeId === event.id && (
              <div className="timeline-detail">
                <p>{event.detail}</p>
                <SourceLinks files={[event.sourceFile]} />
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
