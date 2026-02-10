'use client'

import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Link from 'next/dist/client/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterForm, registerSchema } from '../model/register-schema'
import { useMutation } from '@tanstack/react-query'
import { fetchRegister } from '../api/fetch-register'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function AuthRegisterForm() {
	const { register, handleSubmit, formState } = useForm<RegisterForm>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema)
	})

	const router = useRouter()

	const { mutateAsync } = useMutation({
		mutationFn: (data: RegisterForm) => fetchRegister(data),
		onSuccess: () => {
			router.push('/')
			router.refresh()
		}
	})

	const submitHandler = async (data: RegisterForm) => {
		await toast.promise(mutateAsync(data), {
			pending: 'Проверка данных',
			success: 'Вы успешно создали аккаунт',
			error: {
				render({ data }: { data: string }) {
					return data
				}
			}
		})
	}

	return (
		<form
			className='shadow-2xl px-3 py-4 rounded-lg w-full md:w-[35%] flex flex-col gap-4 mt-[390px] xm:mt-0'
			onSubmit={handleSubmit(submitHandler)}
		>
			<h3 className='text-center text-xl'>Регистрация</h3>
			<Input
				label='Email'
				type='email'
				{...register('email')}
				error={formState.errors.email?.message}
			/>
			<Input
				label='Логин'
				type='text'
				{...register('login')}
				error={formState.errors.login?.message}
			/>
			<Input
				label='Номер телефона'
				type='text'
				{...register('phoneNumber')}
				error={formState.errors.phoneNumber?.message}
			/>
			<Input
				label='Пароль'
				type='password'
				{...register('password')}
				error={formState.errors.password?.message}
			/>
			<Input
				label='Повторите пароль'
				type='password'
				{...register('repeatPassword')}
				error={formState.errors.repeatPassword?.message}
			/>
			<div className='mx-auto'>
				<Button type='submit'>Зарегестрироваться</Button>
			</div>
			<div className='w-[70%] h-px bg-border mx-auto' />
			<span className='text-sm text-center'>
				Уже есть аккаунт?
				<Link href='/auth/login' className='text-link ml-1'>
					Войти
				</Link>
			</span>
		</form>
	)
}
