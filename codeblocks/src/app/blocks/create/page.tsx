export default function BlockCreatePage() {
    return (
        <form action="">
            <h3>Create a Block</h3>
            <div className="flex flex-col gap-4">

                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">
                        Title
                    </label>
                    <input className="border rounded p-2 w-full" type="text" name="title" id="title" />
                </div>

                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">
                        Code
                    </label>
                    <textarea className="border rounded p-2 w-full" name="code" id="code">
                    </textarea>
                </div>

                <button type="submit" className="rounded p-2 bg-black text-white">Create</button>
            </div>
        </form>
    )
}