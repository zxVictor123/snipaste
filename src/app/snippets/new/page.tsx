import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createSnippet } from './serverAction'

import React from 'react'
import { Textarea } from '@/components/ui/textarea'

function page() {
  
  return (
    <div className="flex-center h-screen bg-background">

      {/* 卡片 */}
      <form action={createSnippet} className="bg-card w-full flex flex-col justify-center gap-8 border border-border rounded-xl p-3 text-foreground">

        {/* 标题 */}
        <h2 className="text-accent-foreground font-black text-xl mx-auto">
          Create a Snippet
        </h2>

        {/* 输入框区域 */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <label className='font-extrabold'>Title:</label>
            <Input name= 'title' className="w-9/10"></Input>
          </div>
          <div className="flex justify-between gap-2">
            <label className='font-extrabold'>Code:</label>
            <Textarea name='code' className="w-9/10 h-80"></Textarea>
          </div>
        </div>

        {/* 创建按钮 */}
        <Button type='submit' className="bg-primary">Create</Button>

      </form>

    </div>
  )
}

export default page