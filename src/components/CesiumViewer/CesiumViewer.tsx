import useCesium from "../../hooks/useCesium";
import useBuildingSelect from "../../hooks/useBuildingSelect";
import './CesiumViewer.css';

export default function CesiumViewer() {
  const { viewer, containerRef } = useCesium();
  useBuildingSelect(viewer!)

  return (
    <div className="cesium-container">
      <div ref={containerRef} className="cesium-viewer"></div>
    </div>
  )
}