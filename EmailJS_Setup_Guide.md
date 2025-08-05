# EmailJS 설정 가이드

이메일 문의 폼이 `changwoohyunkr@naver.com`으로 전송되도록 하려면 다음 단계를 따라하세요.

## 1. EmailJS 계정 생성
1. https://www.emailjs.com/ 접속
2. 무료 계정 생성 (월 200건까지 무료)

## 2. Email Service 연결
1. Dashboard → Email Services
2. "Add New Service" 클릭
3. Gmail 또는 다른 이메일 서비스 선택
4. `changwoohyunkr@naver.com` 계정으로 연결

## 3. Email Template 생성
1. Dashboard → Email Templates
2. "Create New Template" 클릭
3. Template 내용:

```
제목: 천강무역 웹사이트 문의 - {{inquiry_type}}

내용:
안녕하세요 {{to_name}},

천강무역 웹사이트를 통해 새로운 문의가 접수되었습니다.

■ 문의자 정보
- 이름: {{from_name}}
- 이메일: {{from_email}}
- 문의 유형: {{inquiry_type}}

■ 문의 내용
{{message}}

---
천강무역 웹사이트 자동 발송 메일
```

4. Template ID 복사 (예: template_contact)

## 4. Public Key 확인
1. Dashboard → Account → General
2. Public Key 복사

## 5. 환경변수 설정
`.env.local` 파일에서 다음 값들을 실제 값으로 교체:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. 배포 시 주의사항
- Vercel 등에 배포할 때는 환경변수를 배포 플랫폼에도 설정해야 합니다.
- Vercel Dashboard → Settings → Environment Variables

## 완료!
설정이 완료되면 웹사이트의 문의 폼이 실제로 이메일을 전송합니다.