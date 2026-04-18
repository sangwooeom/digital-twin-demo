import { useState, useEffect } from 'react'
import { generateSensorData } from '../data/mockSensorData'

export default function useSensorData(selectedBuilding: any) {
  const [sensorData, setSensorData] = useState(generateSensorData());

  useEffect(() => {
    if (!selectedBuilding) return

    // 건물 선택 시 5초마다 데이터 갱신 (실시간 느낌)
    const interval = setInterval(() => {
      setSensorData(generateSensorData())
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedBuilding])

  return sensorData
}