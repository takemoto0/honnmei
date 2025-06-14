import { client } from "@client";

export function getUserProfile(userId: string) {
  console.log("getUserProfile", userId);
  return client.user.findUnique({
    where: { id: userId },
    include: { Profile: true },
  });
}
