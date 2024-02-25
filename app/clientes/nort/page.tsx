
'use client'
import { motion } from 'framer-motion';
import Header from '@/components/ui/header';
const ServiciosPage = () => {
  return (
  
    <>
      <Header pageType='dark'/>
    <motion.div
      className="flex justify-center items-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      exit={{ opacity: 0 }}
    >
      <div  >
        <h1 className="text-2xl font-bold">Historia Nort</h1>
        {/* Agrega aquí el resto del contenido de la página */}
      </div>
    </motion.div>
    </>
  );
};

export default ServiciosPage;    
