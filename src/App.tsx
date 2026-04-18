import Toolbar from './components/Toolbar/Toolbar'
import CesiumViewer from './components/CesiumViewer/CesiumViewer'
import Dashboard from './components/Dashboard/Dashboard'
import './styles/global.css'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh' }}>
      <Toolbar />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <div style={{ flex: 1 }}>
          <CesiumViewer />
        </div>
        <Dashboard />
      </div>
    </div>
  )
}