import './Dashboard.css'

export default function BuildingInfo({ building }: any) {
  if (!building) {
    return (
      <div className="building-empty">
        <span className="building-empty-icon">🏢</span>
        <p>건물을 클릭하면</p>
        <p>상세 정보가 표시됩니다</p>
      </div>
    )
  }

  return (
    <div className="building-info">
      <div className="building-name">{building.name}</div>
      <div className="building-stats">
        <div className="stat-item">
          <span className="stat-label">높이</span>
          <span className="stat-value">{building.height}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">용도</span>
          <span className="stat-value">{building.usage}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">층수</span>
          <span className="stat-value">{building.floors}</span>
        </div>
      </div>
      <div className="building-sensors">
        <div className="sensor-item">
          <span className="sensor-icon">🌡️</span>
          <span className="sensor-label">실내 온도</span>
          <span className="sensor-value warning">{building.temperature}</span>
        </div>
        <div className="sensor-item">
          <span className="sensor-icon">⚡</span>
          <span className="sensor-label">전력 사용</span>
          <span className="sensor-value">{building.power}</span>
        </div>
        <div className="sensor-item">
          <span className="sensor-icon">👥</span>
          <span className="sensor-label">재실 인원</span>
          <span className="sensor-value success">{building.people}</span>
        </div>
      </div>
    </div>
  )
}