import React, { useState } from 'react'

export default function TrackForm({ onResult }) {
  const [waybill, setWaybill] = useState('')
  const [carrier, setCarrier] = useState('') // empty = auto-detect (server-side)
  const [bl, setBl] = useState('')
  const [pccc, setPccc] = useState('')

  const handleQuery = async () => {
    const params = new URLSearchParams()
    if (waybill) params.set('num', waybill)
    if (carrier) params.set('carrier', carrier)
    if (bl) params.set('bl', bl)
    if (pccc) params.set('pccc', pccc)

    const res = await fetch(`/api/track?${params.toString()}`)
    const json = await res.json()
    onResult(json)
  }

  return (
    <div style={{marginTop: 16, marginBottom: 16}}>
      <div className="row">
        <input className="input" placeholder="운송장(국내/해외)" value={waybill} onChange={e=>setWaybill(e.target.value)} />
        <input className="input" placeholder="캐리어 코드 (비우면 자동)" value={carrier} onChange={e=>setCarrier(e.target.value)} />
      </div>
      <div className="row" style={{marginTop: 8}}>
        <input className="input" placeholder="BL/HAWB/MAWB (선택)" value={bl} onChange={e=>setBl(e.target.value)} />
        <input className="input" placeholder="개인통관고유부호(PCCC, 선택)" value={pccc} onChange={e=>setPccc(e.target.value)} />
      </div>
      <div style={{marginTop: 12, display: 'flex', gap: 8}}>
        <button className="button" onClick={handleQuery} disabled={!waybill}>조회</button>
      </div>
    </div>
  )
}
