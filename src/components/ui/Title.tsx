const Title = ({ children, className }) => {
  return (
    <h2
      className={`text-2xl md:text-4xl lg:text-5xl font-semibold capitalize text-center ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
