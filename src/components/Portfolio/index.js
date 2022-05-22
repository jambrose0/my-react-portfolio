function Portfolio() {
  return (
    <div className="flex justify-between grid grid-cols-3 gap-5 m-2">
      <div className="h-80 w-80 text-center">
        <h2 className="font-bold  underline underline-offset-2">
          Budget Bucket
        </h2>
        <h3>PWA that lets you track your budget on the go!</h3>
        <a
          href="https://safe-sierra-22456.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            className="rounded-lg border-2 border-gold opacity-100 hover:opacity-75 "
            src={require("../../assets/images/portfolio/budget-screen.png")}
            alt="example of budget bucket usage"
          ></img>
        </a>
      </div>
      <div className="h-80 w-80 text-center">
        <h2 className="font-bold underline underline-offset-2">Date Dime</h2>
        <h3>Allows you to find dinner and a movie playing near you!</h3>
        <img
          className="rounded-lg border-2 border-gold "
          src={require("../../assets/images/portfolio/date-screen.png")}
          alt="example of Date Dime usage"
        ></img>
      </div>
      <div className="h-80 w-80 text-center">
        <h2 className="font-bold  underline underline-offset-2">
          Friend Finder
        </h2>
        <h3>The backend of a Twitter-esque social media platform</h3>
        <img
          className="rounded-lg border-2 border-gold "
          src={require("../../assets/images/portfolio/friend-screen.png")}
          alt="example of friend finder usage"
        ></img>
      </div>
      <div className="h-80 w-80 text-center">
        <h2 className="font-bold  underline underline-offset-2">Note Taker</h2>
        <h3>An easy-to-use Note taking app!</h3>
        <img
          className="rounded-lg border-2 border-gold "
          src={require("../../assets/images/portfolio/note-screen.png")}
          alt="example of note taker usage"
        ></img>
      </div>
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
      </div>
    </div>
  );
}

export default Portfolio;
