import RightIndex from "./right-components";

var React = require('react');

function RightContainer(props: any) {
    const style = {
    };

    return (<>
        <section style={style} id="right-container">
            <RightIndex />
            {/* <Switch>
                <Route exact path="/" component={RightIndex} />
                <Route path="/nos_pizzas" component={NosPizzas} />
            </Switch> */}
        </section>
    </>)
}

export default RightContainer;