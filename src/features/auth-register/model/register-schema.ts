import * as z from 'zod'

export const registerSchema = z
	.object({
		login: z
			.string()
			.min(2, 'Минимальная длина поля 2 символа')
			.max(32, 'Максимальная длина поля 32 символа'),
		email: z
			.email('Email некорректный')
			.min(4, 'Минимальная длина поля 4 символа')
			.max(64, 'Максимальная длина поля 64 символа'),
		phoneNumber: z
			.string()
			.regex(/^[0-9+]+$/, 'Номер должен содержать только цифры и знак "+" ')
			.min(4, 'Минимальная длина поля 6 символов')
			.max(64, 'Максимальная длина поля 64 символа'),
		password: z
			.string()
			.min(6, 'Минимальная длина поля 6 символов')
			.max(32, 'Максимальная длина поля 32 символа'),
		repeatPassword: z
			.string()
			.min(6, 'Минимальная длина поля 6 символов')
			.max(32, 'Максимальная длина поля 32 символа')
	})
	.refine(data => data.password === data.repeatPassword, {
		message: 'Пароли не совпадают',
		path: ['repeatPassword']
	})

export type RegisterForm = z.infer<typeof registerSchema>
