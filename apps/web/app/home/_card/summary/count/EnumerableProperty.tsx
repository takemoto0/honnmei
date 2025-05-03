export type EnumerablePropertyProps = {
  icon?: React.ReactNode;
  count: number;
};

export function EnumerableProperty({ icon, count }: EnumerablePropertyProps) {
  return (
    <div className="inline-flex items-center gap-0.5">
      {icon}
      <span className="text-xs text-gray-600">{count}</span>
    </div>
  );
}
