import Description from "../ui/Description";

type TReviewCardProps = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const ReviewCard = ({ quote, name, role, avatar }: TReviewCardProps) => {
  return (
    <div className="xs:p-4 min-w-fit xs:min-w-full md:min-w-[50%] my-10">
      <div className="h-full px-4 md:px-8 py-4 rounded shadow-[0px_0px_8px_rgb(49,106,255,0.5)] mx-5">
        <Description className="leading-relaxed mb-6 text-accent">
          {quote}
        </Description>

        <div className="inline-flex items-center">
          <img
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            src={avatar}
            alt="carousel navigate ui"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-primary">{name}</span>
            <span className="text- text-sm">{role}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
