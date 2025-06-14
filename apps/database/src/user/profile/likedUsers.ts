import { client } from "@client";

export function likedUsers(userId: string) {
  return client.like.findMany({
    where: { likeTo: userId },
  });
}
