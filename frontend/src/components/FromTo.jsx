import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import { useState } from 'react'
import TrainDest from '../../assets/icons/Dest.svg'
import TrainSrc from '../../assets/icons/Src.svg'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
const FromTo = () => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [date, setDate] = useState(dayjs())
    const swapFromTo = () => {
        setFrom(prevFrom => {
            setTo(prevFrom);  
            return to;         
        });
    };
    return (
        <div className=' p-10 rounded-2xl backdrop-blur-lg top-[40%] relative w-[90%] ml-[5%] pt-[5rem]'>
            <div className=" bg-white flex flex-row p-7 rounded-[30px] text-[20px] justify-center opacity-100 blur-none">
                <form className='flex flex-row ml-10  rounded-ll'>
                    <label for="name"><img src={TrainSrc} alt="Train" width={40} className=' ml-2 mt-2' /></label>
                    <input type="text" placeholder="From" className='ml-7 focus:outline-none border-b-2 border-black'
                        value={from}
                        onChange={(e) => { setFrom(e.target.value) }}
                    />
                </form>

                <button className='ml-[2.3rem]' onClick={swapFromTo}>
                    <CompareArrowsIcon sx={{ fontSize: 30 }} />
                </button>

                <form className='flex flex-row ml-10 rounded-l '>
                    <label for="name" ><img src={TrainDest} alt="Train" width={40} className=' ml-2 mt-2' /></label>
                    <input type="text" placeholder="To" className='ml-7 focus:outline-none border-b-2 border-black '
                        value={to}
                        onChange={(e) => {
                            setTo(e.target.value)
                        }}
                    />
                </form>

                <div className='ml-10 mt-1'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={date}
                            onChange={(e) => {
                                setDate(e)
                            }}
                            renderInput={(params) => <input {...params} className="focus:outline-none border-b-2 border-black" />}
                        />
                    </LocalizationProvider>
                </div>
                <button className='bg-blue-600 rounded-[15px] ml-[5%] p-3 relative hover:bg-blue-500  '>
                    <h1 className='font-Host font-medium text-white'>Search Train</h1>
                </button>

            </div>

        </div>
    )

}
export default FromTo