import { PropsWithChildren } from 'react'
import cn from 'classnames'
import Providers from './Providers'
import { Inter, Kanit } from 'next/font/google'
import '../../globals.css'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-inter',
	display: 'swap',
	weight: ['400', '500', '600', '700', '800']
})

const kanit = Kanit({
	subsets: ['latin'],
	variable: '--font-kanit',
	display: 'swap',
	weight: ['400', '500', '600', '700', '800']
})

export default function BaseLayout({ children }: PropsWithChildren) {
	return (
		<html lang='ru'>
			<body className={cn(inter.variable, kanit.variable)}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
