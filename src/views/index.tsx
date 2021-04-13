var React = require('react');

function HelloMessage(props: any) {
  return (<>
    <head>
      <link rel="stylesheet" href="/public/css/normalize.css" />
      <link rel="stylesheet" href="/public/css/skeleton.css" />
      <link rel="stylesheet" href="/public/css/index.css" />
    </head>
    <body>
      <div id="main-container">
        <div className="container">
          <section id="top-section" className="row"></section>
          <section id="bottom-section" className="row">
            <div className="four columns">a</div>
            <div className="eight columns">b</div>
          </section>
        </div>
      </div>
    </body>
  </>
  )
}

module.exports = HelloMessage;