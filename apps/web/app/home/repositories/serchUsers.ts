import { serchUsers } from "database/user/profile/serchUsers";

export type User = {
  id: string;
  // 本名
  name: string;
};

export default async function fetchBookingSchedule(
  companyId: string
): Promise<User[]> {
  const [{ id, name }] = await serchUsers(companyId);
  return [
    {
      id,
      name,
    },
  ];
}
