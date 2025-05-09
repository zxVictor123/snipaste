import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import { deleteSnippet } from './serverAction'
import CodeEditor from '@/components/CodeEditor'
import SwitchButton from '@/components/SwitchButton'

export default async function page({params}: {params: Promise<{ id: string }>}) {

    // 获取对应snippet
    const {id} = await params
    const snippet = await db.snippet.findFirst({
        where: {id: parseInt(id)}
    })
    
    if(!snippet) {
        return notFound()
    }
    

    return (
        <div className='h-screen'>
            <div className='flex flex-col gap-4 h-full pb-2'>
                {/* 上部分 */}
                <div className='flex justify-between bg-background items-center'>
                    <h1 className='text-foreground font-black text-2xl'>{snippet.title}</h1>
                    <div className='flex gap-3'>
                        <SwitchButton/>
                        <form action={async () => {
                            'use server'
                            await deleteSnippet(id)
                        }}>
                            <Button variant='destructive'>Delete</Button>
                        </form>
                    </div>
                </div>
                <CodeEditor code= {snippet.code}/>
            </div>
        </div>
    )
}
