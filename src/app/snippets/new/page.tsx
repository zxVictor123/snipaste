import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React from 'react'

function page() {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-background">

      {/* 卡片 */}
      <div className="bg-card w-150 flex flex-col justify-center gap-md border border-border rounded-xl p-3 text-foreground">

        {/* 标题 */}
        <p className="text-accent-foreground font-black text-xl">
          Create a Snippet
        </p>

        {/* 输入框区域 */}
        <div className="flex flex-col gap-sm">
          <div className="flex justify-between gap-sm">
            <p>Title:</p>
            <Input className="w-9/10"></Input>
          </div>
          <div className="flex justify-between gap-sm">
            <p>Code:</p>
            <Input className="w-9/10"></Input>
          </div>
        </div>

        {/* 创建按钮 */}
        <Button className="bg-primary">Create</Button>

      </div>

    </div>
  )
}

export default page