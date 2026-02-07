export type Language = 'ko' | 'en';

interface StatItem {
  number: string;
  label: string;
  description: string;
}

interface BusinessArea {
  id: string;
  title: string;
  description: string;
  details: string;
}

interface ContactOption {
  title: string;
  description: string;
  action: string;
}

export interface Translations {
  nav: {
    home: string;
    business: string;
    contact: string;
    cta: string;
    menuAriaLabel: string;
    logoText: string;
  };
  hero: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    descriptionPrefix: string;
    descriptionHighlight1: string;
    descriptionMid: string;
    descriptionHighlight2: string;
    descriptionSuffix: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: StatItem[];
  business: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    descriptionPrefix: string;
    descriptionHighlight: string;
    descriptionSuffix: string;
    learnMore: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
    areas: BusinessArea[];
  };
  brandStrip: {
    heading: string;
    brands: string[];
  };
  contact: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    descriptionPrefix: string;
    descriptionHighlight: string;
    descriptionSuffix: string;
    recommended: string;
    options: ContactOption[];
    companyInfoHeading: string;
    ceoLabel: string;
    ceoPrefix: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    viewMap: string;
    quickInquiry: string;
    formNamePlaceholder: string;
    formEmailPlaceholder: string;
    formTypePlaceholder: string;
    formTypeOptions: { value: string; label: string }[];
    formMessagePlaceholder: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    formFooterPrefix: string;
    formFooterHighlight: string;
    formFooterSuffix: string;
    footerQuote: string;
  };
  company: {
    name: string;
    englishName: string;
    description: string;
  };
}

