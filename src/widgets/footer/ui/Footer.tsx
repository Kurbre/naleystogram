import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='container'>
			<div className='flex gap-4 border-y border-y-border py-2'>
				<Link href='/'>Главная страница</Link>
				<Link href='/auth/login'>Авторизация</Link>
				<Link href='/auth/register'>Регистрация</Link>
			</div>
			<h5 className='text-main font-kanit text-2xl'>Naleystogram</h5>
		</footer>
	)
}
