export async function GET() {
  const baseUrl = 'https://cheongangtrade.com';
  const rfcDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>천강무역 - 글로벌 무역의 새로운 기준</title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>중공업급 글로벌 수출 인프라를 기반으로 화장품, 패션, 명품, 생활용품 등의 대규모 국제무역을 전담하는 종합 수출무역 전문기업입니다.</description>
    <language>ko</language>
    <lastBuildDate>${rfcDate}</lastBuildDate>
    <item>
      <title>천강무역 - 글로벌 무역의 새로운 기준, 세계를 연결하다</title>
      <link>${baseUrl}/</link>
      <description>천강무역은 중공업급 글로벌 수출 인프라를 기반으로 화장품, 패션, 명품, 생활용품 등의 대규모 국제무역을 전담하는 종합 수출무역 전문기업입니다. 다수의 프로젝트를 통해 검증된 글로벌 물류 네트워크와 대형 제조사 직접 파트너십을 통해 아시아-유럽 전역의 수출무역을 주도하며, 차세대 디지털 무역 플랫폼으로 국제무역의 새로운 표준을 제시합니다.</description>
      <pubDate>${rfcDate}</pubDate>
      <guid>${baseUrl}/</guid>
    </item>
  </channel>
</rss>`;

  return new Response(rss, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
