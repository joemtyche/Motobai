import { useState, useEffect } from 'react';
import CompanyForm from './CompanyForm';

function Company() {

  const headerStyle = 'px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider';
  const rowStyle = 'hover:bg-gray-200';
  const dataStyle = 'px-6 py-4 whitespace-nowrap';

  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/company/list?format=json');

      if (!response.ok) {
        throw new Error('Failed to fetch companies');
      }
      const data = await response.json();
      console.log(data);
      setCompany(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };


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
              <th className={headerStyle}>Company ID</th>
              <th className={headerStyle}>Company Name</th>
              <th className={headerStyle}>Representative Name</th>
              <th className={headerStyle}>Representative Position</th>
              <th className={headerStyle}>City</th>
              <th className={headerStyle}>Barangay</th>
              <th className={headerStyle}>Street</th>
              <th className={headerStyle}>Phone Number</th>
              <th className={headerStyle}>Email</th>
              <th className={headerStyle}>Date Added</th>
              <th className={headerStyle}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {company.map((company, index) => {
              const createdAtDate = new Date(company.date_created);
              const formattedDate = `${createdAtDate.getMonth() + 1}/${createdAtDate.getDate()}/${createdAtDate.getFullYear()}`;
              return (
                <tr className={rowStyle} key={index}>
                  <td className={dataStyle}>{company.id}</td>
                  <td className={dataStyle}>{company.name}</td>
                  <td className={dataStyle}>{company.rep_name}</td>
                  <td className={dataStyle}>{company.rep_position}</td>
                  <td className={dataStyle}>{company.city}</td>
                  <td className={dataStyle}>{company.barangay}</td>
                  <td className={dataStyle}>{company.street}</td>
                  <td className={dataStyle}>{company.phone_number}</td>
                  <td className={dataStyle}>{company.email}</td>
                  <td className={dataStyle}>{formattedDate}</td>
                  <td><button>Remove</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <CompanyForm/>
    </>
  )
}

export default Company