import {Switch, Route,useLocation} from "react-router-dom";
import RightIndex from "./right-components";
import NosPizzas from "./right-components/nos-pizzas";
var React = require('react');

function RightContainer(props: any) {
    const style = {
    };
    const location = useLocation();
    console.log(location.pathname);

    return (<>
        <section style={style} id="right-container">
            <Switch>
                <Route exact path="/" component={RightIndex} />
                <Route exact path="/nos_pizzas/" component={NosPizzas} />
            </Switch>
        </section>
    </>)
}

export default RightContainer;