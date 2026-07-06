export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        <div className="flex gap-6">
          <a className="text-gray-900 hover:text-black" href="/">Dashboard</a>
          <a className="text-gray-900 hover:text-black" href="/transactions">Transactions</a>
          <a className="text-gray-900 hover:text-black" href="/budgets">Budgets</a>
        </div>

        <div className="text-gray-700">
          Logged in as Jake
        </div>

      </div>
    </nav>
  )
}