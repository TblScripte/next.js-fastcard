import React from 'react'
import { Camera, Gamepad, Headphones, WatchIcon } from 'lucide-react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import ComputerIcon from '@mui/icons-material/Computer';
const Catigories = () => {
	return (
		<div className='flex flex-wrap justify-between mt-[40px]'>
			<div className='w-[180px] h-[150px] border flex flex-col items-center justify-center rounded-md hover:text-white hover:bg-[#DB4444]'>
				<PhoneAndroidIcon sx={{fontSize:"50px"}} />
				<h1 className="mt-[14px]">Phones</h1>
			</div>
			<div className='w-[180px] h-[150px] border flex flex-col items-center justify-center rounded-md hover:text-white hover:bg-[#DB4444]'>
				<ComputerIcon sx={{fontSize:"50px"}} />
				<h1 className="mt-[14px]">Computer</h1>
			</div>
			<div className='w-[180px] h-[150px] border flex flex-col items-center justify-center rounded-md hover:text-white hover:bg-[#DB4444]'>
				<WatchIcon size={50}/>
				<h1 className="mt-[14px]">SmartWatch</h1>
			</div>
			<div className='w-[180px] h-[150px] border flex flex-col items-center justify-center rounded-md hover:text-white hover:bg-[#DB4444]'>
				<Camera size={50}/>
				<h1 className="mt-[14px]">Camera</h1>
			</div>
			<div className='w-[180px] h-[150px] border flex flex-col items-center justify-center rounded-md hover:text-white hover:bg-[#DB4444]'>
				<Headphones size={50} />
				<h1 className="mt-[14px]">HeadPhones</h1>
			</div>
			<div className='w-[180px] h-[150px] border flex flex-col items-center justify-center rounded-md hover:text-white hover:bg-[#DB4444]'>
				<Gamepad size={50} />
				<h1 className="mt-[14px]">Gameing</h1>
			</div>
		</div>
	)
}

export default Catigories
