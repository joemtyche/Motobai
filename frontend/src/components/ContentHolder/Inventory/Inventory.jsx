import { useState, useEffect } from 'react';
import InventoryForm from './InventoryForm';
// import InventoryAddStockForm from './InventoryAddStockForm';

function Inventory() {

  const headerStyle = 'px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider';
  const rowStyle = 'hover:bg-gray-200';
  const dataStyle = 'px-6 py-4 whitespace-nowrap';

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/inventory/list?format=json');

      if (!response.ok) {
        throw new Error('Failed to fetch inventory');
      }
      const data = await response.json();
      console.log(data);
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  return (
    <>
    <div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Inventory</div>
        <div><button>Add Product</button></div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className={headerStyle}>Product ID</th>
              <th className={headerStyle}>Product Name</th>
              <th className={headerStyle}>Stock</th>
              <th className={headerStyle}>Minimum Stock Threshold</th>
              <th className={headerStyle}>Date Added</th>
              <th className={headerStyle}>Date Last Updated</th>
              <th className={headerStyle}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inventory.map((inventory, index) => {
              const createdAtDate = new Date(inventory.date_added);
              const formattedDate1 = `${createdAtDate.getMonth() + 1}/${createdAtDate.getDate()}/${createdAtDate.getFullYear()}`;
              const updateAtDate = new Date(inventory.date_updated);
              const formattedDate2 = `${updateAtDate.getMonth() + 1}/${updateAtDate.getDate()}/${updateAtDate.getFullYear()}`;
              return (
                <tr className={rowStyle} key={index}>
                  <td className={dataStyle}>{inventory.id}</td>
                  <td className={dataStyle}>{inventory.product}</td>
                  <td className={dataStyle}>{inventory.stock}</td>
                  <td className={dataStyle}>{inventory.stock_minimum_threshold}</td>
                  <td className={dataStyle}>{formattedDate1}</td>
                  <td className={dataStyle}>{formattedDate2}</td>
                  <td><button>Remove</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <label className='block text-base mb-6'>ADD PRODUCT</label>
    <InventoryForm />
    {/* <label className='block text-base mb-6'>EDIT PRODUCT</label>
    <InventoryAddStockForm /> */}
    </>
  )
}

export default Inventory