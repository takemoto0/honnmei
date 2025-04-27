import { HandThumbUpIcon, CameraIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div>
      <div className="w-full p-4 flex gap-4">
        <div className="inline-block">
          <Card />
        </div>
        <div className="inline-block">
          <Card />
        </div>
      </div>
    </div>
  );
}

export function Card() {
  return (
    <div className="grid bg-white gap-4">
      {/* 写真 */}
      <div role={"row"} className="items-center bg-gray-100 font-bold">
        <div className="bg-blue-500 w-[250px] h-[300px] rounded-lg">写真</div>
      </div>
      {/* サマリ */}
      <div className="w-[250px] flex flex-col items-center gap-2">
        {/* ステータス */}
        <div role={"row"} className="flex items-center justify-center">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-sm font-bold">26歳 大阪</span>
        </div>
        <div role={"row"} className="flex justify-center gap-2">
          <div className="inline-flex">
            <HandThumbUpIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-bold">100</span>
          </div>
          <div className="inline-flex">
            <CameraIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-bold">5</span>
          </div>
        </div>
        {/* タグ */}
        <div className="flex flex-wrap">
          <div className="px-1 py-0.5 rounded-full border">
            <span className="text-xs text-gray-400">#ゲーーーーーーム</span>
          </div>
          <div className="px-1 py-0.5 rounded-full border">
            <span className="text-xs text-gray-400">#ゲーーーーーーーム</span>
          </div>
          <div className="px-1 py-0.5 rounded-full border">
            <span className="text-xs text-gray-400">#ゲーーーーーーーーム</span>
          </div>
        </div>
      </div>
    </div>
  );
}
