

export default function Input({
  value,
  type,
  onChange,
  label,
}: {
  value?: any,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  type?: string,
  label: string,
}) {
  return (
    <div className="relative mb-4">
      <input
        type={type || "text"}
        {...(value && { value: value })}
        {...(onChange && { onChange: onChange })}
        id="floating_filled"
        className="
          block
          rounded-lg
          px-2.5
          pb-2.5
          pt-5
          w-full
          text-sm
          text-white
          bg-[#27272a]
          hover:bg-[#303033]
          transition
          appearance-none
          focus:outline-none
          caret-white
          peer
        "
        placeholder=" " // this is required
      />
      <label
        htmlFor="floating_filled"
        className="
          absolute
          text-sm
          text-[#a1a1aa]
          duration-300
          transform
          -translate-y-4
          scale-75
          top-4
          z-10
          origin-[0]
          left-2.5
          peer-focus:text-white
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
        "
      >{label || "Please set label prop"}</label>
    </div>
  )
}