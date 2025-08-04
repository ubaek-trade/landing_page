// 천강무역 회사 정보 데이터

export const companyInfo = {
  name: '천강무역',
  englishName: 'Cheong-Gang Global Trade',
  slogan: '글로벌 무역의 새로운 기준, 세계를 연결하다',
  description: '중공업급 글로벌 수출 인프라를 기반으로 화장품, 패션, 명품, 생활용품 등의 대규모 국제무역을 전담하는 종합 수출무역 전문기업입니다.',
  subDescription: '수십년간 축적된 글로벌 물류 네트워크와 대형 제조사 직접 파트너십을 통해 아시아-유럽 전역의 수출무역을 주도하며, 차세대 디지털 무역 플랫폼으로 국제무역의 새로운 표준을 제시합니다.',
};

export const businessAreas = [
  {
    id: 'manufacturing-export',
    title: '대규모 제조업 수출',
    description: '글로벌 제조사와의 직접 계약을 통한 대량 수출',
    icon: '',
    details: '수십년간 구축된 글로벌 제조업 네트워크를 기반으로 화장품, 전자제품, 생활용품 등의 대규모 수출 프로젝트를 전담하며, 연간 수십억 규모의 국제무역을 성공적으로 수행합니다.'
  },
  {
    id: 'luxury-distribution',
    title: '프리미엄 브랜드 유통',
    description: '국제 명품 브랜드의 아시아 총판 서비스',
    icon: '',
    details: '디올, 샤넬 등 세계 최고급 브랜드와의 독점 파트너십을 통해 아시아 전역의 프리미엄 유통망을 구축하고 있으며, 엄격한 품질관리와 브랜드 가치 보호를 최우선으로 합니다.'
  },
  {
    id: 'global-logistics',
    title: '국제물류 인프라',
    description: '대륙간 물류 네트워크 및 통관 서비스',
    icon: '',
    details: '아시아-유럽-아메리카를 연결하는 통합 물류 시스템과 각국 통관 전문가 네트워크를 보유하여 복잡한 국제무역 절차를 원스톱으로 처리하는 토탈 솔루션을 제공합니다.'
  },
  {
    id: 'digital-trade',
    title: '디지털 무역 플랫폼',
    description: '차세대 온라인 B2B 글로벌 거래 시스템',
    icon: '',
    details: 'AI 기반 시장 분석과 블록체인 기술을 활용한 투명한 거래 시스템으로 전통적인 무역 방식을 혁신하며, 실시간 글로벌 파트너 매칭과 스마트 계약을 통해 무역 효율성을 극대화합니다.'
  }
];

export const partnerBrands = {
  cosmetics: [
    { name: '디올', color: '#000000', category: 'luxury', icon: '💎', brandStyle: 'elegant' },
    { name: '샤넬', color: '#000000', category: 'luxury', icon: '🖤', brandStyle: 'classic' },
    { name: '그린셀렙', color: '#2ECC71', category: 'korean', icon: '🌿', brandStyle: 'natural' },
    { name: '이자녹스', color: '#E74C3C', category: 'korean', icon: '💋', brandStyle: 'bold' },
    { name: '셀트리온', color: '#3498DB', category: 'korean', icon: '🧬', brandStyle: 'scientific' },
    { name: '메디필', color: '#9B59B6', category: 'korean', icon: '💜', brandStyle: 'medical' },
    { name: '메디힐', color: '#1ABC9C', category: 'korean', icon: '🌊', brandStyle: 'fresh' },
    { name: '제이준', color: '#F39C12', category: 'korean', icon: '☀️', brandStyle: 'bright' },
    { name: '빌리프', color: '#34495E', category: 'korean', icon: '🍃', brandStyle: 'minimal' },
    { name: '아누아', color: '#E67E22', category: 'korean', icon: '🧡', brandStyle: 'warm' },
    { name: '성분에디터', color: '#8E44AD', category: 'korean', icon: '🔬', brandStyle: 'expert' },
    { name: '조선미녀', color: '#C0392B', category: 'korean', icon: '🌸', brandStyle: 'traditional' },
    { name: '차앤박', color: '#27AE60', category: 'korean', icon: '🌱', brandStyle: 'organic' },
    { name: '사임당', color: '#D35400', category: 'korean', icon: '🎨', brandStyle: 'artistic' },
    { name: '스킨1004', color: '#2980B9', category: 'korean', icon: '❄️', brandStyle: 'cooling' }
  ],
  fashion: [
    { name: '비비안', color: '#8E44AD', category: 'luxury', icon: '👑', brandStyle: 'royal' },
    { name: '디어마이듀', color: '#E91E63', category: 'korean', icon: '💝', brandStyle: 'lovely' },
    { name: '프리미엄 가방', color: '#795548', category: 'accessory', icon: '👜', brandStyle: 'luxury' },
    { name: '명품 액세서리', color: '#FF9800', category: 'accessory', icon: '✨', brandStyle: 'premium' },
    { name: '트렌디 잡화', color: '#607D8B', category: 'accessory', icon: '🎯', brandStyle: 'trendy' }
  ]
};

export const globalMarkets = [
  {
    country: '러시아',
    flag: '🇷🇺',
    focus: '라이브커머스 기반 K-뷰티 수출',
    description: '현지 소비자들에게 인기 높은 한국 화장품을 실시간 방송으로 소개하고 판매'
  },
  {
    country: '몽골',
    flag: '🇲🇳',
    focus: '화장품/잡화 유통',
    description: '몽골 시장의 특성에 맞는 다양한 뷰티 및 생활용품 공급'
  },
  {
    country: '베트남',
    flag: '🇻🇳',
    focus: '종합 물류 수출',
    description: '빠르게 성장하는 베트남 시장에 종합적인 한국 제품 수출'
  },
  {
    country: '한국',
    flag: '🇰🇷',
    focus: '도소매 유통 네트워크',
    description: '국내 시장에서의 안정적인 유통 네트워크 운영'
  }
];

export const companyStrengths = [
  {
    title: '글로벌 제조사 직접 파트너십',
    description: '세계 주요 제조업체와의 독점 계약을 통한 원가 경쟁력',
    icon: '💰'
  },
  {
    title: '대륙간 물류 인프라',
    description: '+10년간 구축한 글로벌 물류 네트워크 및 통관 시스템',
    icon: '📦'
  },
  {
    title: '디지털 무역 혁신',
    description: 'AI·블록체인 기반 차세대 무역 플랫폼 운영',
    icon: '🎯'
  },
  {
    title: '50+ 글로벌 브랜드',
    description: '세계 최고급 브랜드들과의 장기 파트너십 보유',
    icon: '⭐'
  }
];

export const stats = [
  {
    number: '50+',
    label: '글로벌 파트너사',
    description: '세계 주요 제조사 및 브랜드'
  },
  {
    number: '25+',
    label: '수출 대상국',
    description: '아시아·유럽·아메리카 전역'
  },
  {
    number: '+10년',
    label: '무역 전문 경력',
    description: '축적된 국제무역 노하우'
  },
  {
    number: '24/7',
    label: '글로벌 네트워크',
    description: '전세계 실시간 무역 지원'
  }
];

export const contactInfo = {
  email: 'global@cheonggang-trade.com',
  phone: '+82-2-3456-7890',
  address: '서울특별시 중구 세종대로 110 (무역센터)',
  businessHours: '평일 09:00 - 18:00 (GMT+9)'
};