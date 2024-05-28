import { db } from "@/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function BlockGrid() {
  const userId = cookies().get("user_id")?.value;
  if (!userId) {
    redirect("/login");
  }
  const blocks = await db.block.findMany({
    where: {
      userId: Number(userId),
    },
  });

  const blocksList = blocks.map((block) => (
    <Link
      key={block.id}
      href={`/blocks/${block.id}`}
      className="flex flex-col justify-between items-center p-2 border-2 rounded h-[400px]">
      <div className="">
        <div className="text-l font-bold">
          {block.title}
        </div>
        <div className="text-m">
          {block.content}
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Your Blocks</h1>
        <Link href="/blocks/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">{blocksList}</div>
    </div>
  );
}
