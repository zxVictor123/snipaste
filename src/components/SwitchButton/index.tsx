'use client'

import { Button } from '../ui/button'
import React from 'react'
import { useStore } from '@/store/editorStore'

export default function SwitchButton() {
    const isReadOnly = useStore(state => state.isReadOnly)
    const switchIsReadOnly = useStore(state => state.switchIsReadOnly)
  return (
    <Button variant='ghost' onClick={() => switchIsReadOnly()} className={`font-black ${isReadOnly ? '' : 'bg-green-600 hover:bg-green-600 text-white hover:text-white'}`}>{isReadOnly ? 'Edit' : 'Save'}</Button>
  )
}
