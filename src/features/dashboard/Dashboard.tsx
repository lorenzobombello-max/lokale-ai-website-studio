import { BarChart3, CreditCard, FolderKanban, Globe2 } from 'lucide-react';
import { demoProjects } from '../../data/projects';
import { formatStatus } from '../../lib/utils';

export function Dashboard() {
  const metrics = [
    { label: 'Projecten opgeslagen', value: '12', icon: FolderKanban },
    { label: 'Preview shares', value: '428', icon: BarChart3 },
    { label: 'Actieve domeinen', value: '7', icon: Globe2 },
    { label: 'MRR beheerd', value: '€413', icon: CreditCard },
  ];

  return (
    <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-soft backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">Dashboard</p>
          <h3 className="mt-2 text-3xl font-semibold text-ink">Projecten, abonnementen en domeinen centraal</h3>
        </div>
        <button className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">Nieuw AI project</button>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
            <metric.icon className="h-5 w-5 text-indigo-500" />
            <p className="mt-4 text-3xl font-semibold text-ink">{metric.value}</p>
            <p className="text-sm text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100">
        {demoProjects.map((project) => (
          <div key={project.id} className="grid gap-4 border-b border-slate-100 bg-white p-5 last:border-b-0 md:grid-cols-[1fr_auto_auto] md:items-center">
            <div>
              <p className="font-semibold text-ink">{project.name}</p>
              <p className="mt-1 text-sm text-slate-500">{project.domain ?? 'Domein nog niet gekoppeld'} · Laatst bijgewerkt {project.updatedAt}</p>
            </div>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">{formatStatus(project.status)}</span>
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink">Open editor</button>
          </div>
        ))}
      </div>
    </div>
  );
}
