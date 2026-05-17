import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStatus(status: string) {
  const labels: Record<string, string> = {
    draft: 'Concept',
    preview: 'Gratis preview',
    billing_required: 'Betaling nodig',
    published: 'Gepubliceerd',
  };

  return labels[status] ?? status;
}
