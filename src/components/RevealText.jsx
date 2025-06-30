import { motion } from "framer-motion";
console.log("motion : ", motion);

const TextAnimation = ({ text, className }) => {
  return (
    <motion.h1
  initial={{ y: 25, opacity: 0}}
  animate={{ y: 0, opacity: 1}}
  transition={{ duration: 1, ease: "easeInOut"}}
  className={className}
  >{text}</motion.h1>
  );
};

export default TextAnimation;
