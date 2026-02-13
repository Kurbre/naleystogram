import { axiosMain } from '@/shared/utils/axios'
import { RegisterForm } from '@/features/auth-register/model/register-schema'
import axios from 'axios'

export const fetchRegister = async ({
	repeatPassword,
	...data
}: RegisterForm) => {
	try {
		const response = await axiosMain.post('/auth/register', {
			...data
		})

		return response.data
	} catch (e) {
		if (axios.isAxiosError(e)) {
			const message = e.response?.data?.message ?? 'Ошибка авторизации'
			throw new Error(message)
		}

		throw new Error('Unexpected error')
	}
}
