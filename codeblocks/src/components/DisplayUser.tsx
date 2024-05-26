import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserById } from "../app/hooks/getUserById"; 

export default async function DisplayUser() {
  const userId = cookies().get("user_id")?.value;

  if (!userId) {
    redirect("/login");
  }

  const user = await getUserById(userId);

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      Hey, {user.username}!
    </div>
  );
}
