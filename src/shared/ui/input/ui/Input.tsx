'use client'
import {
	DetailedHTMLProps,
	forwardRef,
	InputHTMLAttributes,
	useId
} from 'react'
import cn from 'classnames'

type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	error?: string
	label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, label, ...props }, ref) => {
		const id = useId()

		return (
			<div className='mt-1'>
				<div className='relative'>
					{label && (
						<label
							htmlFor={id}
							className={cn(
								'absolute text-xs text-border -top-2 left-3 bg-white px-1',
								error && 'text-red-500'
							)}
						>
							{label}
						</label>
					)}
					<input
						className={cn(
							'border border-border rounded-lg px-3 py-2 outline-none text-sm w-full',
							error && 'border-red-500'
						)}
						id={id}
						{...props}
						ref={ref}
					/>
				</div>
				{error && <span className='text-xs ml-2 text-red-500'>{error}</span>}
			</div>
		)
	}
)

export default Input
