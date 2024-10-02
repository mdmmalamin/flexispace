import "../../styles/cardSkeleton.css";

const CardSkeleton = ({ flex }: { flex?: boolean }) => {
  return (
    <div id="container" className={`${flex && "flex flex-col"}`}>
      <div id="square" className="shimmer"></div>
      <div id="content">
        <div id="content-title" className="shimmer"></div>
        <div id="content-desc">
          <div className="line shimmer"></div>
          <div className="line shimmer"></div>
          <div className="line shimmer"></div>
          <div className="line shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
