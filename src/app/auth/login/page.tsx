import { AuthAbout } from '@/widgets/auth-about'
import { AuthLoginForm } from '@/features/auth-login'

export default function LoginPage() {
	return (
		<section className='container flex justify-between mt-9 sm:mt-35 flex-wrap xm:flex-nowrap'>
			<AuthAbout />
			<AuthLoginForm />
		</section>
	)
}
