function Nav() {
  return (
    <div className="bg-mtn my-50 w-screen fixed absolute fixed h-screen  ">
      <nav className="flex items-left justify-between flex-wrap ">
        <h1 className="flex items-left justify-between flex-wrap text-white hover:gap-10  text-3xl hover:text-red hover:text-4xl">
          <a href="/">Jacob Ambrose</a>
        </h1>
        <ul className="flex items-right  flex-wrap text-white text-2xl  ">
          <li className=" row  mx-3 hover:text-gold hover:text-3xl ">
            <a data-testid="about" href="#about" className="">
              About Me
            </a>
          </li>
          <li className="row mx-3  hover:text-gold hover:text-xl  hover:text-3xl ">
            <a data-testid="Portfolio" href="#Portfolio" className=" ">
              Portfolio
            </a>
          </li>
          <li className="row  mx-3 hover:text-gold hover:text-xl hover:text-3xl">
            <a data-testid="contact" href="#contact" className="">
              Contact Me
            </a>
          </li>
          <li className="row  mx-3  hover:text-gold hover:text-xl hover:text-3xl">
            <a data-testid="resume" href="#resume" className="">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
