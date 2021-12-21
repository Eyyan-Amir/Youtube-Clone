import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import '.././scss/sideBar.scss'
import { UserConsumer } from "./userContext";

function SideBar(props) {
	const [show, setShow] = useState(false)
	useEffect(() =>
	{
		let items = document.querySelectorAll('ul.dashBoard li');
		items.forEach(item =>
		{
			item.addEventListener('click', () =>
			{
				items.forEach(i => i.classList.remove('active'));
				item.classList.add('active')
			})
		})
	})

	// [{
	// 	path: '/,=',
	// 	className: '',
	// 	title: '',
	// 	svg:
	// }]

	return (
		<>
			<UserConsumer>
				{(showSideBar) => (
					<Router>
					<ul className={`dashBoard ${ !showSideBar ? "less" : "show" }`}>
						<li className={`dashBoard__icon active`}>
							{/* <Link to="/"> */}
								<span onClick={() => props.history.push('/')}>
									<svg viewBox="0 0 24 24">
										<g>
											<path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
										</g>
									</svg>
								</span>
								<i>Home</i>
							{/* </Link>																 */}
						</li>
						<li className={"dashBoard__icon"}>
								<span onClick={() => props.history.push('/explore')}>
									<svg viewBox="0 0 24 24">
										<g>
											<path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path>
										</g>
									</svg>
								</span>
								<i>Explore</i>
						</li>
						<li className="dashBoard__icon b-bottom">
							<span>
								<svg viewBox="0 0 24 24">
									<g>
										<path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
									</g>
								</svg>
							</span>
							<i>Subscription</i>
						</li>
						<li className="dashBoard__icon">
							<span>
								<svg viewBox="0 0 24 24">
									<g>
										<path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
									</g>
								</svg>
							</span>
							<i>Library</i>
						</li>
						{showSideBar && <>
							<li className="dashBoard__icon ">
								<span>
									<svg viewBox="0 0 24 24">
										<g>
											<path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path>
										</g>
									</svg>
								</span>
								<i>history</i>
							</li>
							<li className="dashBoard__icon ">
								<span>
									<svg viewBox="0 0 24 24">
										<g>
											<path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path>
										</g>
									</svg>
								</span>
								<i>your videos</i>
							</li>
							<li className="dashBoard__icon ">
								<span>
									<svg viewBox="0 0 24 24">
										<g>
											<path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path>
										</g>
									</svg>
								</span>
								<i>watch later</i>
							</li>
							<li className="dashBoard__icon ">
								<span>
									<svg viewBox="0 0 24 24">
										<g>
											<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z"></path>
										</g>
									</svg>
								</span>
								<i>playlist</i>
							</li>
							<li
								className={`dashBoard__icon b-bottom ${ !show ? "d-block" : "d-none" }`} onClick={() => setShow(!show)}
							>
								<span>
									<svg viewBox="0 0 24 24">
										<g>
											<path d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z"></path>
										</g>
									</svg>
								</span>
								<i>show more</i>
							</li>
							{show && <> <li className="dashBoard__icon">
								<span>
									<svg viewBox="0 0 24 24">
										<g>
											<path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path>
										</g>
									</svg>
								</span>
								<i>Like videos</i>
							</li>
								<li className="dashBoard__icon">
									<span>
										<svg viewBox="0 0 24 24">
											<g>
												<path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path>
											</g>
										</svg>
									</span>
									<i>watch later</i>
								</li>
								<li className="dashBoard__icon">
									<span>
										<svg viewBox="0 0 24 24">
											<g>
												<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z"></path>
											</g>
										</svg>
									</span>
									<i>playlist</i>
								</li>
								<li
									className="dashBoard__icon b-bottom" onClick={() => setShow(!show)}
								>
									<span>
										<svg viewBox="0 0 24 24">
											<g>
												<polygon points="18.4,14.6 12,8.3 5.6,14.6 6.4,15.4 12,9.7 17.6,15.4 "></polygon>
											</g>
										</svg>
									</span>
									<i>show less</i>
								</li> </>}
							<li className="dashBoard__icon  subscription">
								SUBSCRIPTIONS
							</li>
							<li className="dashBoard__icon ">
								<div className="wrapper">
									<div className="image">
										<img
											src="images/img/subsrcibe.jpg"
											alt=""
											className="img-fluid"
										/>
									</div>
									<div className="text">Channel</div>
								</div>
							</li>
							<li className="dashBoard__icon ">
								<div className="wrapper">
									<div className="image">
										<img
											src="images/img/subsrcibe.jpg"
											alt=""
											className="img-fluid"
										/>
									</div>
									<div className="text">Channel</div>
								</div>
							</li>
							<li className="dashBoard__icon ">
								<div className="wrapper">
									<div className="image">
										<img
											src="images/img/subsrcibe.jpg"
											alt=""
											className="img-fluid"
										/>
									</div>
									<div className="text">Channel</div>
								</div>
							</li>
							<li className="dashBoard__icon ">
								<div className="wrapper">
									<div className="image">
										<img
											src="images/img/subsrcibe.jpg"
											alt=""
											className="img-fluid"
										/>
									</div>
									<div className="text">Channel</div>
								</div>
							</li>
							<li className="dashBoard__icon ">
								<div className="wrapper">
									<div className="image">
										<img
											src="images/img/subsrcibe.jpg"
											alt=""
											className="img-fluid"
										/>
									</div>
									<div className="text">Channel</div>
								</div>
							</li>
						</>}
					</ul>
				</Router>
				)}
				
			</UserConsumer>
		</>
	);
}

export default withRouter(SideBar)