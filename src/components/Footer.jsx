import React from "react";

function Footer(props) {
    return (
        <section className={props.darkMode ? "dark" : ""}>
				<small>Developed by Adrienne Carlo, 2023.</small>
		</section>
    )
}
export default Footer