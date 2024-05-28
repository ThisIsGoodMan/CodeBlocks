import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { cookies } from 'next/headers';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getUserId = () => {
  const cookieStore = cookies();
  const userId = cookieStore.get("user_id")?.value || null;
  return userId;
};