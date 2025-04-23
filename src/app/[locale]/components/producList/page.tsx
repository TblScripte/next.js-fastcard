'use client'

import { useGetCategoryQuery, useGetProductsQuery, usePostCardMutation } from '@/store/api'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'
import Skeleton from '@mui/material/Skeleton'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Rating } from '@mui/material'
import 'swiper/css'
import 'swiper/css/pagination'

const labels: { [index: string]: string } = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
}

function getLabelText(value: number) {
	return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}

export default function ProductList() {
	const { data: products, error, isLoading } = useGetProductsQuery()
	const { data: category, error: categoryError, isLoading: categoryLoading } = useGetCategoryQuery()

	const [ratings, setRatings] = useState<{
		[key: string]: { value: number; hover: number }
	}>({})

	useEffect(() => {
		if (products) {
			const initialRatings = products.reduce((acc, el) => {
				acc[el.id] = { value: 2, hover: -1 }
				return acc
			}, {} as typeof ratings)
			setRatings(initialRatings)
		}
	}, [products])

	const handleRatingChange = (id: string, newValue: number | null) => {
		setRatings(prev => ({
			...prev,
			[id]: {
				...prev[id],
				value: newValue ?? 2,
			},
		}))
	}

	const handleHoverChange = (id: string, newHover: number) => {
		setRatings(prev => ({
			...prev,
			[id]: {
				...prev[id],
				hover: newHover,
			},
		}))
	}

	const [postCard] = usePostCardMutation()

	if (isLoading) {
		return (
			<div className='w-full max-w-[1600px] mx-auto'>
				<Swiper
					slidesPerView={3.6}
					spaceBetween={20}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className='swiperSlide1'
					breakpoints={{
						320: { slidesPerView: 1.2 },
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
						1280: { slidesPerView: 4 },
						1536: { slidesPerView: 5 },
					}}
				>
					{Array.from({ length: 6 }).map((_, index) => (
						<SwiperSlide
							key={index}
							className='bg-white rounded-xl mt-[10px] mb-[10px] shadow-md p-3 flex flex-col justify-between overflow-hidden'
						>
							<div className='relative h-[220px] flex justify-center items-center'>
								<Skeleton variant='rectangular' width='100%' height={200} />
								<div className='absolute bottom-0 left-0 right-0'>
									<Skeleton variant='text' width='100%' height={36} />
								</div>
							</div>
							<Skeleton variant='text' height={24} width='80%' className='mt-2' />
							<Skeleton variant='text' height={20} width='60%' />
							<div className='mt-1'>
								<Skeleton variant='text' width='40%' height={20} />
							</div>
							<div className='mt-2'>
								<Skeleton variant='text' width={120} height={30} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		)
	}

	if (error) {
		return (
			<div>
				<h1>Error...</h1>
			</div>
		)
	}

	return (
		<div className='w-full max-w-[1600px] mx-auto'>
			<Swiper
				slidesPerView={3.6}
				spaceBetween={20}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				className='swiperSlide1'
				breakpoints={{
					320: { slidesPerView: 1.2 },
					640: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
					1280: { slidesPerView: 4 },
					1536: { slidesPerView: 5 },
				}}
			>
				{products?.map(el => {
					const discount = Math.floor(100 - (el.price / el.oldPrice) * 100)
					const current = ratings[el.id] ?? { value: 2, hover: -1 }

					return (
						<SwiperSlide
							key={el.id}
							className='bg-white group rounded-xl mt-[10px] mb-[10px] shadow-md p-3 relative !h-auto flex flex-col justify-between overflow-hidden'
						>
							{el.oldPrice && (
								<div className='absolute top-2 left-2 bg-[#DB4443] text-white text-xs px-2 py-1 rounded z-20'>
									-{discount}%
								</div>
							)}

							<div className='absolute top-2 right-2 z-20 flex flex-col gap-2'>
								<div className='bg-white p-[5px_6px] rounded-full shadow hover:bg-gray-100 cursor-pointer'>
									<FavoriteBorderIcon className='text-gray-500' fontSize='small' />
								</div>
								<div className='bg-white p-[5px_6px] rounded-full shadow hover:bg-gray-100 cursor-pointer'>
									<Link href={`/components/producList/${el.id}`}>
										<VisibilityOutlinedIcon className='text-gray-500' fontSize='small' />
									</Link>
								</div>
							</div>

							<div className='flex justify-center items-center h-[220px] relative'>
								<Image
									src={`https://store-api.softclub.tj/images/${el.image}`}
									width={500}
									height={330}
									alt={el.productName}
									className='object-contain max-h-[200px]'
								/>
								<button
									onClick={() => postCard(el.id)}
									className='absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'
								>
									Add to cart
								</button>
							</div>

							<h2 className='text-sm font-semibold mt-2 line-clamp-1'>
								{el.productName}
							</h2>

							<div className='mt-1'>
								<span className='text-red-600 font-bold text-md'>
									${el.discountPrice}
									<span className='line-through ml-[20px] text-gray-500'>
										${el.price}
									</span>
								</span>
								{el.oldPrice && (
									<span className='line-through text-gray-500 ml-2 text-sm'>
										${el.oldPrice}
									</span>
								)}
							</div>

							<div className='flex items-center gap-1 mt-1'>
								<Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
									<Rating
										name={`hover-feedback-${el.id}`}
										value={current.value ?? 2}
										precision={0.5}
										getLabelText={getLabelText}
										onChange={(event, newValue) =>
											handleRatingChange(el.id, newValue)
										}
										onChangeActive={(event, newHover) =>
											handleHoverChange(el.id, newHover)
										}
										emptyIcon={
											<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
										}
									/>
									<Box sx={{ ml: 2 }}>
										{labels[current.hover !== -1 ? current.hover : current.value]}
									</Box>
								</Box>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}
