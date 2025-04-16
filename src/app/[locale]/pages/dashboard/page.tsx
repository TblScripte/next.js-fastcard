"use client"
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Translates from '../translatePage/translate'
import Image from 'next/image'
import img1 from "@/shared/img/Frame 560.png"
const Dashboard = () => {
	return (
		<div className='w-[80%] m-auto'>
			<section className='mt-[30px] flex justify-between'>
				<div className='w-[300px] h-[500px] border-r-gray-700	 border-r-[1px]'>
					<h1 className='mb-[20px] text-[1.2rem]'>
						Woman’s Fashion <ChevronRightIcon />
					</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>
						Men’s Fashion <ChevronRightIcon />
					</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>Electronics</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>Electronics</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>Home & Lifestyle</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>Medicine</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>Sports & Outdoor</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>Baby’s & Toys</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>Groceries & Pets</h1>
					<h1 className='mb-[20px] text-[1.2rem]'>Health & Beauty</h1>
				</div>
				<div>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className='mySwiper'
					>
						<SwiperSlide>
							<Image src={img1} alt=""/>
						</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
						<SwiperSlide>Slide 5</SwiperSlide>
						<SwiperSlide>Slide 6</SwiperSlide>
						<SwiperSlide>Slide 7</SwiperSlide>
						<SwiperSlide>Slide 8</SwiperSlide>
						<SwiperSlide>Slide 9</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</div>
	)
}

export default Dashboard
