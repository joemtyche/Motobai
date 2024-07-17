import { useState, useEffect } from 'react';

function Products() {

  const headerStyle = 'px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider';
  const rowStyle = 'hover:bg-gray-200';
  const dataStyle = 'px-6 py-4 whitespace-nowrap';

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products/list?format=json');

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

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
              <th className={headerStyle}>Product ID</th>
              <th className={headerStyle}>Product Name</th>
              <th className={headerStyle}>Price</th>
              <th className={headerStyle}>Type</th>
              <th className={headerStyle}>Description</th>
              <th className={headerStyle}>Brand</th>
              <th className={headerStyle}>Status</th>
              <th className={headerStyle}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((products, index) => {
                return (
                  <tr className={rowStyle} key={index}>
                    <td className={dataStyle}>{products.id}</td>
                    <td className={dataStyle}>{products.name}</td>
                    <td className={dataStyle}>{products.price}</td>
                    <td className={dataStyle}>{products.type}</td>
                    <td className={dataStyle}>{products.description}</td>
                    <td className={dataStyle}>{products.brand}</td>
                    <td className={dataStyle}>{products.status}</td>
                    <td><button>Remove</button></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Products