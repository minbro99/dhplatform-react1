import Header3 from '../../components/header/header3'
// import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/footer2'

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-50">
      {/* ✅ Header3 사용 */}
      <Header3 />
      {/* ✅ Main - 전체 배경, 중앙 콘텐츠 */}
      <main className="flex-grow w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 pt-20 pb-16 px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-center">
          반응형 전체화면 웹페이지
        </h2>
        <p className="text-gray-600 mb-10 text-lg text-center max-w-3xl">
          TailwindCSS로 구성된 전체화면 반응형 레이아웃입니다.
          Header, Body, Footer 모두 브라우저 전체 폭을 차지하며
          화면 크기에 따라 유연하게 확장됩니다.ㅉ
        </p>
        <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          시작하기
        </button>
      </main>

      {/* ✅ Footer - 전체 가로폭, 내부 여백 */}
          {/* <Footer1 /> */}
        <Footer2 />

    </div>
  )
}
