'use client'
import { Editor } from '@monaco-editor/react'
import React from 'react'
import { useStore } from '@/store/editorStore'

interface propsType {
  code: string;
}
export default function CodeEditor({code}: propsType){
  const isReadOnly = useStore(state => state.isReadOnly)
  return (
    <div className='bg-secondary text-secondary-foreground whitespace-pre-wrap overflow-auto h-9/10'>
      <Editor
      theme='vs-dark'
      defaultValue={code}
      language='javascript'
      options={
        {
          readOnly: isReadOnly
        }
      }
      />
    </div>
  )
}
