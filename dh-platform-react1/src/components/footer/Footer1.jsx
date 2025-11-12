function Footer1() {
  return (
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
  )
}

export default Footer1