const ko: Translations = {
  nav: {
    home: '홈',
    business: '사업영역',
    contact: '연락처',
    cta: '문의하기',
    menuAriaLabel: '메뉴 열기',
    logoText: '천',
  },
  hero: {
    badge: '+10년 전통의 글로벌 수출무역 전문기업',
    headingLine1: '대륙간 무역을 선도하는,',
    headingLine2: '천강무역의 글로벌 네트워크',
    descriptionPrefix: '+10년간 구축한 대륙간 물류 인프라와 대형 제조사 직접 파트너십으로',
    descriptionHighlight1: '50+ 글로벌 브랜드',
    descriptionMid: '와 함께',
    descriptionHighlight2: ' 중공업급 국제무역',
    descriptionSuffix: '의 새로운 표준을 제시합니다',
    ctaPrimary: '글로벌 파트너십 문의',
    ctaSecondary: '기업 수출 솔루션 안내',
  },
  stats: [
    { number: '50+', label: '글로벌 파트너사', description: '세계 주요 제조사 및 브랜드' },
    { number: '25+', label: '수출 대상국', description: '아시아·유럽·아메리카 전역' },
    { number: '+10년', label: '무역 전문 경력', description: '축적된 국제무역 노하우' },
    { number: '24/7', label: '글로벌 네트워크', description: '전세계 실시간 무역 지원' },
  ],
  business: {
    badge: '핵심 사업영역',
    headingLine1: '중공업급 글로벌 인프라로',
    headingLine2: '대륙간 무역을 선도합니다',
    descriptionPrefix: '대형 제조사 직접 파트너십부터 대률간 물류 네트워크까지,',
    descriptionHighlight: ' +10년 경력의 종합 수출무역 전문 서비스',
    descriptionSuffix: '를 제공합니다',
    learnMore: '자세히 알아보기',
    ctaHeading: '🌐 글로벌 수출무역에 도전하시나요?',
    ctaDescription: '대형 제조사 직접 파트너십부터 대률간 물류 인프라까지, 천강무역과 함께 역동적 글로벌 비즈니스 성장을 실현하세요',
    ctaPrimary: '🌍 글로벌 파트너십 문의',
    ctaSecondary: '📨 수출무역 솔루션 안내',
    areas: [
      {
        id: 'manufacturing-export',
        title: '대규모 제조업 수출',
        description: '글로벌 제조사와의 직접 계약을 통한 대량 수출',
        details: '수십년간 구축된 글로벌 제조업 네트워크를 기반으로 화장품, 전자제품, 생활용품 등의 대규모 수출 프로젝트를 전담하며, 연간 수십억 규모의 국제무역을 성공적으로 수행합니다.',
      },
      {
        id: 'luxury-distribution',
        title: '프리미엄 브랜드 유통',
        description: '국제 명품 브랜드의 아시아 총판 서비스',
        details: '디올, 샤넬 등 세계 최고급 브랜드와의 독점 파트너십을 통해 아시아 전역의 프리미엄 유통망을 구축하고 있으며, 엄격한 품질관리와 브랜드 가치 보호를 최우선으로 합니다.',
      },
      {
        id: 'global-logistics',
        title: '국제물류 인프라',
        description: '대륙간 물류 네트워크 및 통관 서비스',
        details: '아시아-유럽-아메리카를 연결하는 통합 물류 시스템과 각국 통관 전문가 네트워크를 보유하여 복잡한 국제무역 절차를 원스톱으로 처리하는 토탈 솔루션을 제공합니다.',
      },
      {
        id: 'digital-trade',
        title: '디지털 무역 플랫폼',
        description: '차세대 온라인 B2B 글로벌 거래 시스템',
        details: 'AI 기반 시장 분석과 블록체인 기술을 활용한 투명한 거래 시스템으로 전통적인 무역 방식을 혁신하며, 실시간 글로벌 파트너 매칭과 스마트 계약을 통해 무역 효율성을 극대화합니다.',
      },
    ],
  },
  brandStrip: {
    heading: 'TRUSTED BY PREMIUM BRANDS',
    brands: [
      '디올', '샤넬', '그린셀렙', '이자녹스', '셀트리온', '메디필', '메디힐', '제이준',
      '빌리프', '아누아', '성분에디터', '조선미녀', '차앤박', '사임당', '스킨1004', '비비안',
      'Agatha', 'abeehums', 'geecoon', 'Galaxy Corporation',
      '주식회사 더 폴', '(주)가디뷰이', 'ER콘텐츠미디어그룹',
    ],
  },
  contact: {
    badge: '연락하기',
    headingLine1: '글로벌 진출의 시작,',
    headingLine2: '천강무역과 함께하세요',
    descriptionPrefix: '대형 제조사 직접 파트너십부터 대률간 물류 인프라까지,',
    descriptionHighlight: '여러분의 글로벌 비즈니스 성장',
    descriptionSuffix: '을 함께 만들어갑니다',
    recommended: '추천',
    options: [
      { title: '사업 제휴 문의', description: '새로운 브랜드 입점 및 파트너십', action: '제휴 문의하기' },
      { title: '글로벌 수출 상담', description: '해외 진출 및 라이브커머스 상담', action: '수출 상담하기' },
      { title: '물류/유통 서비스', description: '물류 대행 및 유통망 연결', action: '물류 문의하기' },
      { title: '라이브커머스 진행', description: '실시간 방송 판매 서비스', action: '방송 문의하기' },
    ],
    companyInfoHeading: '회사 정보',
    ceoLabel: '대표이사',
    ceoPrefix: '대표이사: ',
    phoneLabel: '연락처',
    emailLabel: '이메일',
    addressLabel: '주소',
    viewMap: '지도보기',
    quickInquiry: '빠른 문의',
    formNamePlaceholder: '회사명/담당자명',
    formEmailPlaceholder: '이메일 주소',
    formTypePlaceholder: '문의 유형을 선택하세요',
    formTypeOptions: [
      { value: '사업 제휴', label: '사업 제휴' },
      { value: '글로벌 수출', label: '글로벌 수출' },
      { value: '물류/유통', label: '물류/유통' },
      { value: '라이브커머스', label: '라이브커머스' },
    ],
    formMessagePlaceholder: '문의 내용을 자세히 적어주세요...',
    formSubmit: '문의 보내기',
    formSubmitting: '전송 중...',
    formSuccess: '문의가 성공적으로 전송되었습니다!',
    formError: '전송에 실패했습니다. 다시 시도해주세요.',
    formFooterPrefix: '문의 접수 후 ',
    formFooterHighlight: '24시간 내',
    formFooterSuffix: '에 담당자가 연락드립니다',
    footerQuote: '글로벌 무역의 새로운 기준, 세계를 연결하다',
  },
  company: {
    name: '천강무역',
    englishName: 'Cheon-Gang Global Trade',
    description: '중공업급 글로벌 수출 인프라를 기반으로 화장품, 패션, 명품, 생활용품 등의 대규모 국제무역을 전담하는 종합 수출무역 전문기업입니다.',
  },
};

