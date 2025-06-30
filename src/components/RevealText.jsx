import { motion } from "framer-motion";
console.log("motion : ", motion);

export default function TextAnimation(){
  return (
    <motion.h1
  initial={{ y: 25, opacity: 0}}
  animate={{ y: 0, opacity: 1}}
  transition={{ duration: 1, ease: "easeInOut"}}
  className="text-5xl font-bold text-blue-500"
  >PT MULEJATI JAYA</motion.h1>
  );
};
