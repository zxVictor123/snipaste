'use server'

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteSnippet(id: string) {
    await db.snippet.delete({
        where: {
            id: parseInt(id)
        }
    })
    redirect('/')
}

export async function updateSnippet(id: string, code: string) {
    await db.snippet.update({
        where: { id: parseInt(id) },
        data: { code }
    })
}