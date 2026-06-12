import {
  Bell,
  CalendarDays,
  CreditCard,
  HelpCircle,
  Home,
  KeyRound,
  Lock,
  Mail,
  MoreVertical,
  Pencil,
  Plus,
  RotateCcw,
  Save,
  ShieldCheck,
  Trash2,
  UserRound,
  WalletCards,
  Clock,
  Download,
  UploadCloud,
  Cloud,
  MessageSquare,
  Info,
  Building2,
  List,
  Moon,
  Sun,
  CircleDollarSign,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-7 py-6">
      {/* 상단 영역 */}
      <div className="mb-7 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">설정</h1>

        <div className="flex items-center gap-4">
          <Bell size={21} className="text-slate-600" />
          <HelpCircle size={21} className="text-slate-600" />
          <UserRound size={21} className="text-slate-600" />

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
            <Plus size={18} />
            변경사항 저장
          </button>
        </div>
      </div>

      {/* 전체 그리드 */}
      <div className="grid grid-cols-3 gap-5">
        {/* 프로필 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-bold text-slate-900">프로필</h2>

          <div className="mb-7 flex items-center gap-8">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-800 text-4xl font-semibold text-white shadow-md">
                N
              </div>

              <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm">
                <Pencil size={15} />
              </button>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  이름
                </label>
                <input
                  defaultValue="김기현"
                  className="h-10 w-32 rounded-lg border border-slate-200 px-3 text-sm font-medium outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  이메일
                </label>
                <div className="flex gap-3">
                  <input
                    defaultValue="gahyuh.kim@example.com"
                    className="h-10 flex-1 rounded-lg border border-slate-200 px-3 text-sm font-medium outline-none focus:border-blue-500"
                  />
                  <button className="rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    변경
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                기본 통화
              </label>
              <select className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm font-semibold text-slate-700 outline-none">
                <option>KRW (원)</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                월 시작일
              </label>
              <select className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm font-semibold text-slate-700 outline-none">
                <option>1일</option>
              </select>
            </div>
          </div>

          <p className="mt-4 text-sm font-medium text-slate-500">
            월 시작일은 예산 및 통계 계산에 적용됩니다.
          </p>
        </section>

        {/* 알림 설정 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-bold text-slate-900">알림 설정</h2>

          <div className="space-y-5">
            <SettingToggle
              icon={<Bell size={19} />}
              title="푸시 알림"
              desc="주요 알림을 푸시로 받습니다."
              active
            />

            <SettingToggle
              icon={<Clock size={19} />}
              title="예산 초과 알림"
              desc="예산을 초과하면 알림을 받습니다."
              active
            />

            <SettingToggle
              icon={<CalendarDays size={19} />}
              title="정기 리포트 알림"
              desc="매월 1일에 요약 리포트를 받습니다."
            />

            <SettingToggle
              icon={<CreditCard size={19} />}
              title="카드 결제 알림"
              desc="카드 사용 내역을 알림으로 받습니다."
              active
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <IconBox>
                  <Clock size={19} />
                </IconBox>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    알림 시간 설정
                  </p>
                </div>
              </div>

              <select className="h-10 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 outline-none">
                <option>오전 09:00</option>
              </select>
            </div>
          </div>
        </section>

        {/* 계정 보안 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-bold text-slate-900">계정 보안</h2>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <SecurityItem
              icon={<Lock size={19} />}
              title="비밀번호 변경"
              desc="정기적으로 비밀번호를 변경하세요."
            />

            <SecurityItem
              icon={<ShieldCheck size={19} />}
              title="2단계 인증"
              desc="계정 보안을 강화합니다."
              status="사용 중"
            />

            <SecurityItem
              icon={<Clock size={19} />}
              title="로그인 내역"
              desc="최근 로그인 활동을 확인합니다."
            />

            <SecurityItem
              icon={<Trash2 size={19} />}
              title="계정 탈퇴"
              desc="계정 및 모든 데이터를 삭제합니다."
              last
            />
          </div>
        </section>

        {/* 카테고리 관리 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                카테고리 관리
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-500">
                지출/수입 카테고리를 관리하고 색상과 아이콘을 설정하세요.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50">
              <Plus size={16} />
              카테고리 추가
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-xs font-bold text-slate-500">
                <tr>
                  <th className="px-4 py-3 text-left">카테고리</th>
                  <th className="px-4 py-3 text-left">구분</th>
                  <th className="px-4 py-3 text-left">색상</th>
                  <th className="px-4 py-3 text-left">아이콘</th>
                  <th className="px-4 py-3 text-center">관리</th>
                </tr>
              </thead>

              <tbody>
                <CategoryRow name="식비" type="지출" color="bg-blue-500" icon="🍴" />
                <CategoryRow name="교통" type="지출" color="bg-red-500" icon="🚌" />
                <CategoryRow name="주거비" type="지출" color="bg-orange-400" icon="🏠" />
                <CategoryRow name="쇼핑" type="지출" color="bg-green-500" icon="🛍️" />
                <CategoryRow name="문화/여가" type="지출" color="bg-purple-500" icon="🎭" />
                <CategoryRow name="급여" type="수입" color="bg-cyan-500" icon="💳" />
              </tbody>
            </table>
          </div>

          <button className="mx-auto mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
            <RotateCcw size={16} />
            기본 카테고리 복원
          </button>
        </section>

        {/* 결제수단 관리 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                결제수단 관리
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-500">
                계좌, 카드 등 결제수단을 등록하고 관리하세요.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50">
              <Plus size={16} />
              결제수단 추가
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <PaymentRow
              icon={<WalletCards size={20} />}
              name="국민카드"
              desc="1234-****-****-5678"
              badge="기본"
            />

            <PaymentRow
              icon={<MessageSquare size={20} />}
              name="카카오페이"
              desc="kakao_***@gmail.com"
              yellow
            />

            <PaymentRow
              icon={<CreditCard size={20} />}
              name="토스카드"
              desc="9876-****-****-4321"
              blue
            />

            <PaymentRow
              icon={<Building2 size={20} />}
              name="계좌이체 (주거래)"
              desc="국민은행 123-456789-01-234"
            />

            <PaymentRow
              icon={<CreditCard size={20} />}
              name="삼성카드"
              desc="1111-****-****-2222"
              blue
            />
          </div>

          <button className="mx-auto mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
            숨긴 결제수단 보기 (1)
            <ChevronDown size={16} />
          </button>
        </section>

        {/* 연동 서비스 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">연동 서비스</h2>
          <p className="mt-1 mb-6 text-sm font-medium text-slate-500">
            외부 서비스와 연동하여 더 편리하게 관리하세요.
          </p>

          <div className="space-y-5">
            <ServiceRow
              iconText="💬"
              iconClass="bg-yellow-300"
              title="카카오톡 알림 연동"
              desc="카카오톡으로 알림을 받습니다."
              status="연동됨"
            />

            <ServiceRow
              iconText="N"
              iconClass="bg-green-500 text-white"
              title="네이버페이 연동"
              desc="네이버페이 결제내역을 가져옵니다."
              button="연동하기"
            />

            <ServiceRow
              icon={<Building2 size={19} />}
              iconClass="bg-slate-100 text-slate-600"
              title="은행 계좌 연동"
              desc="계좌 잔액 및 거래내역을 가져옵니다."
              button="연동 관리"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <IconBox>
                  <Cloud size={19} />
                </IconBox>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    클라우드 동기화
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    데이터를 클라우드에 안전하게 저장합니다.
                  </p>
                </div>
              </div>

              <Toggle active />
            </div>
          </div>
        </section>

        {/* 데이터 및 백업 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-bold text-slate-900">
            데이터 및 백업
          </h2>

          <div className="space-y-5">
            <DataRow
              icon={<Download size={20} />}
              title="데이터 내보내기"
              desc="내역 데이터를 CSV 파일로 내보냅니다."
              button="CSV 내보내기"
            />

            <DataRow
              icon={<UploadCloud size={20} />}
              title="데이터 백업"
              desc="현재 데이터를 백업 파일로 저장합니다."
              button="백업하기"
            />

            <DataRow
              icon={<Cloud size={20} />}
              title="데이터 복원"
              desc="백업 파일을 선택하여 데이터를 복원합니다."
              button="복원하기"
            />
          </div>
        </section>

        {/* 화면 설정 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-bold text-slate-900">화면 설정</h2>

          <div className="space-y-6">
            <div className="grid grid-cols-[1fr_180px] items-center gap-4">
              <div className="flex items-center gap-4">
                <IconBox>
                  <Sun size={19} />
                </IconBox>

                <div>
                  <p className="text-sm font-bold text-slate-800">테마 설정</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    라이트 / 다크 모드를 선택합니다.
                  </p>
                </div>
              </div>

              <div className="grid h-10 grid-cols-2 rounded-lg border border-slate-200 p-1">
                <button className="rounded-md bg-white text-sm font-bold text-blue-600 ring-1 ring-blue-500">
                  라이트
                </button>
                <button className="text-sm font-bold text-slate-600">
                  다크
                </button>
              </div>
            </div>

            <DisplaySelect
              icon={<List size={19} />}
              title="밀도 설정"
              desc="화면 요소의 간격을 조절합니다."
              value="기본"
            />

            <DisplaySelect
              icon={<CircleDollarSign size={19} />}
              title="금액 표시 방식"
              desc="금액 표시 방식을 선택합니다."
              value="천 단위 구분"
            />
          </div>
        </section>

        {/* 도움말 / 문의 */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-bold text-slate-900">
            도움말 / 문의
          </h2>

          <div className="space-y-1">
            <HelpRow
              icon={<HelpCircle size={19} />}
              title="자주 묻는 질문"
              desc="자주 묻는 질문을 확인해보세요."
            />

            <HelpRow
              icon={<MessageSquare size={19} />}
              title="문의하기"
              desc="문제가 발생했나요? 문의해 주세요."
            />

            <HelpRow
              icon={<Info size={19} />}
              title="서비스 정보"
              desc="버전 1.2.0 · 최신 버전입니다."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

/* =========================
   아래부터 재사용 컴포넌트
========================= */

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
      {children}
    </div>
  );
}

