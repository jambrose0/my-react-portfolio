function Portfolio() {
  return (
    <div className="flex flex-wrap -mx-2 overflow-hidden">
      {/* first project */}
      <div class="my-2 px-2 w-1/2 overflow-hidden h-96 w-96 text-center">
        <h2 className="font-bold  underline underline-offset-2 ">
          Budget Bucket
        </h2>
        <h3>PWA that lets you track your budget on the go!</h3>

        <div className="flex  justify-center relative">
          <a
            href="https://safe-sierra-22456.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  justify-center"
          >
            <img
              className=" border-4 border-gold opacity-100 hover:opacity-25 absolute h-80 w-80"
              src={require("../../assets/images/portfolio/budget-screen.png")}
              alt="example of budget bucket usage"
            ></img>
          </a>
          <a
            href="https://github.com/jambrose0/budget-bucket"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className=" opacity-0 hover:opacity-75"
              src={require("../../assets/icons/github-logo.png")}
              alt="github logo"
            ></img>
          </a>
        </div>
      </div>
      {/* project 2 */}
      <div class="my-2 px-2 w-1/2 overflow-hidden h-96 w-96 text-center">
        <h2 className="font-bold  underline underline-offset-2 ">Date Dime</h2>
        <h3>Allows you to find dinner and a movie playing near you!</h3>
        <div className="flex  justify-center relative">
          <a
            href="https://lyndsclev.github.io/date-dime/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple"
          >
            {" "}
            <img
              className=" border-4 border-gold opacity-100 hover:opacity-25 absolute h-80 w-80"
              src={require("../../assets/images/portfolio/date-screen.png")}
              alt="example of date dime usage"
            ></img>
          </a>

          <a
            href="https://github.com/lyndsclev/date-dime"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className=" opacity-0 hover:opacity-75"
              src={require("../../assets/icons/github-logo.png")}
              alt="github logo"
            ></img>
          </a>
        </div>
      </div>
      {/* project 3 */}
      <div class="my-2 px-2 w-1/2 overflow-hidden h-96 w-96 text-center">
        <h2 className="font-bold  underline underline-offset-2 ">Note Taker</h2>
        <h3>A simple note taking application</h3>
        <div className="flex  justify-center relative">
          <a
            href="https://young-cove-35341.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple"
          >
            <img
              className=" border-4 border-gold opacity-100 hover:opacity-25 absolute h-80 w-80"
              src={require("../../assets/images/portfolio/note-screen.png")}
              alt="example of date dime usage"
            ></img>
          </a>
          <a
            href="https://github.com/jambrose0/note-taker"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className=" opacity-0 hover:opacity-75"
              src={require("../../assets/icons/github-logo.png")}
              alt="github logo"
            ></img>
          </a>
        </div>
      </div>
      {/* project 4 */}
      <div class="my-2 px-2 w-1/2 overflow-hidden h-96 w-96 text-center">
        <h2 className="font-bold  underline underline-offset-2 ">
          ReadMe Generator
        </h2>
        <h3>A node.js readme generator- no more writers' block!</h3>
        <div className="flex  justify-center relative">
          <a
            href="https://github.com/jambrose0/readme-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple"
          >
            <img
              className=" border-4 border-gold opacity-100 hover:opacity-25 absolute h-80 w-80"
              src={require("../../assets/images/portfolio/readme-screen.png")}
              alt="example of readme generator usage"
            ></img>
          </a>
          <a
            href="https://github.com/jambrose0/readme-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className=" opacity-0 hover:opacity-75"
              src={require("../../assets/icons/github-logo.png")}
              alt="github logo"
            ></img>
          </a>
        </div>
      </div>
      {/* project 5 */}
      <div class="my-2 px-2 w-1/2 overflow-hidden h-96 w-96 text-center">
        <h2 className="font-bold  underline underline-offset-2 ">
          Garden Forum
        </h2>
        <h3>
          A full-stack application that allows you to identify mystery plants in
          your garden, take notes on them, and ask questions in an open forum
          for tips on plant care.
        </h3>
        <div className="flex  justify-center relative">
          <a
            href="https://gardenforum.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple"
          >
            <img
              className=" border-4 border-gold opacity-100 hover:opacity-25 absolute h-80 w-80"
              src={require("../../assets/images/portfolio/garden-forum.png")}
              alt="example of friend-finder usage"
            ></img>
          </a>
          <a
            href="https://github.com/bdswartz/garden-forum"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className=" opacity-0 hover:opacity-75"
              src={require("../../assets/icons/github-logo.png")}
              alt="github logo"
            ></img>
          </a>
        </div>
      </div>
      {/* project 6 */}
      <div class="my-2 px-2 w-1/2 overflow-hidden h-96 w-96 text-center">
        <h2 className="font-bold  underline underline-offset-2 ">Travel Log</h2>
        <h3>A secure webpage for you to post your travels and map them out.</h3>
        <div className="flex  justify-center relative">
          <a
            href="http://travel-log-3000.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple"
          >
            <img
              className=" border-4 border-gold opacity-100 hover:opacity-25 absolute h-80 w-80"
              src={require("../../assets/images/portfolio/travel-screen.png")}
              alt="example of friend-finder usage"
            ></img>
          </a>
          <a
            href="https://github.com/adambowers09/project2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              className=" opacity-0 hover:opacity-75"
              src={require("../../assets/icons/github-logo.png")}
              alt="github logo"
            ></img>
          </a>
        </div>
      </div>

      {/* OLD BUDGET BUCKET 
      <div className="h-80 w-80 text-center">
        <h2 className="font-bold  underline underline-offset-2">
          ReadMe Generator
        </h2>
        <h3>
          Say goodbye to writers block with this Command Line readme generator!
        </h3>
        <img
          className="rounded-lg border-2 border-gold "
          src={require("../../assets/images/portfolio/readme-screen.png")}
          alt="example of Readme generator usage"
        ></img>
      </div>
      <div className="h-80 w-80 text-center  underline underline-offset-2">
        <h2 className="font-bold">Travel Log</h2>
        <h3>
          A private Travel log where you can take notes and map where you've
          been!
        </h3>
        <img
          className="rounded-lg border-2 border-gold "
          src={require("../../assets/images/portfolio/travel-screen.png")}
          alt="example of travel log usage"
        ></img>
      </div> */}
    </div>
  );
}

export default Portfolio;
