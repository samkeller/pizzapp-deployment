var React = require('react');

function RightIndex(props: any) {
    const style = {
        color: "white"
    };

    return (<>
        <td valign="top" height="100%" className="contenu">
            <h1 style={{ textAlign: "center" }}> Bienvenue</h1>
            <div style={{ textAlign: "center" }}>
                <span style={{ fontWeight: "bold" }}>Pizzas Thierry
                    </span>vous accueille à
                    <span style={{ fontWeight: "bold" }}>Morteau&nbsp;</span>
                <br />du mardi au samedi, de 18h à 21h30<br /><br /><br />
                <span style={{ fontStyle: "italic" }}>OUVERT le DIMANCHE &nbsp;de juin à fin aout</span>
            </div><br />
            <div style={{ textAlign: "center" }}>
                <a href="/?Nos_plats"><img src="./img/nouveau-clignotant.gif" /> De nouveaux plats a découvrir!</a>
                <br />
            </div>
            <h4 style={{ textAlign: "center", fontWeight: "bold", color: "#33CCFF", fontSize: "18px" }}>Commandez au :<br />
                <span style={{ color: "#eeffee", fontSize: "24px" }}>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="_blank">03 81 67 53 15</a>
                </span>
            </h4><div style={{ textAlign: "center" }}>
                <br />
                <img src="./img/photothierry.jpg" />
                <br />14 rue des Moulinots (direction Pontarlier) - 25500 Morteau
                    <br />
            </div>
            <br />
            <p>&nbsp;</p>
        </td>
    </>)
}

export default RightIndex;