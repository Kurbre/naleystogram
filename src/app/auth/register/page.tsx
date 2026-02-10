import { AuthAbout } from '@/widgets/auth-about'
import { AuthRegisterForm } from '@/widgets/auth-register-form'

export default function RegisterPage() {
	return (
		<section className='container flex justify-between mt-9 sm:mt-29'>
			<AuthAbout />
			<AuthRegisterForm />
		</section>
	)
}