function Toggle({ active = false }: { active?: boolean }) {
  return (
    <button
      className={`relative h-6 w-11 rounded-full transition ${
        active ? "bg-blue-600" : "bg-slate-300"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
          active ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

function SettingToggle({
  icon,
  title,
  desc,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <IconBox>{icon}</IconBox>

        <div>
          <p className="text-sm font-bold text-slate-800">{title}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">{desc}</p>
        </div>
      </div>

      <Toggle active={active} />
    </div>
  );
}

function SecurityItem({
  icon,
  title,
  desc,
  status,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  status?: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-5 py-4 ${
        last ? "" : "border-b border-slate-200"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="text-slate-500">{icon}</div>

        <div>
          <p className="text-sm font-bold text-slate-800">{title}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">{desc}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {status && (
          <span className="text-xs font-bold text-green-600">{status}</span>
        )}
        <ChevronRight size={18} className="text-slate-500" />
      </div>
    </div>
  );
}

function CategoryRow({
  name,
  type,
  color,
  icon,
}: {
  name: string;
  type: "지출" | "수입";
  color: string;
  icon: string;
}) {
  return (
    <tr className="border-t border-slate-200">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <span className={`h-3 w-3 rounded-full ${color}`} />
          <span className="font-semibold text-slate-700">{name}</span>
        </div>
      </td>

      <td className="px-4 py-3">
        <span
          className={`rounded-md px-2 py-1 text-xs font-bold ${
            type === "지출"
              ? "bg-red-50 text-red-500"
              : "bg-blue-50 text-blue-500"
          }`}
        >
          {type}
        </span>
      </td>

      <td className="px-4 py-3">
        <span className={`block h-3 w-3 rounded-full ${color}`} />
      </td>

      <td className="px-4 py-3 text-base">{icon}</td>

      <td className="px-4 py-3">
        <div className="flex justify-center gap-3 text-slate-500">
          <button className="hover:text-blue-600">
            <Pencil size={16} />
          </button>
          <button className="hover:text-red-500">
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

function PaymentRow({
  icon,
  name,
  desc,
  badge,
  yellow = false,
  blue = false,
}: {
  icon: React.ReactNode;
  name: string;
  desc: string;
  badge?: string;
  yellow?: boolean;
  blue?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 last:border-b-0">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            yellow
              ? "bg-yellow-300 text-slate-900"
              : blue
              ? "bg-blue-50 text-blue-600"
              : "bg-slate-50 text-slate-600"
          }`}
        >
          {icon}
        </div>

        <div className="flex items-center gap-3">
          <p className="text-sm font-bold text-slate-800">{name}</p>
          <p className="text-sm font-semibold text-slate-500">{desc}</p>
          {badge && (
            <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-600">
              {badge}
            </span>
          )}
        </div>
      </div>

      <MoreVertical size={18} className="text-slate-500" />
    </div>
  );
}

