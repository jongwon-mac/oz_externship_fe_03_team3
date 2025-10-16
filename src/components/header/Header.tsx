import React from 'react'

type HeaderProps = {
  onStubClick?: (id: string) => void // 선택적: 클릭 로깅용
}

const Header: React.FC<HeaderProps> = ({ onStubClick }) => {
  const handleStub = (id: string) => {
    // 기능 없음: 클릭시 테스트용 콜백만 실행 (없어도 무방)
    onStubClick?.(id)
    // console.log(`[HEADER STUB CLICK] ${id}`);
  }

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* 좌측 로고 + 텍스트 */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="홈 (기능 없음)"
              onClick={() => handleStub('logo')}
              className="flex items-center gap-2 rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full font-semibold text-white"
                style={{ backgroundColor: '#f6c84c' }}
              >
                S
              </div>
              <span className="hidden font-semibold text-gray-800 sm:inline-block">
                StudyHub
              </span>
            </button>
          </div>

          {/* 중앙 네비 텍스트 (데스크탑에서만 보임) */}
          <nav className="hidden items-center gap-6 md:flex">
            <button
              type="button"
              aria-label="강의 목록 (기능 없음)"
              onClick={() => handleStub('nav_lecture')}
              className="rounded px-2 py-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              강의 목록
            </button>

            <button
              type="button"
              aria-label="스터디 그룹 (기능 없음)"
              onClick={() => handleStub('nav_study')}
              className="rounded px-2 py-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              스터디 그룹
            </button>

            <button
              type="button"
              aria-label="구인 공고 (기능 없음)"
              onClick={() => handleStub('nav_recruit')}
              className="rounded bg-yellow-50 px-2 py-1 text-sm text-yellow-600 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              구인 공고
            </button>
          </nav>

          {/* 우측 버튼군 */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="로그인 (기능 없음)"
              onClick={() => handleStub('login')}
              className="rounded px-3 py-1 text-sm text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              로그인
            </button>

            <button
              type="button"
              aria-label="회원가입 (기능 없음)"
              onClick={() => handleStub('signup')}
              className="text-sm font-medium text-white"
              style={{
                backgroundColor: '#f6c84c',
                padding: '6px 12px',
                borderRadius: 8,
              }}
            >
              회원가입
            </button>

            {/* 모바일 메뉴(햄버거) */}
            <button
              type="button"
              aria-label="모바일 메뉴 (기능 없음)"
              onClick={() => handleStub('mobile_menu')}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#374151"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
