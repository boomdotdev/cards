import { motion } from "framer-motion";
import { ReactElement, useState } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  description?: string;
  icon: ReactElement<HTMLImageElement>;
}
const transition = {
  ease: [0.0, 0.8, 0.01, 1.01],
  duration: 0.7,
};
const containerVariants = {
  active: { scale: 1.1, zIndex: 1, transition },
  inactive: { scale: 1, zIndex: 0, transition },
};
const descriptionVariants = {
  visible: {
    y: 0,
    transition,
  },
  hidden: {
    y: "100%",
    transition,
  },
};

export default function Card({ title, description, icon }: CardProps) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className={`${styles.container} ${active && styles.active}`}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      initial="inactive"
      animate={active ? "active" : "inactive"}
      variants={containerVariants}
    >
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.titleContainer}>
        <h5 className={styles.title}>{title}</h5>
      </div>
      <motion.div
        initial="hidden"
        animate={active ? "visible" : "hidden"}
        variants={descriptionVariants}
        className={styles.description}
      >
        <div className={styles.descriptionInner}>
          <div className={styles.descriptionIconContainer}>{icon}</div>
          <div className={styles.descriptionLine}></div>
          <div className={styles.descriptionTitleContainer}>
            <h4 className={styles.descriptionTitle}>{title}</h4>
          </div>
          <p className={styles.descriptionText}>{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
