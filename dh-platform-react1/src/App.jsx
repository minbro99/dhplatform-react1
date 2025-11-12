import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import MainPage from './pages/main-pages/mainPage'
// import Header1 from './components/header/header1'
// import Header2 from './components/header/header2'
// import Header3 from './components/header/header3'
// import Footer1 from './components/footer/Footer1'
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

export default App
