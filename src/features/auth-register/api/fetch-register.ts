export const fetchRegister = async () => {
	const tempData = {
		id: '1233fsd',
		email: 'example@gmail.com',
		password: '123456',
		phoneNumber: '+38095749393',
		login: 'jfsdkfsk'
	}

	return new Promise((resolve, reject) => {
		const isError = false

		setTimeout(() => {
			if (isError) reject('Регистрация провалилась')
			else resolve(tempData)
		}, 3000)
	}) as Promise<typeof tempData | string>
}
