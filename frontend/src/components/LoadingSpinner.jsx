import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-[#2730F2] via-[#27F1F2] to-[#2771F2] flex items-center justify-center relative overflow-hidden'>
            <motion.div
                className='w-16 h-16 border-6 border-t-8 border-t-green-500 border-green-200 rounded-full'
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default LoadingSpinner;