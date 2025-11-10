import React from 'react'

export default function ProgressBar({ value = 0 }) {
  const v = Math.max(0, Math.min(100, value))
  return (
    <div style={{marginTop: 16}}>
      <h3>진행률</h3>
      <div className="progress">
        <div className="progress-bar" style={{width: `${v}%`}} />
      </div>
      <div className="small">{v}% 완료</div>
    </div>
  )
}
