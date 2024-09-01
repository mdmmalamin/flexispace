// import { useState, useEffect } from "react";

// const Video = ({ src, poster }) => {
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const videoElement = document.getElementById("lazy-video");
//       const bounding = videoElement.getBoundingClientRect();
//       if (
//         bounding.top >= 0 &&
//         bounding.bottom <=
//           (window.innerHeight || document.documentElement.clientHeight)
//       ) {
//         setIsInView(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <video
//       id="lazy-video"
//       src={isInView ? src : ""}
//       poster={poster}
//       controls={false}
//       autoPlay={true}
//       muted={true}
//       loop={true}
//       playsInline
//       style={{ width: "100%", height: "auto" }}
//     >
//       Your browser does not support the video tag.
//     </video>
//   );
// };

// export default Video;

const Video = ({ src, poster, className }) => {
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
