import Link from 'next/link';
import { Tool } from '@/lib/tools';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative flex flex-col p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200"
    >
      {tool.popular && (
        <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
          Popular
        </span>
      )}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
          {tool.icon}
        </div>
        <div>
          <span className="text-xs text-muted font-medium">{tool.category}</span>
        </div>
      </div>
      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-muted leading-relaxed flex-1">{tool.description}</p>
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
        <span>Use tool</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </Link>
  );
}
