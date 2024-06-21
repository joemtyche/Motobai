import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Company from './ContentHolder/Company'
import Products from './ContentHolder/Products'

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('company'); // State to track active component

  const renderComponent = () => {
    switch (activeComponent) {
      case 'company':
        return <Company />;
      case 'products':
        return <Products />;
      default:
        return null;
    }
  };

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col h-screen"> 
      {/* Header */}
      <header className="bg-neutral-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center"> 
          {/* add picture here */}
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button
                  className={`text-white ${activeComponent === 'company' ? 'font-bold' : 'font-medium'} hover:underline`}
                  onClick={() => setActiveComponent('company')}
                >
                  Company
                </button>
              </li>
              <li>
                <button
                  className={`text-white ${activeComponent === 'products' ? 'font-bold' : 'font-medium'} hover:underline`}
                  onClick={() => setActiveComponent('products')}
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  className={`text-white ${activeComponent === 'inventory' ? 'font-bold' : 'font-medium'} hover:underline`}
                  onClick={() => setActiveComponent('inventory')}
                >
                  Inventory
                </button>
              </li>
              <li>
                <button
                  className={`text-white ${activeComponent === 'order' ? 'font-bold' : 'font-medium'} hover:underline`}
                  onClick={() => setActiveComponent('order')}
                >
                  Order
                </button>
              </li>
              <li>
                <button
                  className={`text-white ${activeComponent === 'ordertracking' ? 'font-bold' : 'font-medium'} hover:underline`}
                  onClick={() => setActiveComponent('ordertracking')}
                >
                  Order Tracking
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex flex-grow">
        <Sidebar />

        <div className="flex flex-col flex-grow">
          <div className="bg-white p-4 shadow-md">
            {renderComponent()}
          </div>
        
        </div>
      </main>
    </div>
  );
}

export default Dashboard;