import cx from 'classnames'

interface ButtonProps {
  variant: 'primary' | 'secondary'

  onClick?: () => void
  children: React.ReactNode
}

export default function Button({ variant, onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cx('rounded-[35px] px-12 py-4 text-xl font-medium leading-8', {
        'bg-white text-teks': variant === 'primary',
        'bg-primary text-[#fafafa]': variant === 'secondary'
      })}
    >
      {children}
    </button>
  )
}
