import Image from 'next/image'
import React from 'react'
import img1 from "@/shared/img/Frame 684.png"
import img2 from "@/shared/img/Frame 685.png"
import img3 from "@/shared/img/Frame 686.png"
import img4 from "@/shared/img/Frame 687.png"
const Arival = () => {
  return (
	 <div className='flex justify-between flex-wrap mt-[40px]'>
		<Image src={img1} alt=''/>
		<div className='flex flex-col flex-wrap  justify-between'>
			<Image src={img2} alt="" />
			<div className='flex justify-between mb-[10px] sm:mb-[10px]'>
			<Image src={img3} alt="" />
			<Image src={img4} alt="" />
			</div>
		</div>
	 </div>
  )
}

export default Arival