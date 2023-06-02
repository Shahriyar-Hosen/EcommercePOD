export default function Box({children}: any) {
  return (
    <div className="bg-[#111111] rounded-2xl p-5">
      {children}
    </div>
  )
}