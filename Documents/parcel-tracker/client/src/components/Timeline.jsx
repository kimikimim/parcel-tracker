// client/src/components/Timeline.jsx
import React from 'react'

export default function Timeline({ events = [] }) {
  if (!events.length) {
    return (
      <div className="text-gray-500 mt-4">
        <p>📦 <strong>출고 준비 중</strong></p>
        <p className="text-sm text-gray-400">
          운송장이 생성되었지만 아직 택배사로 인계되지 않았습니다.<br />
          배송 정보가 등록되면 자동으로 갱신됩니다.
        </p>
      </div>
    )
  }

  return (
    <ul className="mt-4 border-l-2 border-gray-300 pl-4">
      {events.map((e, i) => (
        <li key={i} className="mb-4">
          <div className="font-semibold">{e.step}</div>
          <div className="text-sm text-gray-500">{e.time}</div>
        </li>
      ))}
    </ul>
  )
}