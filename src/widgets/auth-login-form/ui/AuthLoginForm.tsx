'use client'
import {Input} from '@/shared/ui/input'
import {Button} from '@/shared/ui/button'
import Link from 'next/dist/client/link'
import {useForm} from 'react-hook-form'
import {LoginForm, loginSchema} from '../model/login-schema'
import {zodResolver} from '@hookform/resolvers/zod'

export default function AuthLoginForm() {
	const { register, handleSubmit, formState } = useForm<LoginForm>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema)
	})

	const submitHandler = (data: LoginForm) => {
		console.log(data)
	}

	return (
		<form
			className='shadow-2xl px-3 py-4 rounded-lg w-[35%] flex flex-col gap-4'
			onSubmit={handleSubmit(submitHandler)}
		>
			<h3 className='text-center text-xl'>Авторизация</h3>
			<Input
				placeholder='Email, номер телефона, логин'
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
