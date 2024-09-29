import Container from "../../ui/Container";
import Title from "../../ui/Title";
import ourStory from "../../../assets/images/our_story.jpg";

const ContactFormContainer = () => {
  return (
    <Container className="flex flex-col md:flex-row gap-10 items-center">
      <div className="w-full mx-auto px-8 py-6 bg-accent/10 rounded-lg shadow-lg basis-1/2">
        <Title className="!text-left">Get started with FlexiSpace</Title>
        <form>
          <div className="mb-4">
            <label className="block text-dark mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300"
              placeholder="Enter your name"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300"
              placeholder="Enter your email"
              name="email"
              id="email"
              type="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300"
              placeholder="Subject"
              name="subject"
              id="subject"
              type="subject"
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark mb-1" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300"
              placeholder="Enter your message"
              name="message"
              id="message"
            ></textarea>
          </div>

          <button
            className="w-full bg-secondary text-dark py-2 px-4 rounded-lg hover:bg-secondary/70 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="basis-1/2 rounded-lg overflow-hidden">
        <img className="object-cover object-center" src={ourStory} alt="" />
      </div>
    </Container>
  );
};

export default ContactFormContainer;
