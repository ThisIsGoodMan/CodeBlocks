import { db } from "@/db";
import { redirect } from "next/navigation";

export default function BlockCreatePage() {
     async function createBlock(formData: FormData) {
        "use server"
        const title= formData.get("title") as string;
        const content = formData.get("content") as string;
        const userId = formData.get("userId") as string;
        // Insert data to databased
        await db.block.create({
            data: { title, content, user: { connect: { id: parseInt(userId) } } }
        });
        redirect("blocks");
    }

    return (
    // <form onSubmit={(e) => {
    //     e.preventDefault(); // Prevent default form submission behavior
    //     const formData = new FormData(e.target); // Create FormData object from the form
    //     createBlock(formData); // Call your createBlock function with form data
    // }}>
        // Do I need to change this?
        <form action={createBlock}>
            <h3>Create a Block</h3>
            <div className="flex flex-col gap-4">

                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">
                        Title
                    </label>
                    <input className="border rounded p-2 w-full" type="text" name="title" id="title" />
                </div>

                <div className="flex gap-4">
                    <label className="w-12" htmlFor="content">
                        Code
                    </label>
                    <textarea className="border rounded p-2 w-full" name="content" id="content">
                    </textarea>
                </div>

                <button type="submit" className="rounded p-2 bg-black text-white">Create</button>
            </div>
        </form>
    )
}