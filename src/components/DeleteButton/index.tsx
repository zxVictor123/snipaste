'use client'
import { Button } from "../ui/button";

import React from 'react'
import { deleteSnippet } from "@/app/snippets/[id]/serverAction";

export default function DeleteButton({id}: {id: string}) {
    const handleDelete = async() => {
      await deleteSnippet(id)
    }
    return <Button onClick={handleDelete} variant='destructive'>Delete</Button>
}
