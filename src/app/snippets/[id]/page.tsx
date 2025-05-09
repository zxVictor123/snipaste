import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { db } from '@/db'


export default async function page({params}: {params: Promise<{ id: string }>}) {
    const {id} = await params
    const snippet = await db.snippet.findFirst({
            where: {id: parseInt(id)}
        }
    )
    if(!snippet) {
        return <div>Not Found...</div>
    }
        
  return (
    <div className='h-screen '>
        <div className='flex flex-col gap-4 h-full pb-2'>
            {/* 上部分 */}
            <div className='flex justify-between bg-background items-center'>
                <h1 className='text-foreground font-black text-2xl'>Function that Adds Numbers</h1>
                <div className='flex gap-3'>
                    <Link href=""><Button>Edit</Button></Link>
                    <Button variant='destructive'>Delete</Button>
                </div>
            </div>
            {/* 代码区域 */}
            <div className='bg-secondary text-secondary-foreground whitespace-pre-wrap overflow-auto h-9/10'>
                {snippet.code}
            </div>
        </div>
    </div>
  )
}
