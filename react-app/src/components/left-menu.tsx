import {menuDatas} from "./menu-datas"
import {Link} from "react-router-dom";
var React = require('react');


function LeftMenu(props: any) {
    const style = {
    };

    return (<>
        <section style={style} id="left-menu">
            <ul>
                {menuDatas.map(route => {
                    return (
                        <li key={route.id} ><Link to={route.uri}>{route.name}</Link></li>
                    )
                })}
            </ul>
        </section>
    </>)
}

export default LeftMenu;