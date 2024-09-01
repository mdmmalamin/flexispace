const Description = ({ children, className }) => {
  return (
    <p className={`text-xs xs:text-sm md:text-base text-accent ${className}`}>
      {children}
    </p>
  );
};

export default Description;
