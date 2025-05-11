'use client'
import { createSnippet } from '@/app/snippets/new/serverAction'
import React, { useActionState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const initialState = {
        errors: {
          titleError: '',
          codeError: ''
        },
      }

export default function NewForm() {
    
    const [state,formAction] =  useActionState(createSnippet,initialState)
    const {errors} = state
  return (
    <div className="flex-center h-screen bg-background">
{/* 卡片 */}
      <form action={formAction} className="bg-card w-full flex flex-col justify-center gap-8 border border-border rounded-xl p-3 text-foreground">

        {/* 标题 */}
        <h2 className="text-accent-foreground font-black text-xl mx-auto">
          Create a Snippet
        </h2>

        {/* 输入区域 */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <label className='font-extrabold'>Title:</label>
            <Input name= 'title' className="w-9/10"></Input>
          </div>
          <p className='text-red-600'>{errors.titleError}</p>
          <div className="flex justify-between gap-2">
            <label className='font-extrabold'>Code:</label>
            <Textarea name='code' className="w-9/10 h-80"></Textarea>
          </div>
          <p className='text-red-600'>{errors.codeError}</p>
        </div>

        {/* 创建按钮 */}
        <Button type='submit' className="bg-primary">Create</Button>

      </form></div>
  )
}
