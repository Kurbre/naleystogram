import { NextRequest, NextResponse } from 'next/server'

const publicRoutes = ['/auth/login', '/auth/register']

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const token = request.cookies.get('access_token')?.value

	const isPublic = publicRoutes.some(route => pathname.startsWith(route))

	if (token) {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/users/get-profile`,
			{
				method: 'GET',
				headers: {
					cookie: request.headers.get('cookie') || ''
				},
				cache: 'no-store'
			}
		)

		if (!res.ok) {
			const response = NextResponse.redirect(
				new URL('/auth/login', request.url)
			)
			response.cookies.delete('access_token')
			return response
		}
	}

	// если нет токена и роут не публичный -> на логин
	if (!token && !isPublic) {
		return NextResponse.redirect(new URL('/auth/login', request.url))
	}

	// если токен есть и пользователь пришёл на логин/регистрацию -> на главную (опционально)
	if (token && isPublic) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
