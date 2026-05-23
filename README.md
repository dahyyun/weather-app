# 🌤 Weather App

> OpenWeather API와 GraphQL을 활용한 도시별 날씨 정보 페이지입니다.  
> 현재 날씨와 5일 예보를 확인할 수 있으며, Next.js 기반으로 구현했습니다.

<br />

## 🔗 Preview

| 메인 페이지 | 도시별 날씨 페이지                      |
| ----------- | --------------------------------------- |
| `/`         | `/Seoul`, `/Tokyo`, `/Paris`, `/London` |

<br />

## 🛠 Tech Stack

| Category  | Tech                         |
| --------- | ---------------------------- |
| Framework | Next.js 12                   |
| API       | OpenWeather API              |
| Server    | GraphQL, Apollo Server Micro |
| Client    | Apollo Client                |
| Styling   | Module CSS                   |
| UI        | Accordion, Responsive Layout |

<br />

## ✨ Features

- 🌍 도시별 현재 날씨 조회
- 📅 5일 예보 제공
- 📂 아코디언 UI로 예보 정보 표시
- ⚡ `next/dynamic`을 활용한 코드 스플리팅
- 🎨 Module CSS 기반 스타일링
- 📱 반응형 UI 구현
  - `1280px` 이상: 가운데 정렬
  - `800px` 미만: 가로 스크롤 적용
- 🧩 시맨틱 태그 사용

<br />

## 📁 Pages

| URL       | Description      |
| --------- | ---------------- |
| `/`       | 메인 페이지      |
| `/Seoul`  | 서울 날씨 페이지 |
| `/Tokyo`  | 도쿄 날씨 페이지 |
| `/Paris`  | 파리 날씨 페이지 |
| `/London` | 런던 날씨 페이지 |

<br />

## 🚀 Getting Started

### 1. 저장소 클론

```bash
git clone https://github.com/dahyyun/weather-app.git
cd weather-app
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성한 뒤 아래 내용을 추가합니다.

```env
OPENWEATHER_API_KEY=발급받은_API_키_입력
```

> OpenWeather API Key 발급 방법
>
> 1. [OpenWeather](https://openweathermap.org) 회원가입
> 2. 우측 상단 프로필 클릭
> 3. `My API Keys` 메뉴에서 API 키 복사

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```bash
http://localhost:3000
```

<br />

## 📁 Project Structure

```
weather-app/
├── components/
│   ├── WeatherCurrent/
│   │   ├── index.js
│   │   └── WeatherCurrent.module.css
│   └── WeatherForecast/
│       ├── index.js
│       └── WeatherForecast.module.css
├── lib/
│   ├── apollo-client.js
│   └── graphql/
│       ├── schema.js
│       ├── resolvers.js
│       └── queries.js
├── pages/
│   ├── api/
│   │   └── graphql.js
│   ├── _app.js
│   ├── index.js
│   └── [city].js
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── public/
│   ├── earth-3d.png
│   └── fonts/
├── .env.local
└── README.md
```

<br />

## 🔐 Environment Variables

`.env.local` 파일은 API 키를 포함하므로 Git에 업로드하지 않습니다.

```bash
.env.local
```

<br />

## 💡 What I Learned

**GraphQL + Apollo**

- REST API와 달리 GraphQL은 엔드포인트가 하나이고, 클라이언트가 필요한 필드만 지정해서 요청할 수 있습니다.
- Apollo Server를 Next.js API Route로 구성하면서 `globalThis`를 활용한 싱글톤 패턴을 적용했습니다.
- `InMemoryCache` 동작을 개발 중 직접 확인했습니다. API 파라미터 변경 후 이전 응답이 그대로 보여 강제 새로고침으로 해결했습니다.

**Next.js**

- `pages/api/` 를 백엔드 API Route로 활용해 API 키를 서버에서만 처리했습니다.
- `next/dynamic`으로 WeatherForecast 컴포넌트를 lazy load해 코드 스플리팅을 적용했습니다.
- `pages/[city].js` 동적 라우팅으로 4개 도시 페이지를 하나의 파일로 처리했습니다.

**JavaScript**

- `Promise.all`로 현재 날씨와 예보 API를 동시에 호출했습니다.
- `reduce`로 3시간 단위 예보 데이터를 날짜별로 그룹핑해 아코디언 UI를 구현했습니다.

**CSS + 시맨틱 태그**

- Module CSS는 클래스명이 자동으로 변환되어 컴포넌트 간 충돌이 없습니다.
- `<time>`, `<article>`, `<nav>` 등 의미에 맞는 시맨틱 태그를 적용했습니다.
