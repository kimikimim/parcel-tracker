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
> 운송장 번호 하나로 CJ대한통운, 한진, 롯데, DHL, EMS, UPS 등 국내외 택배사를 자동 인식하고  
> 통관 단계를 포함한 세부 배송 상태를 한눈에 보여줍니다.

---

## 🚀 주요 기능

- ✅ **국내·해외 운송장 자동 인식 및 상태 조회**
- 📦 **SweetTracker / KPOST(우체국·EMS) / UNI-PASS(관세청)** 등 다중 API 연동
- 🔍 **진행률(%) + 예상 도착일(ETA)** 계산
- 🌐 **통관 과정 세분화 단계 표시**  
  (출발국 공항 도착 → 출발국 통관 중 → 도착국 통관 완료 → 국내 배송사 인계 …)
- 🔔 **Web Push 알림 지원 (예정)**
- 🧱 **Docker + Prisma + PostgreSQL** 기반 백엔드

---

## 🧩 기술 스택

| 영역 | 기술 |
|------|------|
| **Frontend** | React (Vite), TailwindCSS |
| **Backend** | Node.js (Express), Prisma ORM |
| **Database** | PostgreSQL |
| **Infra** | Docker, Docker Compose |
| **Language** | JavaScript (ESM) |
| **API** | SweetTracker, KPOST, UNI-PASS, AfterShip, 17Track, DHL, UPS, FedEx |
| **Etc.** | dotenv, node-fetch, web-push, REST API |

---

## 🧠 프로젝트 구조

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
---

## 🛠️ 설치 및 실행

### 1️⃣ 레포지토리 클론

```bash
git clone https://github.com/kimikimim/parcel-tracker.git
cd parcel-tracker
