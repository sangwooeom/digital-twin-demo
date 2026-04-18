import { useEffect, useRef, useState } from "react";
import {
  Viewer,
  Ion,
  Terrain,
  Cartesian3,
  Math as CesiumMath,
  createOsmBuildingsAsync,
  JulianDate
} from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import useStore from '../store/useStore';

export default function useCesium() {
  const viewerRef = useRef<Viewer>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewer, setViewer] = useState<Viewer|null>(null)
  const timeMode = useStore((state: any) => state.timeMode)

  useEffect(() => {
    Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN

    const v = new Viewer(containerRef.current!, {
      terrain: Terrain.fromWorldTerrain(),
      timeline: false,
      animation: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      homeButton: false,
      sceneModePicker: false,
      geocoder: false,
      fullscreenButton: false
    })

    // 3D 건물 추가
    createOsmBuildingsAsync().then(tileset => {
      v.scene.primitives.add(tileset)
    })

    // 서울 여의도 카메라 이동
    v.camera.flyTo({
      destination: Cartesian3.fromDegrees(126.9246, 37.5219, 800),
      orientation: {
        heading: CesiumMath.toRadians(0),
        pitch: CesiumMath.toRadians(-45),
        roll: 0
      }
    })

    viewerRef.current = v
    setViewer(v)

    return () => v.destroy();
  }, [])

  // 낮/밤 모드 전환
  useEffect(() => {
    if (!viewerRef.current) return

    if (timeMode === 'night') {
      viewerRef.current.clock.currentTime = JulianDate.fromIso8601('2024-01-01T21:00:00Z')
    } else {
      viewerRef.current.clock.currentTime = JulianDate.fromIso8601('2024-01-01T09:00:00Z')
    }
  }, [timeMode])

  return { viewer, containerRef }
}