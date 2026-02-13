import { axiosMain } from '@/shared/utils/axios'
import { LoginForm } from '@/features/auth-login/model/login-schema'
import { ErrorResponse } from '@/shared/model/error.type'
import axios from 'axios'

export const fetchLogin = async (data: LoginForm) => {
	try {
		const response = await axiosMain.post('/auth/login', {
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
