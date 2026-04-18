// 건물 클릭 시 표시될 가상 센서 데이터
export const generateSensorData = () => {
  const now = new Date()
  return Array.from({ length: 10}, (_: any, i: number) => ({
    time: `${now.getHours()}:${String(now.getMinutes() - (9 - i) * 5).padStart(2, '0')}`,
    temperature: Math.floor(Math.random() * 10 + 20),
    power: Math.floor(Math.random() * 200 + 300),
    people: Math.floor(Math.random() * 500 + 100)
  }))
}

// 건물 클릭 시 표시될 가상 건물 정보
export const generateBuildingInfo = (properties: any) => ({
  name: properties?.name || '알 수 없는 건물',
  height: properties?.['cesium#estimatedHeight']
    ? `${Math.round(properties['cesium#estimatedHeight'])}m`
    : '정보 없음',
  usage: properties?.building || '업무시설',
  floors: properties?.['building:levels'] || '정보 없음',
  temperature: `${Math.floor(Math.random() * 10 + 20)}°C`,
  power: `${Math.floor(Math.random() * 200 + 300)} kWh`,
  people: `${Math.floor(Math.random() * 500 + 100)}명`,
})