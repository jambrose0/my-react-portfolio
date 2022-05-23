import { validateEmail } from "../../utils/helpers";

function Contact() {
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      //   if (!isValid) {
      //     setErrorMessage("Your email is invalid.");
      //   } else {
      //     setErrorMessage("");
      //   }
    }
  };
  return (
    <div className="rounded-lg   bg-oxford text-black w-full md:w-96 md:max-w-full mx-auto">
      <div className="p-6 border border-gold rounded-lg sm:rounded-md">
        <form>
          <label className="block mb-6">
            <span className="text-white">Your name</span>
            <input
              type="text"
              name="name"
              className="
            block
            w-full
            mt-1
            border-gold
            rounded-lg
            shadow-sm
            focus:border-oxford
            focus:ring
            focus:ring-oxford
            focus:ring-opacity-50
          "
              placeholder="Jacob Ambrose"
            />
          </label>
          <label htmlFor="email" className="block mb-6">
            <span className="text-white">Email address</span>
            <input
              name="email"
              type="email"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-lg
            shadow-sm
            focus:border-oxford
            focus:ring
            focus:ring-oxford-200
            focus:ring-opacity-50
          "
              placeholder="username@example.com"
              required
            />
          </label>
          <label class="block mb-6">
            <span class="text-white">Message</span>
            <textarea
              name="message"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-lg
            shadow-sm
            focus:border-oxford-300
            focus:ring
            focus:ring-oxford-200
            focus:ring-opacity-50
          "
              rows="3"
              placeholder="What would you like me to know?"
            ></textarea>
          </label>
          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-black
            bg-gold
            rounded-lg
            transition-colors
            duration-150
            hover:bg-royal
            
          "
            >
              Contact Us
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
