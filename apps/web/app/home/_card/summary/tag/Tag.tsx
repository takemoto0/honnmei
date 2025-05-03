type TagProps = {
  name: string;
};

export function Tag({ name }: TagProps) {
  return (
    <div className="px-1 py-0.5 rounded-full border">
      <span className="text-xs text-gray-400">#{name}</span>
    </div>
  );
}
