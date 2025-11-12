import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/login/thehfirst_image_001.jpg'
import mainLogo from '../../assets/logo/main-logo.svg'

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/main");
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden font-[Pretendard] bg-black">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 bg-cover bg-center blur-sm z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl bg-transparent items-center justify-center">
        {/* 좌측 이미지 섹션 */}
        <div
          className="flex-1 flex items-center justify-center h-[60vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        ></div>

        {/* 우측 입력 섹션 */}
        <div className="flex-1 bg-white h-[60vh] shadow-lg flex flex-col justify-center p-10 md:p-16 rounded-md">
          <div className="flex flex-col items-center mb-6">
            <img
              src={mainLogo}
              alt="NuriFlex Logo"
              className="w-40 mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              에너지 관리 플랫폼
            </h3>
            <p className="text-sm text-gray-500">로그인 정보를 입력해 주세요</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            {/* 아이디 입력 */}
            <div className="relative mb-5">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-3 py-3 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>

            {/* 비밀번호 입력 */}
            <div className="relative mb-5">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors p-0 bg-transparent border-none cursor-pointer"
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
              >
                {showPassword ? (
                  /* 눈 닫힌 아이콘 */
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  /* 눈 열린 아이콘 */
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* 아이디 저장 */}
            <div className="flex items-center mb-5">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                아이디 저장
              </label>
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold text-sm transition-colors"
            >
              로그인
            </button>

            {/* 푸터 */}
            <footer className="mt-6 text-center text-xs text-gray-500">
              © 2025 NuriFlex Inc. All Rights Reserved.
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
}
