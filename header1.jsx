import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header1() {
  const navigate = useNavigate();

  // 상태 관리
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedMenu, setSelectedMenu] = React.useState(null);

  // 메뉴 구조
  const menuItems = [
    { label: '대시보드', path: '/dashboard' },
    {
      label: '시설별 에너지',
      subMenu: [
        { label: '공용부 시설 에너지 대시보드', path: '/energy/public' },
        { label: '세대별 에너지 대시보드', path: '/energy/household' },
      ],
    },
    { label: '에너지 시뮬레이터', path: '/simulator' },
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
        { label: '시민발전소 현황', path: '/citizen/status' },
        { label: '시민발전소 데이터 조회', path: '/citizen/data' },
      ],
    },
  ];

  // 이벤트 핸들러
  const handleOpen = (event, label) => {
    setAnchorEl(event.currentTarget);
    setSelectedMenu(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedMenu(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between px-10 py-4">
        {/* 로고 영역 */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/icons/home-energy-management_001.svg"
            alt="에너지 관리"
            className="w-10 h-10"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold text-[#6DC184]">아파트</h1>
            <p className="text-sm text-[#6DC184]">에너지 관리 플랫폼</p>
          </div>
        </div>

        {/* ✅ 데스크탑 메뉴 */}
        <nav className="hidden md:flex gap-8 flex-1 justify-center">
          {menuItems.map((menu) => (
            <div key={menu.label} className="relative">
              <Button
                onClick={(e) =>
                  menu.subMenu ? handleOpen(e, menu.label) : handleNavigate(menu.path)
                }
                sx={{
                  textTransform: 'none',
                  color: '#333',
                  fontWeight: 600,
                  fontSize: '1rem',
                  '&:hover': { color: '#6DC184', background: 'transparent' },
                }}
              >
                {menu.label}
              </Button>

              {/* MUI 서브메뉴 */}
              {menu.subMenu && selectedMenu === menu.label && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      minWidth: 240,
                      borderRadius: 2,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      '& .MuiMenuItem-root': {
                        fontSize: '0.95rem',
                        paddingY: 1,
                        '&:hover': {
                          backgroundColor: '#EAF7F0',
                          color: '#6DC184',
                        },
                      },
                    },
                  }}
                >
                  {menu.subMenu.map((sub) => (
                    <MenuItem
                      key={sub.label}
                      onClick={() => handleNavigate(sub.path)}
                    >
                      {sub.label}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden p-2 rounded hover:bg-gray-100 ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
