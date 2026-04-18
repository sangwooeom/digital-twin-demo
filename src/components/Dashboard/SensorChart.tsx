import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import useSensorData from '../../hooks/useSensorData'
import useStore from '../../store/useStore'
import './Dashboard.css'

const TABS = [
  { key: 'temperature', label: '온도', color: '#f59e0b', unit: '°C' },
  { key: 'power', label: '전력', color: '#3b82f6', unit: 'kWh' },
  { key: 'people', label: '인원', color: '#10b981', unit: '명' },
]

export default function SensorChart() {
  const [activeTab, setActiveTab] = useState('temperature')
  const selectedBuilding = useStore((state) => state.selectedBuilding)
  const sensorData = useSensorData(selectedBuilding)

  if (!selectedBuilding) return null

  const currentTab = TABS.find((t) => t.key === activeTab)

  return (
    <div className="sensor-chart">
      <div className="chart-title">실시간 센서 데이터</div>

      <div className="chart-tabs">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            className={`chart-tab ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={sensorData}>
          <XAxis
            dataKey="time"
            tick={{ fill: '#475569', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#475569', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={36}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a2235',
              border: '1px solid #2a3a5c',
              borderRadius: '8px',
              color: '#e2e8f0',
              fontSize: '12px',
            }}
            formatter={(value) => [`${value}${currentTab?.unit}`, currentTab?.label]}
          />
          <Line
            type="monotone"
            dataKey={activeTab}
            stroke={currentTab?.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}