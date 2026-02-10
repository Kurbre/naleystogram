import { AuthAbout } from '@/widgets/auth-about'
import { AuthLoginForm } from '@/widgets/auth-login-form'

export default function LoginPage() {
	return (
		<section className='container flex justify-between mt-9 sm:mt-29'>
			<AuthAbout />
			<AuthLoginForm />
		</section>
	)
}
