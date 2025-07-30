// 유백무역 회사 정보 데이터

export const companyInfo = {
  name: '유백무역',
  englishName: 'U-Baek Trade',
  slogan: 'K-뷰티를 세계로, 라이브로 연결하다',
  description: '원청라인 및 총판 가격 절감 후, 화장품, 건식, 악세사리, 가방, 잡화 등의 물류를 국내 및 글로벌 수출 도·소매 유통과 수출 무역하는 전문 기업입니다.',
  subDescription: '빅셀러들과 탄탄한 물류 유통망을 대량 보유하고 있으며, 라이브 커머스를 통해 국내는 물론 러시아, 몽골, 베트남 등 해외 각국에 물류 수출을 주관하고 있습니다.',
};

export const businessAreas = [
  {
    id: 'k-beauty',
    title: 'K-뷰티 수출',
    description: '화장품 브랜드 글로벌 진출 지원',
    icon: '',
    details: '한국 화장품의 세계화를 선도하며, 다양한 K-뷰티 브랜드의 해외 진출을 전문적으로 지원합니다.'
  },
  {
    id: 'fashion',
    title: '패션/잡화',
    description: '악세사리, 가방, 의류 등 종합 유통',
    icon: '',
    details: '트렌디한 패션 아이템부터 실용적인 잡화까지, 폭넓은 상품 라인업으로 고객의 다양한 니즈를 충족합니다.'
  },
  {
    id: 'luxury',
    title: '명품 유통',
    description: '디올, 샤넬 등 럭셔리 브랜드 취급',
    icon: '',
    details: '세계적인 명품 브랜드와의 파트너십을 통해 프리미엄 제품의 안정적인 공급과 유통을 담당합니다.'
  },
  {
    id: 'live-commerce',
    title: '라이브커머스',
    description: '실시간 방송을 통한 글로벌 판매',
    icon: '',
    details: '혁신적인 라이브커머스 플랫폼을 통해 실시간으로 고객과 소통하며 글로벌 시장에 진출합니다.'
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
    title: '원청/총판 직접 연결',
    description: '중간 마진 없는 최고의 가격 경쟁력',
    icon: '💰'
  },
  {
    title: '빅셀러 물류 유통망',
    description: '검증된 대량 물류 시스템 보유',
    icon: '📦'
  },
  {
    title: '라이브커머스 전문성',
    description: '실시간 글로벌 판매 노하우',
    icon: '🎯'
  },
  {
    title: '30+ 프리미엄 브랜드',
    description: '디올, 샤넬 등 명품 브랜드 파트너십',
    icon: '⭐'
  }
];

export const stats = [
  {
    number: '30+',
    label: '협력 브랜드',
    description: '디올, 샤넬, 셀트리온 등'
  },
  {
    number: '4+',
    label: '글로벌 진출국',
    description: '러시아, 몽골, 베트남 등'
  },
  {
    number: '100%',
    label: '원청 직접 연결',
    description: '중간 마진 없는 최적 가격'
  },
  {
    number: '24/7',
    label: '글로벌 서비스',
    description: '실시간 라이브커머스'
  }
];

export const contactInfo = {
  email: 'contact@ubaek-trade.com',
  phone: '+82-2-1234-5678',
  address: '서울특별시 강남구 테헤란로 123',
  businessHours: '평일 09:00 - 18:00'
};