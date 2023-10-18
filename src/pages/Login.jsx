import React, { useState } from 'react';
import Select from 'react-select';
import countries from '../utils/Countries';

export default function Login() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.label);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="country" className="block mb-2">
              Country:
            </label>
            <Select
              id="country"
              value={countries.find((country) => country.label === selectedCountry)}
              onChange={handleCountryChange}
              options={countries}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">
              Phone Number:
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="border p-2 w-full"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
