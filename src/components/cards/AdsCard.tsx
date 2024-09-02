import BlurBg from "../ui/BlurBg";

type TAdsProps = {
  icon: React.ReactNode;
  title: string;
};

const AdsCard = ({ icon, title }: TAdsProps) => {
  return (
    <BlurBg className="hover:backdrop-blur-none hover:bg-transparent duration-300 space-y-3">
      <div className="flex items-center justify-center text-light">{icon}</div>
      <h5 className="text-center text-light">{title}</h5>
    </BlurBg>
  );
};

export default AdsCard;
