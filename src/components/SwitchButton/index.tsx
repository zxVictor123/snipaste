'use client'

import { Button } from '../ui/button'
import React from 'react'
import { useStore } from '@/store/editorStore'

export default function SwitchButton() {
    // 管理是否可编辑
    const switchIsReadOnly = useStore(state => state.switchIsReadOnly)
  return (
    <Button onClick={() => switchIsReadOnly()}>Edit</Button>
  )
}
