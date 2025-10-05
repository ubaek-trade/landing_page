# 검색 엔진 등록 가이드 (구글 & 네이버)

이 가이드는 천강무역 웹사이트를 구글과 네이버 검색엔진에 등록하는 방법을 안내합니다.

## 📋 목차
1. [사전 준비사항](#사전-준비사항)
2. [구글 검색 등록](#구글-검색-등록)
3. [네이버 검색 등록](#네이버-검색-등록)
4. [검색 최적화 팁](#검색-최적화-팁)

---

## 🚀 사전 준비사항

### 1. 웹사이트 배포 확인
- 웹사이트가 실제로 온라인에 배포되어 있어야 합니다
- 도메인: `https://cheonggang-trade.com`
- 사이트가 정상적으로 접속되는지 확인하세요

### 2. 이미 생성된 파일들
✅ 다음 파일들이 자동으로 생성됩니다:
- `/sitemap.xml` - 사이트 구조 정보
- `/robots.txt` - 크롤러 규칙
- 메타데이터가 layout.tsx에 이미 설정됨

---

## 🔍 구글 검색 등록

### Step 1: Google Search Console 접속
1. [Google Search Console](https://search.google.com/search-console) 접속
2. 구글 계정으로 로그인

### Step 2: 속성 추가
1. 좌측 상단 **"속성 추가"** 클릭
2. **"URL 접두어"** 선택
3. `https://cheonggang-trade.com` 입력
4. **"계속"** 클릭

### Step 3: 소유권 확인 (3가지 방법 중 선택)

#### 방법 1: HTML 파일 업로드 (추천)
1. Google이 제공하는 HTML 확인 파일 다운로드 (예: `googleXXXXXXXXX.html`)
2. 다운로드한 파일을 프로젝트의 `public/` 폴더에 복사
3. 배포 후 `https://cheonggang-trade.com/googleXXXXXXXXX.html` 접속 확인
4. Search Console에서 **"확인"** 클릭

#### 방법 2: HTML 태그 (이미 준비됨)
1. Google이 제공하는 메타 태그 복사 (예: `<meta name="google-site-verification" content="XXXXX" />`)
2. `src/app/layout.tsx` 파일 열기
3. 52번째 줄의 `'your-google-verification-code'`를 실제 코드로 교체:
   ```typescript
   verification: {
     google: 'XXXXX', // 여기에 실제 코드 입력
   },
   ```
4. 배포 후 확인

#### 방법 3: 도메인 DNS 설정
1. Google이 제공하는 TXT 레코드 복사
2. 도메인 등록업체(가비아, 후이즈 등)의 DNS 설정으로 이동
3. TXT 레코드 추가
4. 전파 후 확인 (최대 48시간 소요)

### Step 4: Sitemap 제출
1. 소유권 확인 후 좌측 메뉴에서 **"Sitemaps"** 클릭
2. "새 사이트맵 추가"에 `sitemap.xml` 입력
3. **"제출"** 클릭
4. 상태가 "성공"으로 표시될 때까지 기다림

### Step 5: URL 검사 및 색인 요청
1. 상단 검색창에 `https://cheonggang-trade.com` 입력
2. **"색인 생성 요청"** 클릭
3. 1-2분 대기 후 완료

---

## 🟢 네이버 검색 등록

### Step 1: 네이버 서치어드바이저 접속
1. [네이버 서치어드바이저](https://searchadvisor.naver.com/) 접속
2. 네이버 계정으로 로그인

### Step 2: 웹 마스터 도구에 사이트 추가
1. 상단 **"웹마스터 도구"** 클릭
2. **"사이트 등록"** 클릭
3. `https://cheonggang-trade.com` 입력
4. **"확인"** 클릭

### Step 3: 소유권 확인 (2가지 방법 중 선택)

#### 방법 1: HTML 파일 업로드 (추천)
1. 네이버가 제공하는 HTML 확인 파일 다운로드 (예: `naver-site-verification.html`)
2. 다운로드한 파일을 프로젝트의 `public/` 폴더에 복사
3. 배포 후 `https://cheonggang-trade.com/naver-site-verification.html` 접속 확인
4. 서치어드바이저에서 **"소유확인"** 클릭

#### 방법 2: HTML 메타태그
1. 네이버가 제공하는 메타 태그 복사
2. `src/app/layout.tsx` 파일에 추가:
   ```typescript
   verification: {
     google: 'your-google-verification-code',
     naver: 'your-naver-verification-code', // 이 줄 추가
   },
   ```
3. 배포 후 확인

### Step 4: 사이트맵 제출
1. 좌측 메뉴 **"요청" > "사이트맵 제출"** 클릭
2. `https://cheonggang-trade.com/sitemap.xml` 입력
3. **"확인"** 클릭

### Step 5: 수집 요청
1. 좌측 메뉴 **"요청" > "URL 수집 요청"** 클릭
2. `https://cheonggang-trade.com` 입력
3. **"확인"** 클릭

### Step 6: RSS 제출 (선택사항)
1. 블로그나 뉴스가 있다면 RSS 제출
2. 현재 랜딩 페이지는 생략 가능

---

## 🎯 검색 최적화 팁

### 1. 색인 확인 방법
- **구글**: `site:cheonggang-trade.com` 구글 검색
- **네이버**: `site:cheonggang-trade.com` 네이버 검색
- ⚠️ 첫 색인까지 1-7일 소요될 수 있습니다

### 2. 검색 순위 향상을 위한 추가 작업
✅ **이미 완료된 것들**:
- 메타 제목, 설명 최적화
- 키워드 설정
- Open Graph 설정
- 반응형 디자인
- 시맨틱 HTML

📈 **추가로 할 수 있는 것들**:
- 정기적인 콘텐츠 업데이트
- 백링크 구축 (다른 사이트에서 링크 받기)
- Google My Business 등록
- 네이버 플레이스 등록
- 소셜 미디어 공유
- 블로그 운영

### 3. 성과 모니터링
- **Google Search Console**: 클릭, 노출, 순위 확인
- **네이버 서치어드바이저**: 수집 현황, 검색 반영 확인
- 주 1회 정도 확인 권장

### 4. 구조화된 데이터 추가 (선택사항)
나중에 추가하면 좋은 것:
- Organization Schema
- BreadcrumbList Schema
- ContactPoint Schema

---

## ⚡ 빠른 체크리스트

### 배포 전
- [ ] `sitemap.ts` 파일 생성됨
- [ ] `robots.ts` 파일 생성됨
- [ ] 메타데이터 확인 (layout.tsx)
- [ ] 도메인 URL 확인

### 구글 등록
- [ ] Google Search Console 계정 생성
- [ ] 사이트 추가 및 소유권 확인
- [ ] Sitemap 제출
- [ ] URL 색인 요청

### 네이버 등록
- [ ] 네이버 서치어드바이저 계정 생성
- [ ] 사이트 추가 및 소유권 확인
- [ ] Sitemap 제출
- [ ] URL 수집 요청

### 확인
- [ ] 1주일 후 `site:cheonggang-trade.com` 검색 확인
- [ ] Search Console/서치어드바이저 정기 모니터링

---

## 🆘 문제 해결

### Q: 확인 파일이 404 오류가 나요
**A**: `public/` 폴더에 파일을 넣고 다시 배포했는지 확인하세요.

### Q: 색인이 안 되는 것 같아요
**A**: 
- 첫 색인까지 최대 1-2주 소요될 수 있습니다
- robots.txt에서 차단되지 않았는지 확인
- sitemap.xml이 정상적으로 접근되는지 확인

### Q: 검색 결과에 안 나와요
**A**:
- 색인이 되었는지 먼저 `site:` 명령어로 확인
- 브랜드명 "천강무역"으로 검색 시도
- 경쟁이 치열한 키워드는 시간이 걸립니다

### Q: 순위가 낮아요
**A**:
- SEO는 장기전입니다
- 콘텐츠 품질, 백링크, 사용자 경험이 중요
- 정기적인 업데이트와 마케팅 필요

---

## 📞 추가 도움이 필요하신가요?

더 궁금한 사항이 있으시면 언제든 문의해주세요!

**연락처**: changwoohyunkr@naver.com  
**대표**: 현창우  
**전화**: 010-2537-9643

