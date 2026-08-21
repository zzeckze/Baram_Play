exports.handler = async (event) => {
  const qs = event.queryStringParameters || {};
  const code = qs.code;
  if (!code) {
    return { statusCode: 400, headers: {"Content-Type":"text/html; charset=utf-8"},
      body: "<h2>카카오 로그인 코드가 없습니다.</h2><p>다시 로그인해주세요.</p>" };
  }

  // 실제 토큰 교환은 서버 환경변수에 REST API 키를 넣은 뒤 이 함수에 추가합니다.
  // 현재 단계에서는 OAuth 콜백 도착 여부를 확인하는 화면만 제공합니다.
  return {
    statusCode: 200,
    headers: {"Content-Type":"text/html; charset=utf-8"},
    body: `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>THEATER-CLOWN</title></head><body style="font-family:sans-serif;text-align:center;padding:50px"><h2>카카오 인증 완료</h2><p>로그인 연결 준비가 완료되었습니다.</p><p><a href="/">THEATER-CLOWN으로 돌아가기</a></p></body></html>`
  };
};
