import { Breadcrumbs } from './Breadcrumbs';
import { AdBanner } from './AdBanner';

interface ToolWrapperProps {
  title: string;
  description: string;
  toolName: string;
  children: React.ReactNode;
}

export function ToolWrapper({ title, description, toolName, children }: ToolWrapperProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/#tools' },
          { label: toolName },
        ]}
      />

      <AdBanner slot="top" className="mb-8" />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{title}</h1>
        <p className="text-lg text-muted">{description}</p>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 sm:p-8">
        {children}
      </div>

      <AdBanner slot="bottom" className="mt-8" />
    </div>
  );
}
