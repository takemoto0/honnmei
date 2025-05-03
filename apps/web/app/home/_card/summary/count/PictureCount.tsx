import { CameraIcon } from "@heroicons/react/24/outline";
import {
  EnumerableProperty,
  type EnumerablePropertyProps,
} from "./EnumerableProperty";

type Props = Pick<EnumerablePropertyProps, "count">;

export function PictureCount({ count }: Props) {
  return (
    <EnumerableProperty
      icon={<CameraIcon className="h-4 w-4 text-gray-400" />}
      count={count}
    />
  );
}
