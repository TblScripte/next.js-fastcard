'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function SignupForm() {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const router = useRouter()
	const t = useTranslations()

	const handleSignup = async (e: React.FormEvent) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			setError('Пароли не совпадают')
			return
		}

		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/register`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify({
						userName,
						email,
						phoneNumber,
						password,
						confirmPassword,
					}),
				}
			)

			const data = await response.json()
			console.log('Ответ от сервера:', data)

			if (response.ok && data?.data) {
				localStorage.setItem('authToken', data.data)
				localStorage.setItem('userName', userName)
				router.push('/entities/auth/newAcount')
			} else {
				setError(data.errors?.[0] || 'Произошла ошибка при регистрации.')
			}
		} catch (err) {
			setError('Ошибка сервера. Повторите попытку позже.')
		}
	}

	return (
		<div className='flex justify-center items-center min-h-screen  px-4'>
			<div className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300'>
				<h2 className='text-3xl font-bold text-center text-gray-800 mb-3'>
					{t('HomePage.registertitle')}
				</h2>
				<h3 className='text-base font-normal text-center text-gray-600 mb-6'>
					{t('HomePage.registerdescription')}
				</h3>

				<form onSubmit={handleSignup}>
					<div className='mb-4'>
						<input
							type='text'
							value={userName}
							onChange={e => setUserName(e.target.value)}
							placeholder={t('HomePage.username')}
							className='w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-[#DB4444] focus:outline-none transition'
						/>
					</div>

					<div className='mb-4'>
						<input
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder={t('HomePage.email')}
							className='w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-[#DB4444] focus:outline-none transition'
						/>
					</div>

					<div className='mb-4'>
						<input
							type='tel'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
							placeholder={t('HomePage.Phone')}
							className='w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-[#DB4444] focus:outline-none transition'
						/>
					</div>

					<div className='mb-4 relative'>
						<input
							type={showPassword ? 'text' : 'password'}
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder={t('HomePage.password')}
							className='w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-[#DB4444] focus:outline-none transition'
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

					<div className='mb-4 relative'>
						<input
							type={showConfirmPassword ? 'text' : 'password'}
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
							placeholder={t('HomePage.confirmpassword')}
							className='w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-[#DB4444] focus:outline-none transition'
						/>
						<button
							type='button'
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
						>
							{showConfirmPassword ? (
								<FaEyeSlash className='h-5 w-5' />
							) : (
								<FaEye className='h-5 w-5' />
							)}
						</button>
					</div>

					{error && (
						<div className='text-red-500 text-center mb-4'>{error}</div>
					)}

					<button
						type='submit'
						className='w-full p-3 bg-[#DB4444] text-white rounded-lg hover:bg-[#B63737] transition-colors duration-300 focus:outline-none'
					>
						{t('HomePage.register')}
					</button>
				</form>

				<div className='mt-4 text-center'>
					<p className='text-sm text-gray-600'>
						{t('HomePage.Already')}{' '}
						<Link
							href='/signin'
							className='text-[#DB4444] hover:text-[#B63737]'
						>
							{t('HomePage.Login')}
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
