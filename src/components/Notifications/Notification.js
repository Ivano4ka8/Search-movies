import { motion } from 'framer-motion';
import { PiListMagnifyingGlass } from 'react-icons/pi';
import { FiLoader } from 'react-icons/fi';

export const NoReviews = () => {
  return (
    <motion.h2
      style={{
        display: 'flex',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.2 }}
      transition={{
        delay: 0.5,
        duration: 2,
        ease: 'easeIn',
        type: 'spring',
        bounce: 0.2,
      }}
    >
      <PiListMagnifyingGlass /> Sorry, we don't have reviews about this
      film.....
    </motion.h2>
  );
};

export const NoNameFilm = () => {
  return (
    <motion.h2
      style={{
        display: 'flex',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.2 }}
      transition={{
        delay: 0.5,
        duration: 2,
        ease: 'easeIn',
        type: 'spring',
        bounce: 0.2,
      }}
    >
      <FiLoader /> Enter the name of film <FiLoader />
    </motion.h2>
  );
};

export const NoFilms = () => {
  return (
    <motion.h2
      style={{
        display: 'flex',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.2 }}
      transition={{
        delay: 0.5,
        duration: 2,
        ease: 'easeIn',
        type: 'spring',
        bounce: 0.2,
      }}
    >
      <PiListMagnifyingGlass /> Sorry, we don't have films with this name.....
    </motion.h2>
  );
};
