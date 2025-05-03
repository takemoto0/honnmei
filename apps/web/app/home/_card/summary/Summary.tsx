import { PictureCount } from "./count/PictureCount";
import { FavoriteCount } from "./count/FavoriteCount";

export function Summary() {
  return (
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
        <FavoriteCount count={100} />
        <PictureCount count={5} />
      </div>
    </div>
  );
}
