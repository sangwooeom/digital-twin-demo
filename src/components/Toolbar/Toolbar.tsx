import useStore from '../../store/useStore'
import './Toolbar.css'

export default function Toolbar() {
  const { timeMode, setTimeMode, searchQuery, setSearchQuery } = useStore()

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <div className="toolbar-logo">
          <span className="logo-icon">🏙️</span>
          <span className="logo-text">Digital Twin <em>Seoul</em></span>
        </div>
      </div>

      <div className="toolbar-center">
        <input
          className="toolbar-search"
          type="text"
          placeholder="건물명 또는 주소 검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="toolbar-right">
        <div className="time-toggle">
          <button
            className={`time-btn ${timeMode === 'day' ? 'active' : ''}`}
            onClick={() => setTimeMode('day')}
          >
            ☀️ 낮
          </button>
          <button
            className={`time-btn ${timeMode === 'night' ? 'active' : ''}`}
            onClick={() => setTimeMode('night')}
          >
            🌙 밤
          </button>
        </div>
      </div>
    </div>
  )
}