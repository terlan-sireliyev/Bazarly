import { Link } from "react-router-dom";
import LoginForm from "../../features/Auth/components/LoginForm";

const Login = () => {
 
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Daxil ol
        </h2>

       <LoginForm/>

        {/* Qeydiyyat linki */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Hesabınız yoxdur?{" "}
          <Link 
            to="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Qeydiyyatdan keçin
          </Link>
        </p>

        {/* Sosial media login */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Facebook
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
