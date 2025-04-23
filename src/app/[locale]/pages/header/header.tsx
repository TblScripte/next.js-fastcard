'use client'

import Image from 'next/image'
import img1 from '@/shared/img/Group 1116606595.png'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import img2 from '@/shared/img/Cart1.png'
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const Header = () => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='shadow p-4'>
			<div className='max-w-[1300px] w-[90%] mx-auto flex items-center justify-between flex-wrap'>
				<div className='flex items-center justify-between w-full md:w-auto'>
					<Image src={img1} alt='logo' width={120} height={40}/>
					<nav
					className={`w-full md:w-auto md:flex md:items-center ml-[100px] mt-4 md:mt-0 space-y-2 md:space-y-0 ${
						isOpen ? 'block' : 'hidden md:block'
					}`}
				>
					<ul className='flex flex-col md:flex-row gap-4 md:gap-8 text-sm md:text-base'>
						<li>
							<Link
								href='/pages/dashboard'
								className={`hover:text-orange-600 ${
									pathname === '/en/pages/dashboard' && 'text-orange-500'
								}`}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/pages/contact'
								className={`hover:text-orange-600 ${
									pathname === '/en/pages/contact' && 'text-orange-500'
								}`}
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								href='/pages/about'
								className={`hover:text-orange-600 ${
									pathname === '/en/pages/about' && 'text-orange-500'
								}`}
							>	
								About
							</Link>
						</li>
						<li>
							<Link href='/' className='hover:text-orange-600'>
								Sign up
							</Link>
						</li>
					</ul>
				</nav>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='md:hidden text-gray-800 text-2xl'
					>
						<MenuIcon />
					</button>
				</div>

				<div className='mt-4 md:mt-0 items-center w-full hidden sm:block  md:w-auto justify-between gap-4'>
					<div className='flex items-center justify-between'>
						<Paper
							component='form'
							sx={{
								p: '2px 4px',
								width: { xs: 200, sm: 250, md: 270 },
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

						<FavoriteBorderIcon className='text-gray-700 mr-[20px] ml-[10px]' />

						<div className='relative'>
							<p className='absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center text-white bg-red-500 rounded-full'>
								2
							</p>
							<Link href={"/pages/cart"}>
							<Image src={img2} alt='cart' width={25} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
