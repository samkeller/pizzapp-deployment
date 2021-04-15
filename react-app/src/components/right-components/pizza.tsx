var React = require('react');

function pizza(props: any) {

    const style = {
        block: {
            borderBottom: "1px solid #00B0E6",
            padding: "0.5em",
            color: "#eee",
            paddingBottom: "5px",
            marginBottom: "1px",
        },
        title: {
            color: "#33CCFF",
            fontFamily: "Georgia, Times New Roman, Times, serif",
            fontSize: "20px",
        },
        span: {
            fontStyle: "italic" 
        }
    };

    return (<>
        <section className="six columns" style={style.block} id="pizza">
            <h4 style={style.title}>{props.pizza.name}</h4>
            Prix: <span style={style.span}>{props.pizza.prix}€</span><br />
            Taille: <span style={style.span}>{props.pizza.size}</span>
        </section>
    </>)
}

export default pizza;