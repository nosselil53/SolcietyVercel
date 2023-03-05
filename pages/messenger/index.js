import { Fragment, useState } from "react";
import LeftSide from "../../containers/leftSidebar";
import Chitchat from "../../containers/chatBoard";

import ThemeCustomizer from "../../containers/themeCustomizer";

export default function Home() {
	//sidebar-toggle => hehdy rly fyha dimension l page 
	return (
		<Fragment>
			
			<div className="chitchat-container  ">
				<LeftSide />
				<Chitchat />
			</div>
			<ThemeCustomizer />
		</Fragment>
	);
}
