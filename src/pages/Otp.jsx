import React, { useState } from 'react';

export default function Otp() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Initialize OTP as an array of 6 empty strings

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        // Move focus to the next input field when a digit is entered
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Enter 6-Digit OTP</h1>
        <form>
          <div className="flex space-x-2 mb-4">
            {otp.map((digit, index) => (
              <input
                type="text"
                id={`otp-input-${index}`}
                key={index}
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                className="border p-2 w-10 text-center"
                maxLength="1"
              />
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
