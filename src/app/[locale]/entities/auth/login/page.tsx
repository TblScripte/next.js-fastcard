'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Signin = () => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const router = useRouter()
	const t = useTranslations()

	useEffect(() => {
		const savedUserName = localStorage.getItem('userName')
		if (savedUserName) setUserName(savedUserName)
	}, [])

	const handleSignin = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({ userName, password }),
			})
			const data = await res.json()

			if (res.ok && data?.data) {
				localStorage.setItem('access_token', data.data)
				localStorage.setItem('userName', userName)
				window.dispatchEvent(new Event('authChange'))
				setUserName('')
				setPassword('')
				router.push('/')
			} else {
				setError(data.errors?.[0]?.message || 'Неверный логин или пароль')
			}
		} catch {
			setError('Ошибка сервера. Повторите попытку позже.')
		}
	}

	return (
		<div className='flex justify-center items-center min-h-screen bg-[#f9f9f9] px-4'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-md'
			>
				<h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>
					{t('HomePage.logintitle')}
				</h2>
				<p className='text-center text-gray-500 mb-6'>
					{t('HomePage.logindescription')}
				</p>
				<form onSubmit={handleSignin} className='space-y-4'>
					<input
						type='text'
						placeholder={t('HomePage.username')}
						value={userName}
						onChange={e => setUserName(e.target.value)}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none transition'
					/>

					<div className='relative'>
						<input
							type={showPassword ? 'text' : 'password'}
							placeholder={t('HomePage.password')}
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 outline-none transition'
						/>
						<button
							type='button'
							onClick={() => setShowPassword(!showPassword)}
							className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
						>
							{showPassword ? (
								<FaEyeSlash className='h-5 w-5' />
							) : (
								<FaEye className='h-5 w-5' />
							)}
						</button>
					</div>

					{error && (
						<p className='text-center text-sm text-red-500'>{error}</p>
					)}

					<motion.button
						type='submit'
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className='w-full bg-red-500 text-white py-3 rounded-lg font-semibold transition'
					>
						{t('HomePage.login')}
					</motion.button>
				</form>

				<p className='text-center text-sm text-gray-600 mt-4'>
					{t('HomePage.notaccount')}{' '}
					<Link href='/entities/auth/newAcount' className='text-red-500 hover:underline'>
						{t('HomePage.registrationname')}
					</Link>
				</p>
			</motion.div>
		</div>
	)
}

export default Signin
