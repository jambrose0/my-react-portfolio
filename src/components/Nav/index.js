// import tailwindcss from "tailwindcss";

function Nav() {
  return (
    <nav className="flex items-left justify-between flex-wrap bg-stars">
      <h1 className="flex items-left justify-between flex-wrap text-white hover:gap-10">
        Jacob Ambrose
      </h1>
      <ul className="flex items-right justify-between flex-wrap text-white basis-1/4 gap-2">
        <li className="row gap-2 basis-1/4">
          <a data-testid="about" href="#about" className="hover:gap-10 ">
            About Me
          </a>
        </li>
        <li className="row gap-2  ">Portfolio</li>
        <li className="row gap-2  ">Contact Me</li>
        <li className="row gap-2 ">Resume</li>
      </ul>
    </nav>
  );
}

export default Nav;
