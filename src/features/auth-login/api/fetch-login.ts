import { axiosMain } from '@/shared/utils/axios'
import { LoginForm } from '@/features/auth-login/model/login-schema'

export const fetchLogin = async (data: LoginForm) => {
	try {
		const response = await axiosMain.post('/login', {
			username: data.login,
			password: data.password
		})

		return response.data
	} catch (e) {
		console.log(e)
		throw new Error('Ошибка авторизации')
	}
}
