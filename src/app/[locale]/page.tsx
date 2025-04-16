"use client"
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Button } from '@mui/material'
import Link from 'next/link'
import img1 from "@/shared/img/Icon-Google.png"
import Image from 'next/image'
const HomePage = () => {
	const [showPassword, setShowPassword] = useState(false)
	  const [name,setName] = useState("")
		const handleClickShowPassword = () => setShowPassword(show => !show)
	
		const handleMouseDownPassword = (
			event: React.MouseEvent<HTMLButtonElement>
		) => {
			event.preventDefault()
		}
	
		const handleMouseUpPassword = (
			event: React.MouseEvent<HTMLButtonElement>
		) => {
			event.preventDefault()
		}
	  
	
	return <div>
		<div className='flex flex-col items-center justify-center mt-[100px] mb-[100px]'>
			<div className='w-[360px] h-[400px]'>
				<h1 className='text-[2rem] font-bold  mt-[10px]'>
				Log in to Exclusive
				</h1>
				<h2 className='font-normal  mt-[10px]'>
				Enter your details below
				</h2>
				<Box>
				
					<TextField
						variant='outlined'
						label='Email or phone number'
						sx={{
							marginTop: '2rem',
							display: 'flex',
							justifyContent: 'center',
							'& .MuiOutlinedInput-root': {
								'& fieldset': { borderColor: '#ccc' },
								'&:hover fieldset': { borderColor: '#aaa' },
								'&.Mui-focused fieldset': { borderColor: 'gray' },
							},
							'& label.Mui-focused': { color: 'gray' },
						}}
					/>
					<FormControl
          
						sx={{
							mt: '20px',
							width: '100%',
							'& .MuiOutlinedInput-root': {
								'& fieldset': {
									borderColor: '#ccc',
								},
								'&:hover fieldset': {
									borderColor: '#aaa',
								},
								'&.Mui-focused fieldset': {
									borderColor: 'gray',
								},
							},
							'& label.Mui-focused': {
								color: 'gray',
							},
						}}
						variant='outlined'
					>
						<InputLabel htmlFor='outlined-adornment-password'>
							Password
						</InputLabel>
						<OutlinedInput
            onChange={(el)=>setName(el.target.value)}
							id='outlined-adornment-password'
							sx={{ display: 'flex', justifyContent: 'center' }}
							type={showPassword ? 'text' : 'password'}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										aria-label={
											showPassword
												? 'hide the password'
												: 'display the password'
										}
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										onMouseUp={handleMouseUpPassword}
										edge='end'
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label='Password'
						/>
					</FormControl>
				</Box>
        <h1 className='text-[#DB4444] text-center mt-[10px]'>
          <Link href={"pages/newAcount"}>Forget Password?</Link>
        </h1>
        <Link href={"/pages/dashboard"}><Button variant='outlined' sx={{backgroundColor:"#DB4444",border:"none",width:"100%",height:"50px",color:"white",mt:"30px"}}>Log In</Button></Link>
			</div>
		</div>
	</div>
}

export default HomePage
