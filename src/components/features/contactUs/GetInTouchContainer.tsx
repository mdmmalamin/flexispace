import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import Description from "../../ui/Description";
import Subtitle from "../../ui/Subtitle";
import PhoneOutline from "../../../assets/icons/PhoneOutline";
import MailOutline from "../../../assets/icons/MailOutline";
import BuildingOutline from "../../../assets/icons/BuildingOutline";

const GetInTouchContainer = () => {
  return (
    <Container className="md:flex justify-between">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7381.721837265013!2d91.77263653574168!3d22.321099150895595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAziz%20Mia%20Masjid%20Circle%2C%2037No.%20Ward%20Munir%20Nagar%2C%20Boropole%2C%20Chattogram%2C%20Bangladesh.%20!5e0!3m2!1sen!2sbd!4v1719953559641!5m2!1sen!2sbd"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-72 md:min-w-96 basis-1/2"
      ></iframe>

      <div className="p-2 sm:p-6 lg:p-12 basis-1/2">
        <div className="min-w-72 max-w-xl">
          <Title className="!text-left">Get In Touch</Title>
          <Description>
            We’d love to hear from you! Reach out and let's start a conversation
            today.
          </Description>
        </div>

        <hr className="my-6" />

        <div className="min-w-72 max-w-xl">
          <Subtitle className="flex justify-center gap-6 !text-left">
            <BuildingOutline size="size-10" className="basis-2/12" />
            <p className="basis-10/12 text-left">
              South Side of Aziz Mia Masjid Circle, 37No. Ward Munir Nagar,
              Boropole, Chattogram, Bangladesh.
            </p>
          </Subtitle>

          <Subtitle className="flex items-center gap-6">
            <PhoneOutline size="size-8" className="basis-2/12" />

            <Link
              className="basis-10/12 text-left"
              to="https://wa.me/880173553105"
              target="_blank"
            >
              +880 17355 3105
            </Link>
          </Subtitle>

          <Subtitle className="flex justify-start gap-6">
            <MailOutline size="size-8" className="basis-2/12" />

            <Link
              className="basis-10/12 text-left"
              to="mailto:info@flexispace.com?subject=Please Provide Subject"
              target="_blank"
            >
              info@flexispace.com
            </Link>
          </Subtitle>
        </div>
        {/* <div className="w-full mt-5">
          <IconCard iconStyle={"bg-blue-400 text-white hover:text-black"} />
        </div> */}
      </div>
    </Container>
  );
};

export default GetInTouchContainer;
