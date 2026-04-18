import { create } from 'zustand';

const useStore = create<any>((set) => ({
  // 선택된 건물 정보
  selectedBuilding: null,
  setSelectedBuilding: (building: any) => set({ selectedBuilding: building}),


  // 활성화된 레이어
  activeLayers: {
    buildings: true,
    traffic: false,
    environment: false
  },
  toggleLayer: (layer: string) => set((state: any) => ({
    activeLayers: {
      ...state.activeLayers,
      [layer]: !state.activeLayers[layer]
    }
  })),

  // 시간대(낮/밤)
  timeMode: 'day',
  setTimeMode: (mode: string) => set({timeMode: mode}),

  // 검색어
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query })
}))

export default useStore