export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        {/* 왼쪽 사이드 바 */}
        <aside className="w-[220px] shrink-0 border-r border-slate-200 bg-white">
          {/* 로고 */}
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-x1 bg-blue-600 text--white">
              로고
            </div>
            <span className="text-x1 font-bold text-blue-600">가계부</span>
          </div>

          {/* 메뉴 */}
          <nav className="space y-2">
            <div className="rounded-x1 bg-blue-50 px-4 py-3 font-semibold text-blue-600">
              홈
            </div>
            <div className="rounded-x1 px-4 py-3 text-slate-600">내역</div>
            <div className="rounded-x1 px-4 py-3 text-slate-600">예산</div>
            <div className="rounded-x1 px-4 py-3 text-slate-600">자산</div>
            <div className="rounded-x1 px-4 py-3 text-slate-600">보고서</div>
            <div className="rounded-x1 px-4 py-3 text-slate-600">캘린더</div>
            <div className="rounded-x1 px-4 py-3 text-slate-600">설정</div>
          </nav>

          {/* 아래 영역 밀어내기 */}
          <div className="mt-auto">
            {/* 안내카드 */}
            <div className="mb-6 rounded-2x1 bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-700">
              오늘도<br />
              현명한 소비 습관<br />
              기록해보세요!
            </div>

            {/* 사용자정보 */}
            <div className="border-t border-slate-200 pt-4">
              <div className="flext-items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200">
                  깡승
                </div>
                <span className="font-semibold text-slate-700">깡승 님</span>
              </div>
            </div>
          </div>
        </aside>

        {/* 가운데 메인 영역 */}
        <section className="flex-1 px-8 py-8">
          {/* 상단제목 영역 */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-3x1 font-bold text-slate-900">홈</h1>
              <p className="mt-2 text-sm text-slate-500">
                이번 달 수입과 지출을 한눈에 확인하세요.
              </p>
            </div>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-x1 shadow-sm">
            🔔
          </div>

          {/* 월 선택 + 버튼영역 */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="rounded-x1 border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                2026년
              </button>

              <button className="rounded-x1 border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                6월
              </button>
            </div>

            <button className="rounded-x1 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm">
              + 내역추가
            </button>
          </div>

          {/* 수입 / 지출 / 잔액 카드 영역 */}
          <div className="mb-8 grid grid-cols-3 gap-5">
            {/* 총 수입 카드 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-500">총 수입</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  ↑
                </div>
              </div>

              <p className="text-2xl font-bold text-slate-900">₩3,200,000</p>
              <p className="mt-2 text-sm text-blue-600">지난달 대비 +12%</p>
            </div>

            {/* 총 지출 카드 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-500">총 지출</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  ↓
                </div>
              </div>

              <p className="text-2xl font-bold text-slate-900">₩1,850,000</p>
              <p className="mt-2 text-sm text-red-500">지난달 대비 +8%</p>
            </div>

            {/* 잔액 카드 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-500">잔액</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  =
                </div>
              </div>

              <p className="text-2xl font-bold text-slate-900">₩1,350,000</p>
              <p className="mt-2 text-sm text-green-600">저축 가능 금액</p>
            </div>
          </div>

          {/* 거래 내역 테이블 영역 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            {/* 테이블 상단 */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">최근 거래 내역</h2>
                <p className="mt-1 text-sm text-slate-500">
                  이번 달 등록된 수입과 지출 내역입니다.
                </p>
              </div>

              <button className="text-sm font-semibold text-blue-600">전체 보기</button>
            </div>

            {/* 테이블 */}
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-500">
                      날짜
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-500">
                      내용
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-500">
                      카테고리
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-slate-500">
                      금액
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-4 text-sm text-slate-500">06.04</td>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                      월급
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-500">수입</td>
                    <td className="px-4 py-4 text-right text-sm font-bold text-blue-600">
                      +₩3,200,000
                    </td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-4 text-sm text-slate-500">06.03</td>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                      편의점
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-500">식비</td>
                    <td className="px-4 py-4 text-right text-sm font-bold text-red-500">
                      -₩8,500
                    </td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-4 text-sm text-slate-500">06.02</td>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                      교통카드 충전
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-500">교통</td>
                    <td className="px-4 py-4 text-right text-sm font-bold text-red-500">
                      -₩50,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 오른쪽 요약 패널 */}
       {/* 오른쪽 요약 패널 */}
<aside className="w-[340px] shrink-0 px-6 py-8">
  <div className="space-y-5">
    {/* 월 요약 카드 */}
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">6월 요약</h2>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">총 거래</span>
          <span className="font-bold text-slate-900">24건</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">평균 지출</span>
          <span className="font-bold text-slate-900">₩61,600</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">최대 지출</span>
          <span className="font-bold text-red-500">₩250,000</span>
        </div>
      </div>
    </div>

    {/* 이번 달 비교 카드 */}
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">이번 달 비교</h2>

      <div className="mt-5 space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-500">수입</span>
            <span className="text-sm font-bold text-blue-600">+12%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[72%] rounded-full bg-blue-500"></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-500">지출</span>
            <span className="text-sm font-bold text-red-500">+8%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[58%] rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>

    {/* 예산 현황 카드 */}
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">예산 현황</h2>
        <span className="text-sm font-semibold text-blue-600">65%</span>
      </div>

      <div className="h-3 rounded-full bg-slate-100">
        <div className="h-3 w-[65%] rounded-full bg-blue-600"></div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        이번 달 예산 ₩2,800,000 중 ₩1,850,000 사용
      </p>
    </div>
  </div>
</aside>
      </div>
    </main>
  );
}