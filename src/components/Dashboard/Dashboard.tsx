import useStore from '../../store/useStore'
import BuildingInfo from './BuildingInfo'
import SensorChart from './SensorChart'
import LayerPanel from '../LayerPanel/LayerPanel'
import './Dashboard.css'

export default function Dashboard() {
  const selectedBuilding = useStore((state) => state.selectedBuilding)

  return (
    <div className="dashboard">
      <div className="dashboard-title">건물 정보</div>

      <BuildingInfo building={selectedBuilding} />

      <SensorChart />

      <LayerPanel />
    </div>
  )
}