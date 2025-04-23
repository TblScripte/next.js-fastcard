'use client'
import React, { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useGetBrandsQuery } from '@/store/api'
import Category from '../category/category'
import axios from 'axios'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import Link from 'next/link'
import { Rating, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'

const PageProducts = () => {
	const { data: brand } = useGetBrandsQuery()
	const [data, setData] = useState([])
	const [brands, setBrands] = useState([])
	const [brandId, setBrandId] = useState('')
	const [categoryId, setCategoryId] = useState('')
	const router = useRouter()
	async function get(brandId = '', categoryId = '') {
		try {
			const { data } = await axios.get(
				`https://store-api.softclub.tj/Product/get-products?BrandId=${brandId}&CategoryId=${categoryId}`
			)
			setData(data.data.products)
		} catch (error) {
			console.error(error)
		}
	}
	async function getBrand() {
		try {
			const { data } = await axios.get(
				'https://store-api.softclub.tj/Brand/get-brands'
			)
			setBrands(data.data)
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		get(brandId, categoryId)
		getBrand()
	}, [brandId, categoryId])
	return (
		<div className='w-[90%] mx-auto flex flex-col lg:flex-row gap-10 py-10'>
			<div className='lg:w-[250px]'>
				<h1 className='text-sm text-gray-600 mt-4'>
					Home / <span className='text-orange-500'>Explore Our Products</span>
				</h1>
				<div className='mt-6'>
					<div className='flex justify-between border-t pt-4 pb-2'>
						<h2 className='text-xl font-semibold text-gray-800'>Категории</h2>
						<KeyboardArrowUpIcon />
					</div>
					<input type='range' className='w-full mt-4' />
					<div className='mt-4'>
						<Category />
						<h3 className='mt-6 mb-2 font-semibold text-gray-800'>Бренды</h3>
						{brand?.map((el: any) => (
							<div key={el.id} className='mb-3 flex items-center gap-2'>
								<input
									type='checkbox'
									onChange={() => setBrandId(el.id)}
									className='accent-orange-500 w-4 h-4'
								/>
								<label className='text-gray-700'>{el.brandName}</label>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='flex-1'>
				<select className='p-[10px_20px] ml-[80%] mb-[20px] border rounded-md'>
					<option>Products</option>
					<option>Products1</option>
					<option>Products2</option>
				</select>
				<div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{data?.map((product: any) => (
						<div
							key={product.id}
							className='bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 relative'
						>
							<div className='relative w-full h-48 mb-4 rounded-xl overflow-hidden'>
								<Image
									src={`https://store-api.softclub.tj/images/${product.image}`}
									alt={product.productName}
									fill
									className='object-cover'
								/>
							</div>
							<h2 className='text-lg font-bold text-gray-800'>
								{product.productName}
							</h2>
							<div className='absolute top-2 right-2 z-20 flex flex-col gap-2'>
								<div className='bg-white p-[5px_6px] rounded-full shadow hover:bg-gray-100 cursor-pointer'>
									<FavoriteBorderIcon
										className='text-gray-500'
										fontSize='small'
									/>
								</div>
								<div className='bg-white p-[5px_6px] rounded-full shadow hover:bg-gray-100 cursor-pointer'>
									<Link href={`/components/producList/${product.id}`}>
										<VisibilityOutlinedIcon
											className='text-gray-500'
											fontSize='small'
										/>
									</Link>
								</div>
							</div>
							<div className='flex items-center gap-1 mt-1'>
								<Stack spacing={1}>
									<Rating
										name='half-rating'
										defaultValue={2.5}
										precision={0.5}
									/>
								</Stack>
							</div>
							<p className='text-sm text-gray-500 mt-2'>
								Цвет: {product.color}
							</p>
							<p className='text-sm text-gray-500'>
								Категория: {product.categoryName}
							</p>
							{product.hasDiscount ? (
								<div className='flex items-center gap-2 mt-2'>
									<span className='text-orange-500 font-bold text-xl'>
										{product.discountPrice} c.
									</span>
									<span className='line-through text-gray-400'>
										{product.price} c.
									</span>
								</div>
							) : (
								<div className='mt-2 text-xl font-bold text-gray-800'>
									{product.price} c.
								</div>
							)}
							<button
								onClick={() => router.push('/pages/cart')}
								className='mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl'
							>
								Добавить в корзину
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PageProducts
