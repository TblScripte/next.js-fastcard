'use client'
import SendIcon from '@mui/icons-material/Send'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import img1 from '@/shared/img/icon-copyright.png'

const Footer = () => {
	return (
		<div className='bg-black  h-[340px] p-[35px_0px] mt-[300px] w-full text-white '>
			<div className='w-[80%] m-auto flex  h-fit justify-between items-center'>
				<div className=' text-[1.4rem]'>
					<h1 className='font-bold text-[2rem] '>Exclusive</h1>
					<h1 className='mb-[10px] mt-[10px]'>Subscribe</h1>
					<h1 className='mb-[20px]'>Get 10% off your first order</h1>
					<Paper
						component='form'
						sx={{
							p: '2px 4px',
							display: 'flex',
							alignItems: 'center',
							backgroundColor: 'black',
							border: '1px solid gray',
							color: 'gray',
							width: 300,
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder='Search Google Maps'
							className='text-white'
							inputProps={{ 'aria-label': 'search google maps' }}
							style={{ color: 'white' }}
						/>

						<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
						<IconButton
							color='primary'
							sx={{ p: '10px', color: 'white' }}
							aria-label='directions'
						>
							<SendIcon />
						</IconButton>
					</Paper>
				</div>
				<div className='text-[1.4rem]'>
					<h1 className='text-[2rem] font-bold'>Support</h1>
					<h1 className='mb-[10px] mt-[10px]'>
						111 Bijoy sarani, Dhaka, <br />
						DH 1515, Bangladesh.
					</h1>
					<h1 className='mb-[10px]'>exclusive@gmail.com</h1>
					<h1>+88015-88888-9999</h1>
				</div>
				<div className='text-[1.4rem]'>
					<h1 className='text-[2rem] font-bold mt-[-10px] mb-[10px]'>
						Account
					</h1>
					<h1 className=''>My Account</h1>
					<h1 className='mt-[10px] mb-[10px]'>Cart</h1>
					<h1>Wishlist</h1>
					<h1>Shop</h1>
				</div>
				<div className='text-[1.4rem]'>
					<h1 className='text-[2rem] font-bold mt-[-10px] mb-[10px]'>
						Quick Link
					</h1>
					<h1>Privacy Policy</h1>
					<h1>Terms Of Use</h1>
					<h1>FAQ</h1>
					<h1>Contact</h1>
				</div>
			</div>
			<h1 className='text-gray-500 text-center text-[1.5rem] mt-[30px] flex items-center justify-center'>
				<Image
					width={30}
					src={img1 || '/placeholder.svg'}
					alt=''
					className='mask-radial-from-fuchsia-950 mr-[10px]'
				/>
				Copyright Rimel 2022. All right reserved
			</h1>
		</div>
	)
}

export default Footer
