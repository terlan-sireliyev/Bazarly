import { Link } from "react-router-dom";
import RegisterForm from "../../features/Auth/components/RegisterForm";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen py-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }} // başlanğıc vəziyyət
        animate={{ opacity: 1, y: 0 }}   // animasiya sonrası vəziyyət
        transition={{ duration: 0.8, ease: "easeOut" }} // animasiya müddəti və tipi
       className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Qeydiyyat
        </h2>

        <RegisterForm />

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Hesabınız var?{" "}
          <Link
            to="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Daxil olun
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
      </motion.div>
    </div>
  );
};

export default Register;
