import { motion } from "framer-motion";
import Random from "../components/main/Random";
import Veggie from "../components/main/Veggie";

function Home() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Random />
        <Veggie />
      </motion.div>
    </>
  );
}

export default Home;
