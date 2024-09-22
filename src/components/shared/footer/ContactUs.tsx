import phone from "../../../assets/icons/phone.svg";
// import navigation from "../../assets/icons/navigation.svg";
import mapPin from "../../../assets/icons/map-pin.svg";

const ContactUs = () => {
  return (
    <>
      <h4 className="text-left text-white text-xl font-bold">Contact</h4>

      <ul className="text-light space-y-2">
        <li className="text-nowrap flex gap-2.5 items-center">
          <img src={phone} alt="" /> +880 17730 553105
        </li>
        <li className="text-nowrap flex gap-2.5 items-center">
          <img src={phone} alt="" />
          Info@flexispace.com
        </li>
        <li className="flex gap-2.5 items-center">
          <img src={mapPin} alt="" /> Mirpur - 1, Dhaka - 1216
        </li>
      </ul>
    </>
  );
};

export default ContactUs;
