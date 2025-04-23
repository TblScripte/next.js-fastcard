'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { useGetbyIdproductQuery, usePostCardMutation } from '@/store/api'
import Link from 'next/link'
import { Star, Check } from '@mui/icons-material'
import { Skeleton, Stack } from '@mui/material'

const ProductsIdSkeleton = () => {
	return (
		<div className='max-w-6xl mx-auto p-6 bg-white rounded shadow mt-4'>
			<Stack direction='row' spacing={1} className='mb-6'>
				<Skeleton variant='text' width={80} height={20} />
				<Skeleton variant='text' width={20} height={20} />
				<Skeleton variant='text' width={80} height={20} />
				<Skeleton variant='text' width={20} height={20} />
				<Skeleton variant='text' width={200} height={20} />
			</Stack>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='space-y-4'>
					<Skeleton
						variant='rectangular'
						width='100%'
						height={400}
						className='rounded-lg'
					/>
					<Stack direction='row' spacing={2}>
						{[1, 2, 3, 4].map(i => (
							<Skeleton
								key={i}
								variant='rectangular'
								width={80}
								height={80}
								className='rounded'
							/>
						))}
					</Stack>
				</div>

				<div className='space-y-6'>
					<Skeleton variant='text' width='60%' height={40} />

					<Stack direction='row' spacing={1} alignItems='center'>
						<Skeleton variant='circular' width={20} height={20} />
						<Skeleton variant='circular' width={20} height={20} />
						<Skeleton variant='circular' width={20} height={20} />
						<Skeleton variant='circular' width={20} height={20} />
						<Skeleton variant='circular' width={20} height={20} />
						<Skeleton variant='text' width={100} height={20} />
						<Skeleton variant='text' width={80} height={20} />
					</Stack>

					<div className='space-y-4'>
						<Stack direction='row' spacing={2}>
							<Skeleton variant='text' width={100} height={40} />
							<Skeleton variant='text' width={80} height={40} />
						</Stack>

						<Skeleton variant='text' width='100%' height={60} />
						<Skeleton variant='text' width='100%' height={60} />

						<div className='space-y-2'>
							<Skeleton variant='text' width={60} height={30} />
							<Stack direction='row' spacing={1}>
								{[1, 2, 3].map(i => (
									<Skeleton key={i} variant='circular' width={40} height={40} />
								))}
							</Stack>
						</div>

						<div className='space-y-2'>
							<Skeleton variant='text' width={60} height={30} />
							<Stack direction='row' spacing={1}>
								{[1, 2, 3, 4, 5].map(i => (
									<Skeleton
										key={i}
										variant='rectangular'
										width={60}
										height={40}
										className='rounded'
									/>
								))}
							</Stack>
						</div>

						<Skeleton variant='rectangular' width='100%' height={50} />
					</div>
				</div>
			</div>

			<div className='mt-8 pt-6'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
					{[1, 2, 3, 4].map(i => (
						<div key={i}>
							<Skeleton variant='text' width={100} height={30} />
							<Skeleton variant='text' width={80} height={25} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

interface ImageType {
	id: string
	images: string
}

interface ProductType {
	id: string
	productName: string
	description: string
	price: number
	discountPrice?: number
	hasDiscount: boolean
	brand: string
	color: string
	code: string
	weight: number
	size: string
	quantity: number
	images: ImageType[]
	users?: Array<{
		userId: string
		imageName: string
		fullName: string
		userName: string
	}>
}

const ProductsId = () => {
	const params = useParams()
	const id = params.id as string
	const {
		data: product,
		isLoading,
		error,
	}: any = useGetbyIdproductQuery<ProductType>(id)
	const [selectedImage, setSelectedImage] = useState(0)
	const [selectedSize, setSelectedSize] = useState<string | null>(null)
	const [postalCode, setPostalCode] = useState('')
	const [quantity, setQuantity] = useState(1)

	const handleIncrement = () => {
		setQuantity(prev => prev + 1)
	}

	const handleDecrement = () => {
		setQuantity(prev => prev - 1)
	}

	if (isLoading) return <ProductsIdSkeleton />
	if (error || !product)
		return <div className='p-4 text-center text-red-500'>Ошибка загрузки</div>

	const sizeAvailability = {
		XS: 2,
		S: '+',
		M: '+',
		L: null,
		XL: '✅',
	}
	console.log(product);
	
	return (
		<div className='max-w-6xl mx-auto p-6 bg-white rounded inset-shadow-emerald-500 border-r-1px border-r-orange-400 shadow-r mt-4'>
			<div className='flex items-center text-sm text-gray-500 mb-6'>
				<Link href='/dashboard' className='hover:text-orange-600'>
					Home
				</Link>
				<span className='mx-2'>/</span>
				<Link
					href={`/components/producList/${id}`}
					className='hover:text-orange-600'
				>
					getbyId
				</Link>
				<span className='mx-2'>/</span>
				<span className='text-orange-700 font-medium'>{product.productName}</span>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='space-y-4'>
					<div className='relative w-full h-96 border-2 rounded-lg overflow-hidden'>
						<Image
							src={`https://store-api.softclub.tj/images/${product.images[selectedImage].images}`}
							alt={product.productName}
							fill
							className='object-contain'
							priority
						/>
					</div>
					<div className='flex gap-2 flex-wrap'>
						{product.images.map((img: any, index: any) => (
							<div
								key={img.id}
								className={`relative w-20 h-20 border rounded cursor-pointer transition-all ${
									index === selectedImage
										? 'border-2 border-orange-500'
										: 'hover:border-orange-400'
								}`}
								onClick={() => setSelectedImage(index)}
							>
								<Image
									src={`https://store-api.softclub.tj/images/${img.images}`}
									alt={product.productName}
									fill
									className='object-contain p-1'
								/>
							</div>
						))}
					</div>
				</div>

				<div className='space-y-6'>
					<h1 className='text-3xl font-bold'>{product.productName}</h1>

					<div className='flex items-center gap-2'>
						<div className='flex text-yellow-400'>
							{[...Array(5)].map((_, i) => (
								<Star key={i} className='w-5 h-5' />
							))}
						</div>
						<span className='text-sm text-orange-500'>(150 Reviews)</span>
						<span className='ml-4 text-green-600'>• In Stock</span>
					</div>

					<div className='space-y-4'>
						<div className='flex items-baseline gap-4'>
							<span className='text-2xl font-bold text-red-600'>
								${product.discountPrice || product.price}
							</span>
							{product.hasDiscount && (
								<span className='text-lg text-orange-500 line-through'>
									${product.price}
								</span>
							)}
						</div>

						<p className='text-orange-600'>{product.description}</p>

						<div className='space-y-2'>
							<h3 className='font-semibold'>Colours:</h3>
							<div className='flex gap-2'>
								{product.color?.split(',').map((color: any) => (
									<button
										key={color}
										className='w-8 h-8 rounded-full border-2 border-orange-200 relative'
										style={{ backgroundColor: color.trim() }}
									>
										<Check className='absolute inset-0 m-auto text-white text-opacity-0 transition-all' />
									</button>
								))}
							</div>
						</div>

						<div className='space-y-2'>
							<h3 className='font-semibold'>Size:</h3>
							<div className='flex gap-2 flex-wrap'>
								{Object.entries(sizeAvailability).map(
									([size, availability]) => (
										<button
											key={size}
											onClick={() => setSelectedSize(size)}
											className={`px-4 py-2 border rounded relative ${
												selectedSize === size
													? 'border-orange-500 bg-orange-50'
													: 'hover:border-orange-400'
											}`}
										>
											{size}
											{availability && (
												<span className='absolute -top-2 -right-2 text-xs bg-orange-100 rounded-full px-1.5 py-0.5'>
													{availability}
												</span>
											)}
										</button>
									)
								)}
							</div>
						</div>

						<div className='flex gap-4 items-center'>
							<div className='flex items-center  rounded-md'>
								<button
									onClick={handleDecrement}
									className='px-3 py-2 rounded-md bg-orange-100 text-2xl font-bold  disabled:cursor-not-allowed'
								>
									-
								</button>
								<span className='px-4 py-2 font-black'>{quantity}</span>
								<button
									onClick={handleIncrement}
									className='bg-orange-500 p-[13px_10px] rounded-md'
								>
									+
								</button>
							</div>

							<button
								className='flex-1 py-3 bg-orange-500 text-white rounded-md  hover:bg-orange-600 transition-colors disabled:bg-orange-400'
								disabled={product.quantity <= 0}
							>
								{product.quantity > 0
									? `Заказать (${quantity})`
									: 'By now'}
							</button>
						</div>

						<div className='pt-4 space-y-2'>
							<div className='flex items-center gap-2'>
								<Check className='text-green-600' />
								<span className='font-medium'>Free Delivery</span>
							</div>
							<div className='flex gap-2 items-center'>
								<input
									type='text'
									placeholder='Enter postal code'
									className='border px-3 py-2 rounded w-48 text-sm'
									value={postalCode}
									onChange={e => setPostalCode(e.target.value)}
								/>
								<button className='px-4 py-2 text-sm border rounded hover:bg-orange-50'>
									Check Availability
								</button>
							</div>
						</div>

						<div className='pt-2 text-sm text-orange-500'>
							<div className='flex items-center gap-2'>
								<Check className='text-green-600' />
								<span>Free 30 Days Delivery Returns. Details</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-8 pt-6 border-t'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
					<div>
						<h3 className='font-semibold'>Brand:</h3>
						<p>{product.brand}</p>
					</div>
					<div>
						<h3 className='font-semibold'>Product Code:</h3>
						<p>{product.code}</p>
					</div>
					<div>
						<h3 className='font-semibold'>Weight:</h3>
						<p>{product.weight}g</p>
					</div>
					<div>
						<h3 className='font-semibold'>In Stock:</h3>
						<p>{product.quantity > 0 ? 'Yes' : 'No'}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductsId
