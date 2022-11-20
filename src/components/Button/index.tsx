const Button = ({ children, ...rest }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button {...rest} className="px-5 py-1 rounded-lg text-primary-100 dark:text-primary-200 bg-primary-200 dark:bg-primary-100 border-none hover:hue-rotate-15 hover:scale-105 focus:scale-105 focus:hue-rotate-15 outline-none">
      {children}
    </button>
  )
}

export default Button