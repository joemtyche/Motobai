function Products() {
  return (
    <>
    <div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Products</div>
        <div><button>Create Product</button></div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date Created</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Brand</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">01</td>
              <td className="px-6 py-4 whitespace-nowrap">Oil</td>
              <td className="px-6 py-4 whitespace-nowrap">05/12/2024</td>
              <td className="px-6 py-4 whitespace-nowrap">VMAN RACING</td>
              <td className="px-6 py-4 whitespace-nowrap">Vehicle Oil</td>
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

export default Products