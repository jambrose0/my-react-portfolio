import github from "../../assets/icons/github-logo.png";
import linkedin from "../../assets/icons/linkedin-logo.png";

function Footer() {
  return (
    <div className="flex flex-row float-center ">
      <a href="https://github.com/jambrose0" target="_blank">
        <img
          className="h-4 w-4 m-2  float-center"
          src={github}
          alt="github logo"
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/jacob-ambrose0518/" target="_blank">
        <img
          className="h-4 w-4 m-2   float-center"
          src={linkedin}
          alt="LinkedIn logo"
        ></img>
      </a>
    </div>
  );
}

export default Footer;
