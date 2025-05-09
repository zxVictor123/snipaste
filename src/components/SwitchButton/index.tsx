'use client'

import { Button } from '../ui/button'
import React from 'react'
import { useStore } from '@/store/editorStore'
import { updateSnippet } from '@/app/snippets/[id]/serverAction'

interface SwitchButtonProps {
  id: string;
}

export default function SwitchButton({ id }: SwitchButtonProps) {
  const isReadOnly = useStore(state => state.isReadOnly)
  const currentCode = useStore(state => state.currentCode)
  const switchIsReadOnly = useStore(state => state.switchIsReadOnly)

  const handleSave = async () => {
    if (!isReadOnly) {
      await updateSnippet(id, currentCode)
    }
    switchIsReadOnly()
  }

  return (
    <Button 
      variant='ghost' 
      onClick={handleSave}
      className={`font-black ${isReadOnly ? '' : 'bg-green-600 hover:bg-green-600 text-white hover:text-white'}`}
    >
      {isReadOnly ? '编辑' : '保存'}
    </Button>
  )
}
