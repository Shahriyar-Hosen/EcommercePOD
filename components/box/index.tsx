export default function Box({ children }: any) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-[#111111] rounded-2xl p-5 w-1/2 min-w-[450px] max-w-[500px]">
        {children}
      </div>
    </div>
  );
}
