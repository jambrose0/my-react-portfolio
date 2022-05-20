function Nav() {
  return (
    <header class="row">
      <h1 class="row basis-1/4 gap-8 hover:gap-10">Jacob Ambrose</h1>
      <ul>
        <li class="row gap-2 basis-1/4">
          <a data-testid="about" href="#about" class="hover:gap-10">
            About Me
          </a>
        </li>
        <li class="row gap-2 basis-1/4">Portfolio</li>
        <li class="row gap-2 basis-1/4">Contact Me</li>
        <li class="row gap-2 basis-1/4">Resume</li>
      </ul>
    </header>
  );
}

export default Nav;
