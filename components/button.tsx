type Props = {
  text: string,
  theme: "light" | "dark",
  icon: React.ReactNode
  className?: string
}

export default function Button({ text, icon, theme, className }: Props) {
  return (
    <button
      className={`
      ${className}
      ${theme === "dark" ?
          "bg-[var(--bg-dark)] text-[var(--text-light)] hover:opacity-80 active:scale-[0.9]" :
          "bg-[--bg-light] text-[var(--text-dark)] border hover:bg-[var(--text-dark)] hover:text-[var(--text-light)] hover:border-transparent active:scale-[0.9]"} 
      flex
      flex-row
      gap-3
      items-center 
      justify-center
      py-2
      px-3
      md:py-3
      md:px-4
      rounded-lg
      text-base
      md:text-base
      font-medium
      transition
      duration-500
    `}>
      {text}
      <span className="bg-[var(--primary-button)] px-2 py-0.5 rounded-full">
        {icon}
      </span>
    </button>
  )
}