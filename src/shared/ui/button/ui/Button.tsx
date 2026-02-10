import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	forwardRef,
	PropsWithChildren
} from 'react'
import cn from 'classnames'

type ButtonProps = PropsWithChildren<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, ...props }, ref) => (
		<button
			className={cn(
				'bg-main py-1.5 px-6 text-white rounded-xl cursor-pointer disabled:opacity-60 disabled:bg-main disabled:scale-100 hover:bg-hover hover:scale-103 transition-all duration-200',
				className
			)}
			ref={ref}
			{...props}
		>
			{children}
		</button>
	)
)

export default Button
