import { axiosMain } from '@/shared/utils/axios'
import { RegisterForm } from '@/features/auth-register/model/register-schema'

export const fetchRegister = async (data: RegisterForm) => {
	try {
		const response = await axiosMain.post('/register', {
			username: data.login,
			password: data.password,
			email: data.email
		})

		return response.data
	} catch (e) {
		throw new Error('Ошибка регистрации')
	}
}
