import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useInsurance } from "../context/InsuranceContext";

const Prediction: React.FC = () => {
  const { insuranceData } = useInsurance();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="prediction"
      className="pt-10 pb-20 lg:pt-24 lg:pb-24 container-eventual"
    >
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-muted-foreground mb-8">
          We predict your insurance
          <br />
          premiums will increase to{" "}
          <motion.span
            key={insuranceData.yearlyData[3].withoutLock}
            className="text-destructive font-normal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ${insuranceData.yearlyData[3].withoutLock.toLocaleString()}
          </motion.span>
          <br />
          over the next 3 years
        </h2>
      </motion.div>
    </section>
  );
};

export default Prediction;
