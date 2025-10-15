"use server"

import { db } from "@/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    try {
        const user = await db.user.findFirstOrThrow({
            where: {
                username: formData.get("username") as string,
                password: formData.get("password") as string
            }
        });
        // Maybe lets use Supabase to handle signups and logins
        // User found --> Create session // Remember me TO DO
        cookies().set("user_id", String(user.id))

        redirect("/");
        
    } catch (error) {
        // User not found ---> "User not found message" maybe "Bad user/pass message" TO DO
        redirect("/login?error=Invalid%20Credentials");
    }
}