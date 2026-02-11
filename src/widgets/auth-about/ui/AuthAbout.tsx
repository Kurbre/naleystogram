import imageOne from '../assets/image-one.jpg'
import imageTwo from '../assets/image-two.png'
import imageThree from '../assets/image-three.png'
import Image from 'next/image'

export default function AuthAbout() {
	return (
		<div>
			<h3 className='font-kanit text-4xl text-main'>Naleystogram</h3>
			<p className='font-inter max-w-120 mt-3'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>
			<div className='relative mt-10 pb-[100px] md:pb-[350px]'>
				<div className='absolute w-42 h-50 md:w-59 md:h-75 rounded-2xl overflow-hidden shadow-xl -rotate-6 z-10 border-4 border-white'>
					<Image src={imageOne} alt='Image one' fill className='object-cover' />
				</div>

				<div className='absolute w-42 h-50 md:w-59 md:h-75 rounded-2xl overflow-hidden shadow-2xl rotate-6 left-40 sm:left-60 top-10 z-20 border-4 border-white'>
					<Image src={imageTwo} alt='Image two' fill className='object-cover' />
				</div>

				<div className='absolute w-42 h-50 md:w-59 md:h-75 rounded-2xl overflow-hidden shadow-2xl -rotate-2 left-20 sm:left-30 -top-5 z-30 border-4 border-white'>
					<Image
						src={imageThree}
						alt='Image three'
						fill
						className='object-cover'
					/>
				</div>
			</div>
		</div>
	)
}
