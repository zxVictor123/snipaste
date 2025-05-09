'use client'
import { Editor } from '@monaco-editor/react'
import React, { useCallback, useEffect } from 'react'
import { useStore } from '@/store/editorStore'

interface propsType {
  code: string;
  id: string;
}

export default function CodeEditor({code, id}: propsType) {
  const isReadOnly = useStore(state => state.isReadOnly)
  const setCurrentCode = useStore(state => state.setCurrentCode)

  // 初始化代码
  useEffect(() => {
    setCurrentCode(code)
  }, [code, setCurrentCode])

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value !== undefined && !isReadOnly) {
      setCurrentCode(value)
    }
  }, [isReadOnly, setCurrentCode])

  return (
    <div className={`${isReadOnly ? '' : 'border-orange-300'} border-6 bg-secondary text-secondary-foreground whitespace-pre-wrap overflow-auto h-9/10`}>
      <Editor
        theme='vs-dark'
        defaultValue={code}
        language='javascript'
        onChange={handleEditorChange}
        options={{
          readOnly: isReadOnly,
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  )
}
