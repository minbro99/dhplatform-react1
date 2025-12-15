import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SearchIcon from '@mui/icons-material/Search';

export default function Header3() {
  const navigate = useNavigate();
  const [hoveredMenu, setHoveredMenu] = React.useState(null);
  const menuRefs = React.useRef({});

  const menuItems = [
    {
      label: '대시보드',
      subMenu: [{ label: '대시보드', path: '/dashboard' }],
    },
    {
      label: '시설별 에너지',
      subMenu: [
        { label: '공용부 시설 에너지 ', path: '/energy/public' },
        { label: '세대별 에너지 ', path: '/energy/household' },
      ],
    },
    {
      label: '에너지 시뮬레이터',
      subMenu: [{ label: '시뮬레이터', path: '/simulator' }],
    },
    {
      label: '전력 인프라 관제',
      subMenu: [
        { label: '실시간 피크 모니터링', path: '/infra/peak' },
        { label: '태양광 발전 현황', path: '/infra/solar' },
        { label: '전기차 충전 현황', path: '/infra/ev' },
      ],
    },
    {
      label: '시민발전소',
      subMenu: [
        { label: '종합 현황', path: '/citizen/status' },
        { label: '데이터 조회', path: '/citizen/data' },
      ],
    },
  ];

  const handleMouseEnter = (label) => setHoveredMenu(label);
  const handleMouseLeave = () => setHoveredMenu(null);

  const handleNavigate = (path) => {
    navigate(path);
    setHoveredMenu(null);
  };

  return (
    <header
      className="w-full bg-white fixed top-0 left-0 z-50 border-b border-gray-200"
      onMouseLeave={handleMouseLeave}
    >
      {/* ✅ 상단 헤더 */}
      <div className="flex items-center justify-between px-12 py-4">
        {/* 로고 */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/icons/management_001.svg"
            alt="에너지 관리"
            className="w-10 h-10"
          />
          <div className="flex flex-col leading-tight text-center">
            <h1 className="text-2xl font-bold text-[#6DC184]">아파트</h1>
              <p className="text-sm text-[#6DC184]">에너지 관리 플랫폼</p>
          </div>
        </div>

        {/* ✅ 상위 메뉴 */}
        <nav className="hidden md:flex" style={{ gap: '50px' }}>
          {menuItems.map((menu) => (
            <div
              key={menu.label}
              ref={(el) => (menuRefs.current[menu.label] = el)}
              className="relative flex flex-col items-center"
              style={{
                borderBottom: hoveredMenu === menu.label ? '3px solid #6DC184' : 'none',
                paddingBottom: '4px'
              }}
              onMouseEnter={() => handleMouseEnter(menu.label)}
            >
              <Button
                sx={{
                  textTransform: 'none',
                  color: '#333',
                  fontWeight: 600,
                  fontSize: '1rem',
                  '&:hover': {
                    background: 'transparent'
                  },
                }}
              >
                {menu.label}
              </Button>
            </div>
          ))}
        </nav>

        {/* 로그인/검색 */}
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-1 text-black hover:opacity-70 transition-opacity cursor-pointer"
            onClick={() => navigate('/login')}
          >
            <LoginIcon sx={{ fontSize: '1.25rem' }} />
            <span className="text-sm">로그인</span>
          </div>
          <div className="flex items-center gap-1 text-black hover:opacity-70 transition-opacity cursor-pointer">
            <SearchIcon sx={{ fontSize: '1.25rem' }} />
            <span className="text-sm">검색</span>
          </div>
        </div>
      </div>

      {/* ✅ 하단 메가 드롭다운 - 전체 서브메뉴를 상위 메뉴 아래에 배치 */}
      {hoveredMenu && (
        <div
          className="absolute w-full bg-white z-40 border-t border-gray-100 shadow-sm"
          style={{
            top: '100%',
            left: 0,
          }}
        >
          <div className="w-full pb-6 flex justify-center" style={{ paddingTop: '18px' }}>
            {/* ✅ 전체 메뉴를 중앙 정렬로 배치 */}
            <div className="flex justify-center" style={{ gap: '46px', marginLeft: '25px' }}>
              {menuItems.map((menu) => (
                <div
                  key={menu.label}
                  className="flex flex-col items-center text-center">
                  <div className="flex flex-col gap-4 items-center">
                    {menu.subMenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavigate(sub.path)}
                        className="text-sm text-black bg-transparent border-0 focus:outline-none transition-colors whitespace-nowrap hover:opacity-60 py-1 text-center">
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
