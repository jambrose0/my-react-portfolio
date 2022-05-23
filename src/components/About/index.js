// import { useState } from "react";
import me from "../../assets/images/jacob-ambrose.png";
import resume from "../../assets/files/2022AmbroseWebResume.pdf";

function About() {
  // const [formState, setFormState ] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // })
  return (
    <div testid="#about" className=" flex flex-row  ">
      <img
        src={me}
        className="m-5 rounded-lg box-content h-52 w-52  float-left border-4 border-gold"
        alt="Jacob Ambrose standing in front of a tree"
      />

      <div className="float-right mt-2 m-5 md:20">
        <p className="text-white text-lg text-center  font-serif">
          Jacob Ambrose is a Fullstack Developer. As a fullstack developer he
          believes in creating unique and responsive websites. Fueled by
          discovering new challenges, he is looking for new skills and polishing
          old ones! Contact him here:
          <span>
            <a href="mailto: jambrose0518@gmail.com">
              {" "}
              jambrose0518@gmail.com.
            </a>{" "}
            Click{" "}
            <a
              src={resume}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <span className="underline underline-offset-42font-semibold">
                {" "}
                here to get a copy of his resume{" "}
              </span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
