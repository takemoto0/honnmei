import { Gender } from "@prisma-generated/prisma-client";
import { client } from "@client";

export function serchUsers(gender: Gender) {
  return client.user.findMany({
    where: {
      Profile: { gender },
    },
    include: { Profile: true },
  });
}
