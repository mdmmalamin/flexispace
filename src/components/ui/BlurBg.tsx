const BlurBg = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={`bg-white/10 backdrop-blur-sm p-2 rounded-md border border-white/20 ${className}`}
    >
      {children}
    </div>
  );
};

export default BlurBg;
