import Link from 'next/link'

export default function Footer() {
	const linkStyles =
		'text-xs sm:text-sm hover:text-link transition-colors duration-200'

	return (
		<footer className='container'>
			<div className='flex gap-4 border-y border-y-border py-4 px-1 whitespace-nowrap flex-wrap'>
				<Link href='/' className={linkStyles}>
					Главная страница
				</Link>
				<Link href='/auth/login' className={linkStyles}>
					Авторизация
				</Link>
				<Link href='/auth/register' className={linkStyles}>
					Регистрация
				</Link>
			</div>
			<h5 className='text-main font-kanit text-2xl mt-2'>Naleystogram</h5>
			<p className='text-xs mb-6'>
				© Naleystogram LLC 2026.
				<br />
				<br />
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived not only
				five centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>
		</footer>
	)
}
