function Company() {
  return (
    <>
    <div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Companies</div>
        <div><button>Add Company</button></div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Company ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Company Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date Added</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">01</td>
              <td className="px-6 py-4 whitespace-nowrap">Company</td>
              <td className="px-6 py-4 whitespace-nowrap">01/21/2024</td>
              <td className="px-6 py-4 whitespace-nowrap">09129391492</td>
              <td className="px-6 py-4 whitespace-nowrap">company@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap"><button>Details</button></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">DATA</td>
              <td className="px-6 py-4 whitespace-nowrap">DATA</td>
              <td className="px-6 py-4 whitespace-nowrap">DATA</td>
              <td className="px-6 py-4 whitespace-nowrap">DATA</td>
              <td className="px-6 py-4 whitespace-nowrap">DATA</td>
              <td className="px-6 py-4 whitespace-nowrap"><button>Details</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Company