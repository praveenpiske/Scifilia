import {create} from 'zustand'

export const useStore = create((set) => ({
    ready: false,
    isready: () => set({ready: true}),
}))

export default useStore;