function ServiceRow({
  icon,
  iconText,
  iconClass,
  title,
  desc,
  status,
  button,
}: {
  icon?: React.ReactNode;
  iconText?: string;
  iconClass: string;
  title: string;
  desc: string;
  status?: string;
  button?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black ${iconClass}`}
        >
          {icon ?? iconText}
        </div>

        <div>
          <p className="text-sm font-bold text-slate-800">{title}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">{desc}</p>
        </div>
      </div>

      {status && (
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-green-600">{status}</span>
          <ChevronRight size={18} className="text-slate-500" />
        </div>
      )}

      {button && (
        <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">
          {button}
        </button>
      )}
    </div>
  );
}

function DataRow({
  icon,
  title,
  desc,
  button,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  button: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_130px] items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="text-slate-500">{icon}</div>

        <div>
          <p className="text-sm font-bold text-slate-800">{title}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">{desc}</p>
        </div>
      </div>

      <button className="h-10 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50">
        {button}
      </button>
    </div>
  );
}

function DisplaySelect({
  icon,
  title,
  desc,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_180px] items-center gap-4">
      <div className="flex items-center gap-4">
        <IconBox>{icon}</IconBox>

        <div>
          <p className="text-sm font-bold text-slate-800">{title}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">{desc}</p>
        </div>
      </div>

      <select className="h-10 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 outline-none">
        <option>{value}</option>
      </select>
    </div>
  );
}

function HelpRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl px-2 py-4 hover:bg-slate-50">
      <div className="flex items-center gap-4">
        <div className="text-slate-500">{icon}</div>

        <div>
          <p className="text-sm font-bold text-slate-800">{title}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">{desc}</p>
        </div>
      </div>

      <ChevronRight size={18} className="text-slate-500" />
    </div>
  );
}