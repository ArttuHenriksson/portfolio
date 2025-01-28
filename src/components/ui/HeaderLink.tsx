import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className=""
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
    >
      <Link to={to} className="">
        {/* Icon and Text */}
        <motion.div
          className="flex items-center gap-1"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          {children}
        </motion.div>

        {/* Underline */}
        <motion.div
          className=""
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default HeaderLink;
