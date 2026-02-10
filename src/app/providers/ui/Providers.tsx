'use client'

import { PropsWithChildren, useState } from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function makeQueryClient() {
	return new QueryClient()
}

export default function Providers({ children }: PropsWithChildren) {
	const [queryClient] = useState(() => makeQueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				transition={Bounce}
			/>
		</QueryClientProvider>
	)
}
