const Input = ({ icon: Icon, ...props }) => {
    return (
        <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex  items-center pl-3 pointer-events-none">
                <Icon className='size-5 text-[#f9a8d4]' />
            </div>
            <input
                {...props}
                className="w-full pl-10 pr-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-[#1e1b4b] focus:ring-2 focus:ring-[#1e1b4b] text-white placeholder-gray-400 transition duration-200 py-3"
                
            />
        </div>
    )
} 
export default Input