'use client'

import Image from 'next/image'
import img1 from '@/shared/img/Group 1116606595.png'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import img2 from '@/shared/img/Cart1.png'
import Translates from '../translatePage/translate'

const  Header = () => {
	return (
		<div className='shadow-b shadow p-[17px_0px] '>
			<div className='w-[80%] m-auto flex items-center justify-between'>
				<div className='flex w-[50%] justify-between items-center'>
					<Image src={img1 || '/placeholder.svg'} alt='123' />
					<div className='w-[55%] flex justify-between'>
						<Link href='/'>Home</Link>
						<Link href='/'>Contact</Link>
						<Link href='/'>About</Link>
						<Link href='/'>Sign up</Link>
					</div>
				</div>
				<div>
				</div>
				<div className='flex items-center w-[30%] justify-between'>
					<Paper
						component='form'
						sx={{
							p: '2px 4px',
							width: '270px',
							backgroundColor: '#edede9',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder='What are you looking for?'
							inputProps={{ 'aria-label': 'search google maps' }}
						/>
						<SearchIcon />
					</Paper>
					<FavoriteBorderIcon />
					<div>
						<p className='w-[20px] text-center relative top-[10px] left-[13px] text-white items-center flex flex-col justify-center font-[0.5rem] h-[20px] bg-red-500 rounded-full'>
							2
						</p>
						<Image
							src={img2 || '/placeholder.svg'}
							className='mb-[20px]'
							alt='123'
							width={25}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
