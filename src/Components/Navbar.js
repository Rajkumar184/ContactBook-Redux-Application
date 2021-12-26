import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="col-md-12 bg-dark py-2">
			<nav class="navbar navbar-expand-md navbar-dark bg-dark">
				<Link to={"/"} className="navbar-brand ml-5">
					React Redux Contact Book
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample04"
					aria-controls="navbarsExample04"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarsExample04">
					<ul className="nav navbar-nav ml-auto">
						{/* <div>
							<li className="nav-item">
								<Link className="nav-link text-dark" to="/signup">
									<span className="fas fa-user "></span> Sign Up
								</Link>
							</li>
						</div> */}

						{/* login logout toggle */}

						<li className="nav-item">
							<button className="btn btn-success " to="/logout">
								<span className="fas fa-sign-in-alt "></span> Login
							</button>
						</li>

						{/* <li className="nav-item">
							<Link className="nav-link text-dark" to="/login">
								<span className="fas fa-sign-in-alt "></span> Login
							</Link>
						</li> */}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
