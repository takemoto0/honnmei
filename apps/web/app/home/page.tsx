import { Card } from "./_card/Card";

export default function Home() {
  return (
    <div>
      <div className="w-full p-4 flex gap-4">
        <div className="inline-block">
          <Card userId="123" />
        </div>
      </div>
    </div>
  );
}
