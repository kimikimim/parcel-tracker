# 📦 Parcel Tracker (Universal API Aggregator)

국내·해외 운송장 통합 추적기입니다.  
SweetTracker, KPOST, TrackingMore, AfterShip, 17Track, UNI-PASS 등  
여러 API 중 사용 가능한 키만 자동으로 감지해서 동작합니다.

---

## 🚀 특징
- ✅ `.env`에 키 없어도 기본 작동 (SweetTracker + KPOST 우선)
- ✅ 여러 API를 자동 fallback
- ✅ 통관 단계(UNI-PASS)까지 지원
- ✅ React + Express + Prisma 구조

---

## 🛠️ 설치 및 실행

```bash
git clone https://github.com/yourname/parcel-tracker.git
cd parcel-tracker

# 서버
cd server
npm install
npx prisma migrate dev --name init
npm run dev

# 클라이언트
cd ../client
npm install
npm run dev
