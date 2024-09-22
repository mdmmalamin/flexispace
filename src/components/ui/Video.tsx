import { TUiProps } from "../../types/TUiProps";

const Video = ({ src, poster, className }: TUiProps) => {
  return (
    <video
      className={className}
      src={src}
      poster={poster}
      controls={false}
      autoPlay={true} // Enable autoplay
      muted={true} // Muted to allow autoplay on iOS
      loop={true} // Enable looping
      playsInline // Necessary for autoplay on iPhones
      style={{ width: "100%", height: "auto" }} // Responsive design
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
