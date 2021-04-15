var React = require('react');

function pizza(props: any) {
    
    const style = {
    };

    return (<>
        <section style={style} id="pizza">
            <h4>{props.pizza.name}</h4>
            <span>{props.pizza.prix}€</span>
            <span>{props.pizza.size}</span>
        </section>
    </>)
}

export default pizza;