const base =
  'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium'

export function Tag({ children, variant = 'default' }) {
  const styles =
    variant === 'green'
      ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
      : 'border-slate-200 bg-slate-50 text-slate-700'
  return <span className={`${base} ${styles}`}>{children}</span>
}
