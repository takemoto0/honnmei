import {
  EnumerableProperty,
  type EnumerablePropertyProps,
} from "./EnumerableProperty";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

type Props = Pick<EnumerablePropertyProps, "count">;

export function FavoriteCount({ count }: Props) {
  return (
    <EnumerableProperty
      icon={<HandThumbUpIcon className="h-4 w-4 text-gray-400" />}
      count={count}
    />
  );
}
