const Title = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
    <h1 className="text-white text-2xl mb-5">
      {children}
    </h1>
  );
}

export default Title