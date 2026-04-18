import { useEffect } from "react";
import { ScreenSpaceEventHandler, ScreenSpaceEventType, Viewer, defined } from "cesium";
import useStore from '../store/useStore';
import { generateBuildingInfo } from "../data/mockSensorData";

export default function useBuildingSelect(viewer: Viewer) {
  const setSelectedBuilding = useStore((state: any) => state.setSelectedBuilding)

  useEffect(() => {
    if (!viewer) return

    const handler = new ScreenSpaceEventHandler(viewer.scene.canvas)

    handler.setInputAction((movement: ScreenSpaceEventHandler.PositionedEvent) => {
      const picked = viewer.scene.pick(movement.position)

      if (defined(picked) && picked.getProperty) {
        // 건물 속성 추출
        const properties = {
          name: picked.getProperty('name'),
          'cesium#estimatedHeight': picked.getProperty('cesium#estimatedHeight'),
          building: picked.getProperty('building'),
          'building:levels': picked.getProperty('building:levels')
        }
        const buildingInfo = generateBuildingInfo(properties)
        setSelectedBuilding(buildingInfo)
      } else {
        // 빈 곳 클릭 시 선택 해제
        setSelectedBuilding(null)
      }
    }, ScreenSpaceEventType.LEFT_CLICK)

    return () => handler.destroy();
  }, [viewer])
}