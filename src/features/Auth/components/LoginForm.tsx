import React, { useState } from 'react'

const LoginForm = () => {
     // Form state
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });

  // Input dəyişiklikləri
  const changeLoginInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormLogin({ ...formLogin, [name]: value });
  };

  // Submit funksiyası
  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login data:", formLogin);
    // Burada API çağırışı və ya validation edə bilərsən
  };

  return (
     <form onSubmit={loginSubmit} className="space-y-6">
          {/* Email input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formLogin.email}
              onChange={changeLoginInputs}
              placeholder="Emailinizi daxil edin"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Şifrə input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifrə
            </label>
            <input
              type="password"
              name="password"
              value={formLogin.password}
              onChange={changeLoginInputs}
              placeholder="Şifrənizi daxil edin"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Login düyməsi */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Daxil ol
          </button>
        </form>
  )
}

export default LoginForm