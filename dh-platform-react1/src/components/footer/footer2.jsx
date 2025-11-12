import React from 'react';

const Footer2 = () => {
  // 디에이치 아파트 로고 SVG
  const TheHLogo = () => (
    <svg width="147" height="131" viewBox="0 0 283 306" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto">
      <path d="M224.703 303.948C217.577 303.948 210.95 303.948 203.821 303.948C203.821 280.626 203.821 257.721 203.821 234.672C163.533 234.672 123.755 234.672 83.3514 234.672C83.3514 258.208 83.3514 281.591 83.3514 305.125C56.7905 305.125 30.8567 305.125 4.6756 305.125C4.6756 240.682 4.6756 176.437 4.6756 111.908C30.6921 111.908 56.6111 111.908 82.9836 111.908C82.9836 131.498 82.9836 151.074 82.9836 171.025C123.34 171.025 163.247 171.025 203.676 171.025C203.676 152.055 203.676 132.827 203.676 113.355C230.129 113.355 256.064 113.355 282.368 113.355C282.368 176.587 282.368 239.965 282.368 303.948C263.395 303.948 244.299 303.948 224.703 303.948Z" fill="#000000"/>
      <path d="M199.247 27.0709C199.247 17.7715 199.247 8.97215 199.247 0C227.192 0 254.657 0 282.431 0C282.431 3.36747 282.431 6.78851 282.431 10.6321C260.082 10.6321 237.666 10.6321 214.98 10.6321C214.98 15.4757 214.98 19.9079 214.98 24.8099C235.284 24.8099 255.684 24.8099 276.363 24.8099C276.363 28.1532 276.363 31.0356 276.363 34.2596C255.898 34.2596 235.63 34.2596 215.037 34.2596C215.037 38.4953 215.037 42.4174 215.037 46.7404C237.221 46.7404 259.63 46.7404 282.39 46.7404C282.39 50.5307 282.39 53.9397 282.39 57.697C255.06 57.697 227.485 57.697 199.247 57.697C199.247 47.7595 199.247 37.6652 199.247 27.0709Z" fill="#000000"/>
      <path d="M159.671 31.1563C145.887 31.1563 132.596 31.1563 118.993 31.1563C118.993 40.1124 118.993 48.7145 118.993 57.6803C113.799 57.6803 108.897 57.6803 103.704 57.6803C103.704 38.7405 103.704 19.6522 103.704 0.18721C108.388 0.18721 113.28 0.18721 118.621 0.18721C118.621 7.11123 118.621 14.175 118.621 21.5569C135.778 21.5569 152.496 21.5569 169.635 21.5569C169.635 14.452 169.635 7.36002 169.635 0.0378723C174.989 0.0378723 179.923 0.0378723 185.112 0.0378723C185.112 18.7806 185.112 37.337 185.112 56.1578C180.036 56.1578 175.111 56.1578 169.832 56.1578C169.832 47.8838 169.832 39.785 169.832 31.1563C166.392 31.1563 163.279 31.1563 159.671 31.1563Z" fill="#000000"/>
      <path d="M53.7806 47.0561C53.7806 51.3765 53.7806 55.1998 53.7806 59.3376C48.651 59.3376 43.7636 59.3376 38.484 59.3376C38.484 43.2444 38.484 27.3071 38.484 10.948C25.5038 10.948 12.902 10.948 0 10.948C0 7.11749 0 3.69765 0 0.041626C30.6949 0.041626 61.4553 0.041626 92.4137 0.041626C92.4137 3.47611 92.4137 6.76546 92.4137 10.6338C79.7002 10.6338 66.9819 10.6338 53.7806 10.6338C53.7806 22.9892 53.7806 34.774 53.7806 47.0561Z" fill="#000000"/>
    </svg>
  );

  // 누리 플렉스 회사 로고 SVG
  const NuriFlexLogo = () => (
    <svg
      width="147"
      height="131"
      viewBox="0 0 147 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-auto"
    >
      <path
        d="M24.7115 25.193H24.6824C22.0566 22.7277 18.541 21.1814 14.646 21.1814C6.56445 21.1814 0 27.7459 0 35.842V130.443L86.7238 76.0601L24.7115 25.193Z"
        fill="#00489D"
      />
      <path
        d="M122.288 105.25H122.318C124.944 107.715 128.459 109.247 132.354 109.247C140.45 109.247 147 102.683 147 94.6011V0L60.2762 54.3829L122.288 105.25Z"
        fill="#00ADEC"
      />
    </svg>
  );

  return (
    <footer className="bg-gray-50" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 flex flex-col items-center">
        {/* Brand Section */}
        <div className="flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-24 h-auto">
            </div>
          </div>
        </div>

        {/* Bottom Section: Gov Logos + Legal + Cert Badges */}
        <div className="space-y-6 w-full">
          {/* Companies Section */}
          <div className="flex flex-wrap justify-center gap-32">
            {/* Nuri Flex Column */}
            <div className="flex flex-col items-center space-y-4">
              {/* Nuri Flex Logo */}
              <a
                href="#"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                aria-label="누리 플렉스 회사"
              >
                <NuriFlexLogo />
                <span className="h-16 flex items-center text-lg text-gray-700 font-medium">
                  누리 플렉스
                </span>
              </a>

              {/* Nuri Flex Info */}
              <div className="space-y-3 text-center">
                <div className="text-xs text-gray-500 leading-relaxed space-y-1">
                  <p>서울시 서초구 사평대로 16 누리빌딩</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span>전화: 02-781-0700</span>
                    <span>이메일: nuriflex@nuriflex.co.kr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The H Column */}
            <div className="flex flex-col items-center space-y-4">
              {/* The H Logo */}
              <a
                href="#"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                aria-label="디에이치퍼스티어아이파크 아파트"
              >
                <TheHLogo />
                <span className="h-16 flex items-center text-lg text-gray-700 font-medium">
                  디에이치퍼스티어아이파크
                </span>
              </a>

              {/* The H Info */}
              <div className="space-y-3 text-center">
                <div className="text-xs text-gray-500 leading-relaxed space-y-1">
                  <p>서울특별시 강남구 개포로 310</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span>전화: 02-2058-1801</span>
                    <span>이메일: theh@theh.co.kr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-center">
            <a
              href="/privacy"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              개인정보처리방침
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/copyright"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              저작권 정책
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center">
            © Nuri Flex Co., Ltd. All Rights Reserved.
          </p>

          {/* Cert Badges Section (Optional) */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* 인증 배지가 있다면 여기에 추가 */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
