import {menuDatas} from "./menu-datas"
var React = require('react');

function LeftMenu(props: any) {
    const style = {
    };

    function changeRoute(e: any){
        e.preventDefault();
        console.log("fffff");
    }

    return (<>
        <section style={style} id="left-menu">
            <ul>
                {menuDatas.map(route => {
                    return (
                        <li key={route.id} ><a href="#" onClick={e => changeRoute(e)}>{route.name}</a></li>
                    )
                })}
            </ul>
        </section>
    </>)
}

export default LeftMenu;