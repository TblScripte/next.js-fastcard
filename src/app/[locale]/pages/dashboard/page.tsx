'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import Image from 'next/image'
import Catigories from '../catigories/catigories'
import ProductList from '../../components/producList/page'
import Arival from '../../components/arrival/arival'
import img1 from '@/shared/img/Frame 560 (1).png'
import img2 from '@/shared/img/Screenshot 2025-04-21 145353.png'
import img3 from '@/shared/img/Frame 694.png'
import Link from 'next/link'
import Category from '../../components/category/category'


const Dashboard = () => {
	const [timeLeft, setTimeLeft] = useState(2 * 60 * 60 + 15 * 60)
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	const formatTime = (seconds: number) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
		const secs = seconds % 60
		return `${hours.toString().padStart(2, '0')} : ${minutes
			.toString()
			.padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`
	}

	return (
		<div className='w-[80%] mx-auto max-w-7xl'>
			<section className='mt-8 flex flex-col lg:flex-row gap-8'>
				<div className='w-full'>
				<Category/>
				</div>
				<div className='w-full lg:w-3/4'>
					<Swiper
					
					modules={[Autoplay, Pagination, Navigation]}
						className='h-[300px] md:h-[400px]'
						
						autoplay={{ delay: 3000 }}
					>
						{[{img:img1}, {img:img2}, {img:img3}].map((el, i) => (
							<SwiperSlide key={i}>
								<div className='relative w-full h-full'>
									<Image
										src={el.img}
										alt={`Banner ${i + 1}`}
										fill
										className='object-cover rounded-xl'
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			<section className='mt-16'>
				<div className='flex items-center gap-4'>
					<div className='w-3 h-10 bg-red-500 rounded' />
					<h1 className='text-2xl font-bold text-red-500'>
						Today’s Flash Sales
					</h1>
				</div>

				<div className='mt-8'>
					<ProductList />
				</div>

				<div className='flex justify-center mt-12'>
				<Link href={"/components/products"}  className='px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'>
						View All Products
				</Link>
				</div>
			</section>

			<section className='mt-24'>
				<div className='flex items-center gap-4 mb-8'>
					<div className='w-3 h-10 bg-red-500 rounded' />
					<h1 className='text-2xl font-bold text-red-500'>Categories</h1>
				</div>
				<Catigories />
			</section>

			<section className='mt-24'>
				<div className='flex justify-between items-center mb-8'>
					<div className='flex items-center gap-4'>
						<div className='w-3 h-10 bg-red-500 rounded' />
						<h1 className='text-2xl font-bold text-red-500'>Best Selling</h1>
					</div>
					<Link href={"/components/products"}  className='px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'>
						View All
					</Link>
				</div>
				<ProductList />
			</section>

			<section className='mt-24 bg-black rounded-2xl p-8 md:p-16 text-white'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-8'>
					<div className='space-y-6'>
						<span className='text-green-400 font-bold'>Categories</span>
						<h1 className='text-4xl md:text-5xl font-bold'>
							Enhance Your Music
							<br />
							Experience
						</h1>
						
						<button className='px-8 py-3 bg-green-400 rounded-lg hover:bg-green-500'>
							Buy Now
						</button>
						<Image src={img2} alt='dsadas'/>
					</div>
					<div className='relative w-full md:w-1/2 h-64'>
						<Image
							src={img3}
							alt='Music Equipment'
							fill
							className='object-contain'
						/>
					</div>
				</div>
			</section>

			<section className='mt-24'>
				<div className='flex items-center gap-4 mb-8'>
					<div className='w-3 h-10 bg-red-500 rounded' />
					<h1 className='text-2xl font-bold text-red-500'>Our Products</h1>
				</div>
				<ProductList />
			</section>

			<section className='mt-24 pb-16'>
				<div className='flex items-center gap-4 mb-8'>
					<div className='w-3 h-10 bg-red-500 rounded' />
					<h1 className='text-2xl font-bold text-red-500'>New Arrivals</h1>
				</div>
				<Arival />
			</section>
		</div>
	)
}

export default Dashboard
