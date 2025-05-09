import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteSnippet (id: string) {
    await db.snippet.deleteMany (
        {
            where: {
                id: parseInt(id)
            }
        }
        
    )
    redirect('/')
}