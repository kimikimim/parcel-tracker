# 📦 Parcel Tracker

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MIT](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> 🌍 **해외/국내 통합 배송 추적 웹앱**  
> 하나의 운송장 번호로 **CJ대한통운, 한진, 롯데, DHL, EMS, UPS** 등  
> 국내외 택배사를 자동 인식하고 **통관 단계 포함 전체 배송 상태를 시각화**합니다.

---

## 🚀 주요 기능

- ✅ **국내·해외 운송장 자동 인식 및 통합 조회**
- 🌐 **SweetTracker / KPOST(우체국·EMS) / UNI-PASS(관세청)** 등 다중 API 지원
- 📊 **진행률(%) 및 예상 도착일(ETA)** 자동 계산
- 🧾 **세분화된 해외 통관 단계 표시**
  - 출발국 공항 도착 → 출발국 통관 중 → 도착국 도착 → 도착국 통관 중 → 국내 배송사 인계
- 🔔 **Web Push 알림 (예정)**
- 🧱 **Docker + Prisma + PostgreSQL** 기반의 안정적인 백엔드 구조

---

## 🧩 기술 스택

| 구분 | 기술 |
|------|------|
| **Frontend** | React (Vite), TailwindCSS |
| **Backend** | Node.js (Express), Prisma ORM |
| **Database** | PostgreSQL |
| **Infra** | Docker, Docker Compose |
| **Language** | JavaScript (ESM) |
| **API 연동** | SweetTracker, KPOST, UNI-PASS, AfterShip, 17Track, DHL, UPS, FedEx |
| **기타** | dotenv, node-fetch, web-push |

---

## ⚙️ 환경 변수 설정

루트에 `.env` 파일을 생성하고 아래 내용을 입력하세요.  
> ⚠️ `.env.example`은 **예시용**입니다.  
> 실제 배포/개발 시 `.env`에 직접 입력해주세요.

```env
# Database
DATABASE_URL="postgresql://parcel:parcel@localhost:5432/parcel?schema=public"

# Aggregator APIs (필요한 것만 입력)
TRACKINGMORE_API_KEY=""
AFTERSHIP_API_KEY=""
SEVENTEENTRACK_API_KEY=""
EASYPOST_API_KEY=""
SWEETTRACKER_KEY=

# Carrier-direct
DHL_API_KEY=""
UPS_API_KEY=""
FEDEX_API_KEY=""
KPOST_API_KEY=
UNIPASS_API_KEY=""

# Web Push
VAPID_PUBLIC_KEY=""
VAPID_PRIVATE_KEY=""
VAPID_SUBJECT="mailto:you@example.com"

# Behavior
PROVIDER_PRIORITY="trackingmore,aftership,17track,easypost,dhl,ems,unipass"
PORT=3001
```
---

## 🧠 프로젝트 구조

```
parcel-tracker/
├── client/               # React 프론트엔드
│   ├── src/
│   │   ├── App.jsx
│   │   └── components/
│   │       ├── TrackForm.jsx
│   │       ├── Timeline.jsx
│   │       ├── ProgressBar.jsx
│   │       └── EtaDisplay.jsx
│   └── package.json
│
├── server/               # Express + Prisma 백엔드
│   ├── prisma/schema.prisma
│   ├── routes/
│   │   └── track.js
│   ├── services/
│   │   └── trackingService.js
│   └── index.js
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md

```
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
