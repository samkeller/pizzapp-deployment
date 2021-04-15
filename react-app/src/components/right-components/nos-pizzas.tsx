import { useEffect, useState } from "react";
import axios from "axios";
import Pizza from "./pizza"
import Ipizza from "../../../../interfaces/Ipizza"
import pizzaImage from "../../resources/img/unknown.png";
var React = require('react');

function NosPizzas(props: any) {
    const style = {
        h1: {
            fontSize: "16pt",
            marginBottom: "6px",
            color: "#CCFFFF"
        },
        section: {
            width: "100%",
            padding: "30px 0"
        }

    };
    const [pizzas, setPizzas] = useState([] as Ipizza[])

    useEffect(() => {
        axios.get("/api/pizzas").then((r: any) => {
            console.log(r.data);
            setPizzas(r.data as Ipizza[])
        })
    }, []);

    return (<>
        <h1 style={{ ...style.h1, textAlign: "center" }}>Nos pizzas</h1>
        <img src={pizzaImage} alt="Une pizza"/>
        <section style={style.section} id="left-menu" className="container">
            <div className="row">
                {pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} />)}
            </div>
        </section>
    </>)
}

export default NosPizzas;