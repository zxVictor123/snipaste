import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/db'
import { redirect } from 'next/navigation'

import React from 'react'

function page() {
  async function createSnippet(formData: FormData) {
    'use server'

    const title = formData.get('title') as string
    const code = formData.get('code') as string

    const snippet =  await db.snippet.create({
      data: {
          title: title,
          code: code,
      }
  })
    console.log(snippet)
    redirect('/')
  
  }
  return (
    <div className="flex-center h-screen bg-background">

      {/* 卡片 */}
      <form action={createSnippet} className="bg-card w-full flex flex-col justify-center gap-md border border-border rounded-xl p-3 text-foreground">

        {/* 标题 */}
        <h2 className="text-accent-foreground font-black text-xl mx-auto">
          Create a Snippet
        </h2>

        {/* 输入框区域 */}
        <div className="flex flex-col gap-sm">
          <div className="flex justify-between gap-sm">
            <label>Title:</label>
            <Input name= 'title' className="w-9/10"></Input>
          </div>
          <div className="flex justify-between gap-sm">
            <label>Code:</label>
            <Input name='code' className="w-9/10"></Input>
          </div>
        </div>

        {/* 创建按钮 */}
        <Button type='submit' className="bg-primary">Create</Button>

      </form>

    </div>
  )
}

export default page