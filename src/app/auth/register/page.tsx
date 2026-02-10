import { AuthAbout } from '@/widgets/auth-about'
import { AuthRegisterForm } from '@/features/auth-register'

export default function RegisterPage() {
	return (
		<section className='container flex justify-between mt-9 sm:mt-35 flex-wrap xm:flex-nowrap'>
			<AuthAbout />
			<AuthRegisterForm />
		</section>
	)
}
