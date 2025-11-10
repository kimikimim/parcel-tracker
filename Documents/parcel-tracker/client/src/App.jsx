import React, { useState } from 'react'
import TrackForm from './components/TrackForm.jsx'
import Timeline from './components/Timeline.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import EtaDisplay from './components/EtaDisplay.jsx'

export default function App() {
  const [data, setData] = useState(null)

  return (
    <div className="container">
      <h1>📦 Parcel Tracker</h1>
      <p className="small">해외/국내 통합 트래킹 · 통관 단계 · 진행률/ETA 표시</p>
      <TrackForm onResult={setData} />
      {data && (
        <>
          <ProgressBar value={data.progress ?? 0} />
          <EtaDisplay eta={data.eta} progress={data.progress ?? 0} />
          <Timeline events={data.history ?? []} />
        </>
      )}
    </div>
  )
}
