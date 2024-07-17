import { useState, useEffect } from "react";
import api from "../../../api";

function InventoryAddStockForm() {

  const [product, setProduct] = useState("");
  const [stock, setStock] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/api/products/list");
        setOptions(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/api/inventory/create", {
        product: product,
        stock: stock,
      });
      console.log("Product added to inventory:", res.data);
      window.location.reload()
    } catch (error) {
      console.error("Error adding product to inventory:", error);
      alert("Failed to add product to inventory. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mt-3'>
        <label className='block text-base mb-2'>Product<span className="text-red-500">*</span></label>
        <select
          name="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a product
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <label className='block text-base mb-2'>Stock<span className="text-red-500">*</span></label>
        <input
          className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          required
        />
        <label className='block text-base mb-2'>Minimum Stock Threshold<span className="text-red-500">*</span></label>
        <input
          className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
          type="text"
          value={stockMinThreshold}
          onChange={(e) => setStockMinThreshold(e.target.value)}
          placeholder="Stock Minimum Threshold"
        />
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default InventoryAddStockForm