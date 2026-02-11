import Link from 'next/link'

export default function Header() {
	return (
		<header className='shadow-xl px-8 py-2'>
			<div className='container'>
				<Link href='/'>
					<span className='text-xl text-main font-kanit'>Naleystogram</span>
				</Link>
			</div>
		</header>
	)
}
