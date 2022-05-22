import me from "../../assets/images/jacob-ambrose.png";

function About() {
  return (
    <div testid="#about" className="mt-56 flex flex-row  ">
      <img
        src={me}
        className="m-5 rounded-lg box-content h-64 w-64  float-left border-4 border-gold"
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
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
