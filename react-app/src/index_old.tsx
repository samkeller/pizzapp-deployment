import Banner from "./components/banner";
import LeftMenu from "./components/left-menu";
import RightContainer from "./components/right-container";

function Index(props: any) {
  return (<>
    <head>
      <link rel="stylesheet" href="/public/css/normalize.css" />
      <link rel="stylesheet" href="/public/css/skeleton.css" />
      <link rel="stylesheet" href="/public/css/index.css" />
    </head>
    <body>
      <div id="main-container">
        <div className="container">
          <Banner />

          <section id="bottom-section" className="row">
            <div className="four columns"><LeftMenu /></div>
            <div className="eight columns"><RightContainer /></div>
          </section>
        </div>
      </div>
    </body>
  </>
  )
}

export default Index;