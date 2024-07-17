import { useState } from "react";
import api from "../../../api";

function CompanyForm() {

  const [compName, setCompName] = useState("");
  const [repName, setRepName] = useState("");
  const [repPos, setRepPos] = useState("");
  const [city, setCity] = useState("");
  const [barangay, setBarangay] = useState("");
  const [street, setStreet] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);



    try {
      const res = await api.post("/api/company/create", {
        name: compName,
        rep_name: repName,
        rep_position: repPos,
        city: city,
        barangay: barangay,
        street: street,
        phone_number: phoneNum,
        email: email
      });
      console.log("Company added:", res.data);
      window.location.reload()
    } catch (error) {
      console.error("Error adding company:", error);
      alert("Failed to add company. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div className='mt-3'>
        <label className='block text-base mb-2'>Company Name<span className="text-red-500">*</span></label>
        <input
          className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
          type="text"
          value={compName}
          onChange={(e) => setCompName(e.target.value)}
          placeholder="Company Name"
          required
        />
        <label className='block text-base mb-2'>Representative Name<span className="text-red-500">*</span></label>
        <input
          className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          type="text"
          value={repName}
          onChange={(e) => setRepName(e.target.value)}
          placeholder="Representative Name"
          required
        />
        <label className='block text-base mb-2'>Representative Position</label>
        <input
          className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
          type="text"
          value={repPos}
          onChange={(e) => setRepPos(e.target.value)}
          placeholder="Representative Position"
          
        />
        <label className='block text-base mb-2'>Phone Number<span className="text-red-500">*</span></label>
        <input
          className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
          type="text"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <label className='block text-base mb-2'>City</label>
        <input
          className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          
        />
        <label className='block text-base mb-2'>Barangay</label>
        <input
          className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
          type="text"
          value={barangay}
          onChange={(e) => setBarangay(e.target.value)}
          placeholder="Barangay"
          
        />
        <label className='block text-base mb-2'>Street</label>
        <input
          className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Street"
          
        />
        <label className='block text-base mb-2'>Email</label>
        <input
          className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          
        />
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default CompanyForm