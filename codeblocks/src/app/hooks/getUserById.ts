import { db } from '@/db';

export async function getUserById(userId: string) {
  return await db.user.findUnique({
    where: { id: parseInt(userId) },
    select: { username: true },
  });

  
}
console.log(getUserById);