import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Header1 from './components/header/header1'
// import Header2 from './components/header/header2'
import Header3 from './components/header/header3'
import Login from './pages/login/login'
// import SideBar1 from './components/sidebar/sideBar1'

function App() {
  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route path="/" element={<Login />} />

      {/* 메인 페이지 */}
      <Route path="/main" element={<MainPage />} />
    </Routes>
  )
}

// 메인 페이지 컴포넌트
function MainPage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-50">

      {/* ✅ Header - 전체 가로폭, 내부 여백만 */}
      <Header1 />
      {/* ✅ Header2 사용 */}
      {/* <Header2 /> */}
      {/* ✅ Header3 사용 */}
      <Header3 />
      {/* <SideBar1 /> */}
      {/* <SideBar1 /> */}
      {/* ✅ Main - 전체 배경, 중앙 콘텐츠 */}
      <main className="flex-grow w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 pt-20 pb-16 px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-center">
          반응형 전체화면 웹페이지
        </h2>
        <p className="text-gray-600 mb-10 text-lg text-center max-w-3xl">
          TailwindCSS로 구성된 전체화면 반응형 레이아웃입니다.
          Header, Body, Footer 모두 브라우저 전체 폭을 차지하며
          화면 크기에 따라 유연하게 확장됩니다.
        </p>
        <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          시작하기
        </button>
      </main>

      {/* ✅ Footer - 전체 가로폭, 내부 여백 */}
      <footer className="w-full bg-gray-900 text-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center px-10 py-6 text-center sm:text-left gap-4">
          <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
