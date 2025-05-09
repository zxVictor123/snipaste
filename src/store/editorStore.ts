import { create } from 'zustand'


interface EditorState {
  isReadOnly: boolean
  switchIsReadOnly: () => void
}


export const useStore = create<EditorState>()((set) => ({
  isReadOnly: true,
  switchIsReadOnly: () => set((state) => ({ isReadOnly: !state.isReadOnly }))
})) 