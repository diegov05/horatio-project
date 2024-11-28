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
          "bg-[var(--bg-dark)] text-[var(--text-light)]" :
          "bg-[--bg-light] text-[var(--text-dark)] border"} 
      flex
      flex-row
      gap-3
      items-center 
      justify-center
      py-3
      px-4
      rounded-lg
      text-xl
      font-medium
    `}>
      {text}
      <span className="bg-[var(--primary-button)] p-2 rounded-full">
        {icon}
      </span>
    </button>
  )
}