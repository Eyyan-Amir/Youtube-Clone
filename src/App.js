import React, { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { UserProvider } from "./components/userContext";
import "./App.css";
import "./scss/style.scss";

function App() {
	const [showSideBar, handleSideBar] = useState(false);
	const [iconClickedIndex, handleIconClicked] = useState(0);

	const haddleIconsClick = (index) => {
		handleIconClicked(index);
	};

	const props = { handleSideBar, showSideBar };
	// let Comp = components[iconClickedIndex]
	return (
		<div className='App'>
			<UserProvider value={showSideBar}>
				<Header {...props} />
				<div className='main'>
					<SideBar haddleIconsClick={haddleIconsClick} />
					<div className='right'>
						<div className='content-body'>
							<Main showSideBar={showSideBar} />
						</div>
					</div>
				</div>
			</UserProvider>
		</div>
	);
}

export default App;
