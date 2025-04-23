
import React from 'react'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
	return (
		<>
		<h1 className='text-[1rem] font-normal ml-[180px] mt-[40px]'>Home /  <span className='text-gray-700'>Contact</span></h1>
		<div className='max-w-6xl mt-[100px] mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-md'>
			<div className='flex flex-col gap-8'>
				<div className='flex items-start gap-4'>
					<div className='bg-red-500 text-white p-3 rounded-full'>
						<Phone className='w-6 h-6' />
					</div>
					<div>
						<h3 className='text-lg font-semibold'>Call To Us</h3>
						<p className='text-sm mt-1'>
							We are available 24/7, 7 days a week.
						</p>
						<p className='text-sm mt-1'>Phone: +8801611112222</p>
					</div>
				</div>
				<div className='flex items-start gap-4'>
					<div className='bg-red-500 text-white p-3 rounded-full'>
						<Mail className='w-6 h-6' />
					</div>
					<div>
						<h3 className='text-lg font-semibold'>Write To Us</h3>
						<p className='text-sm mt-1'>
							Fill out our form and we will contact you within 24 hours.
						</p>
						<p className='text-sm mt-1'>Emails: customer@exclusive.com</p>
						<p className='text-sm mt-1'>support@exclusive.com</p>
					</div>
				</div>
			</div>

			<form className='flex flex-col gap-4'>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
					<input
						type='text'
						placeholder='Name'
						className='p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400'
					/>
					<input
						type='email'
						placeholder='Email'
						className='p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400'
					/>
					<input
						type='tel'
						placeholder='Phone'
						className='p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400'
					/>
				</div>
				<textarea
					placeholder='Your Message'
					rows={6}
					className='p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400'
				></textarea>
				<div className='flex justify-end'>
					<button
						type='submit'
						className='bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition'
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
		</>
	)
}

export default Contact
