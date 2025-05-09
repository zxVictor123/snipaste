import { create } from 'zustand'


interface EditorState {
  isReadOnly: boolean
  currentCode: string
  switchIsReadOnly: () => void
  setCurrentCode: (code: string) => void
}


export const useStore = create<EditorState>()((set) => ({
  isReadOnly: true,
  currentCode: '',
  switchIsReadOnly: () => set((state) => ({ isReadOnly: !state.isReadOnly })),
  setCurrentCode: (code) => set({ currentCode: code })
})) 