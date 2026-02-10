'use client'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { LoginForm, loginSchema } from '../model/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { fetchLogin } from '../api/fetch-login'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function AuthLoginForm() {
	const { register, handleSubmit, formState } = useForm<LoginForm>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema)
	})

	const router = useRouter()

	const { mutateAsync } = useMutation({
		mutationFn: (data: LoginForm) => fetchLogin(data),
		onSuccess: () => {
			router.push('/')
			router.refresh()
		}
	})

	const submitHandler = async (data: LoginForm) => {
		await toast.promise(mutateAsync(data), {
			pending: 'Проверка данных',
			success: 'Вы успешно вошли в аккаунт',
			error: {
				render({ data }: { data: Error }) {
					return data.message
				}
			}
		})
	}

	return (
		<form
			className='shadow-2xl px-3 py-4 rounded-lg w-full md:w-[35%] flex flex-col gap-4 mt-[390px] xm:mt-0'
			onSubmit={handleSubmit(submitHandler)}
		>
			<h3 className='text-center text-xl'>Авторизация</h3>
			<Input
				label='Email, номер телефона, логин'
				error={formState.errors.login?.message}
				{...register('login')}
			/>
			<Input
				label='Пароль'
				error={formState.errors.password?.message}
				type='password'
				{...register('password')}
			/>
			<div className='mx-auto'>
				<Button type='submit'>Войти</Button>
			</div>
			<div className='w-[70%] h-px bg-border mx-auto' />
			<span className='text-sm text-center'>
				У вас уже есть аккаунт?
				<Link href='/auth/register' className='text-link ml-1'>
					Зарегестрировться
				</Link>
			</span>
		</form>
	)
}
