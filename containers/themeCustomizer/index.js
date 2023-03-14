import {  useEffect,  useContext } from "react";
import CustomizerContext from "../../helpers/customizerContext";


const ThemeCustomizer = () => {
//dark mode layout 
	const customizerCtx = useContext(CustomizerContext);
		customizerCtx.addBackgroundWallpaperGradients;
	useEffect(() => {
		if (localStorage.getItem("layout_mode")) {
			document.body.className = ` main-page ${localStorage.getItem(
				"layout_mode"
			)}`;
		}

	}, []);
	
	return (
	<>
	</>
	);
};

export default ThemeCustomizer;
