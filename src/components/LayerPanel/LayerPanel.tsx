import useStore from '../../store/useStore'
import './LayerPanel.css'

const LAYERS = [
  { key: 'buildings', label: '3D 건물', icon: '🏢' },
  { key: 'traffic', label: '교통 현황', icon: '🚗' },
  { key: 'environment', label: '환경 센서', icon: '🌿' },
]

export default function LayerPanel() {
  const { activeLayers, toggleLayer } = useStore()

  return (
    <div className="layer-panel">
      <div className="layer-panel-title">레이어 설정</div>
      <div className="layer-list">
        {LAYERS.map(({ key, label, icon }) => (
          <div
            key={key}
            className={`layer-item ${activeLayers[key] ? 'active' : ''}`}
            onClick={() => toggleLayer(key)}
          >
            <span className="layer-icon">{icon}</span>
            <span className="layer-label">{label}</span>
            <div className={`layer-toggle ${activeLayers[key] ? 'on' : 'off'}`}>
              {activeLayers[key] ? 'ON' : 'OFF'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}