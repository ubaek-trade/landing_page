export async function GET() {
  const baseUrl = 'https://cheongangtrade.com';
  const currentDate = new Date().toISOString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>천강무역 - 글로벌 무역의 새로운 기준</title>
    <link>${baseUrl}</link>
    <description>중공업급 글로벌 수출 인프라를 기반으로 화장품, 패션, 명품, 생활용품 등의 대규모 국제무역을 전담하는 종합 수출무역 전문기업입니다.</description>
    <language>ko-kr</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <item>
      <title>천강무역 - 글로벌 무역의 새로운 기준, 세계를 연결하다</title>
      <link>${baseUrl}</link>
      <description>다수의 프로젝트 노하우와 50+ 글로벌 파트너사와 함께하는 종합 수출무역 전문기업</description>
      <pubDate>${currentDate}</pubDate>
      <lastModified>${currentDate}</lastModified>
      <content:encoded><![CDATA[
        <p>천강무역은 중공업급 글로벌 수출 인프라를 기반으로 화장품, 패션, 명품, 생활용품 등의 대규모 국제무역을 전담하는 종합 수출무역 전문기업입니다.</p>
        <p>다수의 프로젝트를 통해 검증된 글로벌 물류 네트워크와 대형 제조사 직접 파트너십을 통해 아시아-유럽 전역의 수출무역을 주도하며, 차세대 디지털 무역 플랫폼으로 국제무역의 새로운 표준을 제시합니다.</p>
      ]]></content:encoded>
    </item>
  </channel>
</rss>`;

  return new Response(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
