import React, { useState } from 'react'

const RegisterForm = () => {
    const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeRegisterInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormRegister((prev) => ({ ...prev, [name]: value }));
  };

  const registerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formRegister);
    // Burada API çağırışı və validation əlavə edə bilərsən
  };
  return (
      <form onSubmit={registerSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              İstifadəçi adı
            </label>
            <input
              type="text"
              name="username"
              value={formRegister.username}
              onChange={changeRegisterInputs}
              placeholder="İstifadəçi adınızı daxil edin"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formRegister.email}
              onChange={changeRegisterInputs}
              placeholder="Emailinizi daxil edin"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifrə
            </label>
            <input
              type="password"
              name="password"
              value={formRegister.password}
              onChange={changeRegisterInputs}
              placeholder="Şifrənizi daxil edin"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifrəni təsdiqlə
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formRegister.confirmPassword}
              onChange={changeRegisterInputs}
              placeholder="Şifrənizi yenidən daxil edin"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Qeydiyyatdan keç
          </button>
        </form>
  )
}

export default RegisterForm