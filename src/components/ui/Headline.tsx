const Headline = ({ children, className }) => {
  return (
    <h1
      className={`text-2xl xs:text-4xl md:text-6xl lg:text-7xl font-bold capitalize text-center text-shadow ${className}`}
    >
      {children}
    </h1>
  );
};

export default Headline;
