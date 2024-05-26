import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await db.user.findMany({
      select: { username: true },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

export default handler;
