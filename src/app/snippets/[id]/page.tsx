import React from 'react'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import CodeEditor from '@/components/CodeEditor'
import SwitchButton from '@/components/SwitchButton'
import DeleteButton from '@/components/DeleteButton'
import { PageProps } from '../../../../.next/types/app/layout'

export default async function Page({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    // 获取对应snippet
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
                        <SwitchButton id={id} />
                        <DeleteButton id= {id}/>
                    </div>
                </div>
                <CodeEditor code={snippet.code} id={id}/>
            </div>
        </div>
    )
}
