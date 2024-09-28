import SocialContainer from "../../../assets/icons/SocialContainer";
import Container from "../../ui/Container";
import Headline from "../../ui/Headline";

const teams = [
  {
    img: "",
    fullName: "Jane Doe",
    designation: "Chief Executive Officer (CEO)",
  },
  {
    img: "",
    fullName: "John Smith",
    designation: "Chief Technology Officer (CTO)",
  },
  {
    img: "",
    fullName: "Emily Clark",
    designation: "Chief Operations Officer (COO)",
  },
  {
    img: "",
    fullName: "Michael Brown",
    designation: "Head of Product",
  },
  {
    img: "",
    fullName: "George Johnson",
    designation: "Head of Marketing",
  },
  {
    img: "",
    fullName: "David Johnson",
    designation: "Support Specialist",
  },
];

const MeetTheTeam = () => {
  return (
    <Container className="space-y-12">
      <Headline>Meet Our Team</Headline>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {teams?.map((item, idx) => (
          <div
            className="group before:hover:scale-95 before:hover:h-72 before:hover:w-72 before:hover:rounded-b-lg before:transition-all before:duration-500 before:content-[''] before:w-72 before:h-24 before:rounded-t-lg before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-72 h-72 relative bg-accent/10 flex flex-col items-center justify-center gap-2 text-center rounded-lg overflow-hidden"
            key={idx}
          >
            <div className="w-28 h-28 bg-accent mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-lg font-semibold">{item.fullName}</span>
              <p>{item.designation}</p>
            </div>
            <button className="px-4 py-1 text-slate-50 rounded-md z-10">
              <SocialContainer />
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MeetTheTeam;
