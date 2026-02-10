import * as z from 'zod'

export const loginSchema = z.object({
	login: z
		.string()
		.min(2, 'Минимальная длина поля 2 символа')
		.max(64, 'Максимальная длина поля 64 символа'),
	password: z
		.string()
		.min(6, 'Минимальная длина поля 6 символов')
		.max(32, 'Максимальная длина поля 32 символа')
})

export type LoginForm = z.infer<typeof loginSchema>
