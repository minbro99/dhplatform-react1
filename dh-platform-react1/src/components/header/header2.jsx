import * as React from 'react';
import { AppBar, Tabs, Tab, Box, Fade } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FactoryIcon from '@mui/icons-material/Factory';
import BoltIcon from '@mui/icons-material/Bolt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

export default function Header2() {
  const [mainTab, setMainTab] = React.useState(0);
  const [subTab, setSubTab] = React.useState(0);
  const [hoveredTab, setHoveredTab] = React.useState(null);

  // ✅ 메뉴 구조
  const menuItems = [
    { label: '대시보드', icon: <DashboardIcon sx={{ mr: 1 }} />, subMenu: ['대시보드 메인'] },
    {
      label: '시설별 에너지',
      icon: <FactoryIcon sx={{ mr: 1 }} />,
      subMenu: ['공용부 시설 에너지 대시보드', '세대별 에너지 대시보드'],
    },
    {
      label: '에너지 시뮬레이터',
      icon: <BoltIcon sx={{ mr: 1 }} />,
      subMenu: ['시뮬레이터 메인'],
    },
    {
      label: '전력 인프라 관제',
      icon: <ApartmentIcon sx={{ mr: 1 }} />,
      subMenu: ['실시간 피크 모니터링', '태양광 발전 현황', '전기차 충전 현황'],
    },
    {
      label: '시민발전소',
      icon: <SolarPowerIcon sx={{ mr: 1 }} />,
      subMenu: ['시민발전소 현황', '시민발전소 데이터 조회'],
    },
  ];

  const handleMainChange = (event, newValue) => {
    setMainTab(newValue);
    setSubTab(0);
  };

  const handleSubChange = (event, newValue) => {
    setSubTab(newValue);
  };

  const handleMouseEnter = (index) => setHoveredTab(index);
  const handleMouseLeave = () => setHoveredTab(null);

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#fff',
        position: 'relative',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
      onMouseLeave={handleMouseLeave}
    >
      {/* ✅ 상단 AppBar */}
<AppBar
  position="static"
  color="default"
  elevation={0}
  sx={{
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e7eb',
    px: 6,
    py: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap', // 줄바꿈 방지
    position: 'relative',
    overflow: 'visible',
  }}
>
  {/* ✅ 로고 + 타이틀 */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'absolute', left: 200 }}>
    <img
      src="/src/assets/icons/home-energy-management_001.svg"
      alt="에너지 관리"
      className="w-10 h-10"
    />
    {/* 두 줄 구조 유지 */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1.1,
      }}
    >
      <h1 className="text-2xl font-bold text-[#6DC184]">아파트</h1>
      <p className="text-sm text-[#6DC184]">에너지 관리 플랫폼</p>
    </Box>
  </Box>

  {/* ✅ 상위 탭 (mainTab) */}
  <Tabs
    value={mainTab}
    onChange={handleMainChange}
    textColor="inherit"
    indicatorColor="secondary"
    aria-label="main tabs"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      '& .MuiTab-root': {
        textTransform: 'none',
        color: '#333',
        fontWeight: 600,
        fontSize: '1rem',
        position: 'relative',
        '&.Mui-selected': { color: '#6DC184' },
        '&:hover': { color: '#333' },
        '&:hover::after': {
          content: '""',
          position: 'absolute',
          bottom: -24,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: '#6DC184',
        },
        '&:focus': { outline: 'none' },
        '&:focus-visible': { outline: 'none' },
      },
      '& .MuiTabs-indicator': { display: 'none' },
    }}
  >
    {menuItems.map((menu, index) => (
      <Tab
        key={menu.label}
        onMouseEnter={() => handleMouseEnter(index)}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {menu.icon}
            {menu.label}
          </Box>
        }
      />
    ))}
  </Tabs>
</AppBar>


      {/* ✅ 서브 탭 (hover 시 표시) */}
      {hoveredTab !== null && menuItems[hoveredTab].subMenu.length > 1 && (
        <Fade in={hoveredTab !== null} timeout={200}>
          <Box
            sx={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              bgcolor: '#fff',
              borderTop: '1px solid #eaeaea',
              borderBottom: '1px solid #eaeaea',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(0,0,0,0.04)',
              zIndex: 5,
            }}
          >
            <Tabs
              value={subTab}
              onChange={handleSubChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="sub tabs"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  color: '#666',
                  px: 3,
                  '&.Mui-selected': {
                    color: '#000',
                    fontWeight: 600,
                  },
                  '&:hover': { color: '#666' }, // hover 시 색상 그대로
                  '&:focus': { outline: 'none' },
                  '&:focus-visible': { outline: 'none' },
                },
                // ✅ 인디케이터 완전 제거
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              {menuItems[hoveredTab].subMenu.map((sub) => (
                <Tab key={sub} label={sub} />
              ))}
            </Tabs>
          </Box>
        </Fade>
      )}
    </Box>
  );
}
