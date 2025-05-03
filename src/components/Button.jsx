import { motion } from "framer-motion";

export default function Button({ label, onClick, customClass = "" }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`p-4 text-xl rounded-2xl shadow-lg bg-white hover:bg-gray-100 ${customClass}`}
    >
      {label}
    </motion.button>
  );
}