const en: Translations = {
  nav: {
    home: 'Home',
    business: 'Business',
    contact: 'Contact',
    cta: 'Contact Us',
    menuAriaLabel: 'Open menu',
    logoText: 'CG',
  },
  hero: {
    badge: '10+ Years of Global Export Trade Expertise',
    headingLine1: 'Leading Intercontinental Trade,',
    headingLine2: "Cheon-Gang's Global Network",
    descriptionPrefix: 'With 10+ years of intercontinental logistics infrastructure and direct manufacturer partnerships,',
    descriptionHighlight1: '50+ Global Brands',
    descriptionMid: ' together setting',
    descriptionHighlight2: ' heavy-industry-grade trade',
    descriptionSuffix: ' new standards',
    ctaPrimary: 'Global Partnership Inquiry',
    ctaSecondary: 'Export Solutions Guide',
  },
  stats: [
    { number: '50+', label: 'Global Partners', description: 'Major manufacturers & brands' },
    { number: '25+', label: 'Export Countries', description: 'Across Asia, Europe & Americas' },
    { number: '10+', label: 'Years of Expertise', description: 'Accumulated trade know-how' },
    { number: '24/7', label: 'Global Network', description: 'Real-time worldwide support' },
  ],
  business: {
    badge: 'Core Business Areas',
    headingLine1: 'With Heavy-Industry-Grade Global Infrastructure,',
    headingLine2: 'Leading Intercontinental Trade',
    descriptionPrefix: 'From direct manufacturer partnerships to intercontinental logistics networks,',
    descriptionHighlight: ' 10+ years of comprehensive export trade services',
    descriptionSuffix: '',
    learnMore: 'Learn More',
    ctaHeading: '🌐 Ready to Go Global?',
    ctaDescription: 'From direct manufacturer partnerships to intercontinental logistics infrastructure, achieve dynamic global business growth with Cheon-Gang Trade.',
    ctaPrimary: '🌍 Global Partnership Inquiry',
    ctaSecondary: '📨 Export Solutions Guide',
    areas: [
      {
        id: 'manufacturing-export',
        title: 'Large-Scale Manufacturing Export',
        description: 'Mass exports through direct contracts with global manufacturers',
        details: 'Based on decades of global manufacturing networks, we manage large-scale export projects across cosmetics, electronics, and daily necessities, successfully handling billions in international trade annually.',
      },
      {
        id: 'luxury-distribution',
        title: 'Premium Brand Distribution',
        description: 'Asian distribution for international luxury brands',
        details: 'Through exclusive partnerships with world-class brands like Dior and Chanel, we build premium distribution networks across Asia, prioritizing strict quality control and brand value protection.',
      },
      {
        id: 'global-logistics',
        title: 'International Logistics Infrastructure',
        description: 'Intercontinental logistics network & customs services',
        details: 'With integrated logistics systems connecting Asia-Europe-Americas and customs expert networks in each country, we provide total solutions for complex international trade procedures.',
      },
      {
        id: 'digital-trade',
        title: 'Digital Trade Platform',
        description: 'Next-gen online B2B global trading system',
        details: 'Innovating traditional trade methods with AI-based market analysis and blockchain-powered transparent trading systems, maximizing trade efficiency through real-time global partner matching and smart contracts.',
      },
    ],
  },
  brandStrip: {
    heading: 'TRUSTED BY PREMIUM BRANDS',
    brands: [
      'Dior', 'Chanel', 'Green Celeb', 'ISA KNOX', 'Celltrion', 'Medipeel', 'Mediheal', 'Jayjun',
      'Belif', 'Anua', 'Skintegrator', 'Beauty of Joseon', 'CNP', 'Saimdang', 'Skin1004', 'Vivien',
      'Agatha', 'abeehums', 'geecoon', 'Galaxy Corporation',
      'The Paul Inc.', 'Gadibuyi', 'ER Contents Media Group',
    ],
  },
  contact: {
    badge: 'Contact Us',
    headingLine1: 'Start Your Global Expansion,',
    headingLine2: 'Partner with Cheon-Gang Trade',
    descriptionPrefix: 'From direct manufacturer partnerships to intercontinental logistics infrastructure,',
    descriptionHighlight: "your global business growth",
    descriptionSuffix: ' — let\'s build it together',
    recommended: 'Featured',
    options: [
      { title: 'Business Partnership', description: 'New brand onboarding & partnerships', action: 'Inquire Partnership' },
      { title: 'Global Export Consulting', description: 'Overseas expansion & live commerce', action: 'Get Consultation' },
      { title: 'Logistics & Distribution', description: 'Logistics agency & distribution network', action: 'Inquire Logistics' },
      { title: 'Live Commerce Services', description: 'Real-time broadcast sales services', action: 'Inquire Broadcasting' },
    ],
    companyInfoHeading: 'Company Info',
    ceoLabel: 'CEO',
    ceoPrefix: 'CEO: ',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    viewMap: 'View Map',
    quickInquiry: 'Quick Inquiry',
    formNamePlaceholder: 'Company / Contact Name',
    formEmailPlaceholder: 'Email Address',
    formTypePlaceholder: 'Select inquiry type',
    formTypeOptions: [
      { value: 'Business Partnership', label: 'Business Partnership' },
      { value: 'Global Export', label: 'Global Export' },
      { value: 'Logistics/Distribution', label: 'Logistics / Distribution' },
      { value: 'Live Commerce', label: 'Live Commerce' },
    ],
    formMessagePlaceholder: 'Please describe your inquiry in detail...',
    formSubmit: 'Send Inquiry',
    formSubmitting: 'Sending...',
    formSuccess: 'Your inquiry has been sent successfully!',
    formError: 'Failed to send. Please try again.',
    formFooterPrefix: 'A representative will contact you ',
    formFooterHighlight: 'within 24 hours',
    formFooterSuffix: ' after submission',
    footerQuote: 'Setting New Standards in Global Trade, Connecting the World',
  },
  company: {
    name: 'Cheon-Gang Trade',
    englishName: 'Cheon-Gang Global Trade',
    description: 'A comprehensive export trade company specializing in large-scale international trade of cosmetics, fashion, luxury goods, and daily necessities, based on heavy-industry-grade global export infrastructure.',
  },
};

export const translations: Record<Language, Translations> = { ko, en };
