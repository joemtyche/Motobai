function Sidebar() {
  return (
  <>
    <div className="flex h-screen bg-gray-100">
      <div className="bg-neutral-900 w-60 p-4 text-white">
        <p className="text-xl font-bold mb-4">Overview</p>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <p>Unvalidated</p>
            <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">10</span>
          </li>
          <li className="flex justify-between">
            <p>Ready to Ship</p>
            <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">5</span>
          </li>
          <li className="flex justify-between">
            <p>Shipped</p>
            <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">7</span>
          </li>
          <li className="flex justify-between">
            <p>Recieved</p>
            <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">3</span>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default Sidebar