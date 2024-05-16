import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>  {/* Este el el div donde Esta todo el contenido */}
			<div>   {/* Contenido del NavBar */}
				<NavBar/>
			</div>
			<div className="container"> {/* Contenido del Jumbotron y Las cartas */}
				<Jumbotron/>
				<div className="row">
					<div className="col-sm-12 col-md-3 col-lg-3 mt-2">
						<Card/>
					</div>
					<div className="col-sm-12 col-md-3 col-lg-3 mt-2">
						<Card/>
					</div>
					<div className="col-sm-12 col-md-3 col-lg-3 mt-2">
						<Card/>
					</div>
					<div className="col-sm-12 col-md-3 col-lg-3 mt-2">
						<Card/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
