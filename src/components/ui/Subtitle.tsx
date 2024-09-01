const Subtitle = ({ children, className }) => {
  return (
    <h2
      className={`text-sm xs:text-base sm:text-lg font-medium capitalize text-light text-center text-shadow ${className}`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
