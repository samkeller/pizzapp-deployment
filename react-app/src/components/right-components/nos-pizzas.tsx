import { useEffect, useState } from "react";
import axios from "axios";
import Pizza from "./pizza"
var React = require('react');

function NosPizzas(props: any) {
    const style = {
    };
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get("/api/pizzas").then((r: any) => {
            console.log(r.data);
            setPizzas(r.data)
        })
    }, []);

    return (<>
        <section style={style} id="left-menu">
            {pizzas.map(pizza => <Pizza pizza={pizza} />)}
        </section>
    </>)
}

export default NosPizzas;