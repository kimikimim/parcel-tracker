import React from 'react'

export default function EtaDisplay({ eta, progress }) {
  const dateText = eta ? new Date(eta).toLocaleString() : '계산 중'
  const remaining = progress != null ? Math.max(0, 100 - progress) : null
  return (
    <div style={{marginTop: 8}}>
      <h3>ETA (예상 배송완료)</h3>
      <div>📅 {dateText} {remaining!=null ? `· 남은 진행률 ${remaining}%`:''}</div>
    </div>
  )
}
