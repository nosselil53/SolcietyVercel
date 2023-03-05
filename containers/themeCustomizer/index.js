import { Fragment, useEffect, useState, useContext } from "react";
import CustomizerContext from "../../helpers/customizerContext";



const ThemeCustomizer = () => {
	const customizerCtx = useContext(CustomizerContext);
	const addSidebarBackgroundLayout = customizerCtx.addSidebarBackgroundLayout;
	const addLayoutType = customizerCtx.addLayoutType;
	const addSidebarTypes = customizerCtx.addSidebarTypes;
	const addThemeColors = customizerCtx.addThemeColors;
	const addBackgroundWallpaper = customizerCtx.addBackgroundWallpaper;
	const addBackgroundWallpaperGradients =
		customizerCtx.addBackgroundWallpaperGradients;
	const [modal, setModal] = useState();
	const [customizer, setCustomizer] = useState(false);
	const [layout, setLayout] = useState(true);

	useEffect(() => {
		// sidebar type ltr or rtl
		
/*
		if (!config.layout_type) {
			// sidebar background layout
			document.body.className = config.sidebar_layout;
		} else {
			// layout type
			document.body.className = ` ${config.layout_type}`;
			
		}*/

		if (localStorage.getItem("layout_mode")) {
			document.body.className = ` main-page ${localStorage.getItem(
				"layout_mode"
			)}`;
		}

		// theme color
		/*document.documentElement.className =
			config.color || localStorage.getItem("color");

		// wallpaper and gradients
		if (config.wallpaper) {
			document.querySelector(".wallpapers");
		}*/
	}, []);

	const toggle = () => {
		setModal(!modal);
	};

	const openCloseCustomizer = (open) => {
		setCustomizer(open);
	};

	const handleSidebarBackgroundLayout = (e, layout) => {
		addSidebarBackgroundLayout(e, layout);
		config.sidebar_layout = layout;
	};



	const handleSidebarType = (e, type) => {
		addSidebarTypes(e, type);
		config.sidebar_setting = type;
	};

	const colorChangeTheme = (e, color) => {
		addThemeColors(e, color);
		config.color = color;
	};

	const setBackgroundWallpaper = (e, wallpaper) => {
		addBackgroundWallpaper(e, wallpaper);
		config.wallpaper = wallpaper;
	};

	const setBackgroundWallpaperGradients = (e, gradient) => {
		document.querySelectorAll(".wallpaper li").forEach((item) => {
			item.classList.remove("active");
		});
		addBackgroundWallpaperGradients(gradient);
		e.currentTarget.classList.add("active");
		if (gradient === "grediant-1") {
			document.querySelector(
				".wallpapers"
			).style = `background-image: linear-gradient(359.3deg, rgba(28, 157, 234, 0.1) 1%, rgba(187, 187, 187, 0) 70.9%); background-color: transparent; background-blend-mode: unset;`;
		}
		if (gradient === "grediant-2") {
			document.querySelector(
				".wallpapers"
			).style = `background-image: radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%); background-color: transparent; background-blend-mode: unset;`;
		}
		if (gradient === "grediant-3") {
			document.querySelector(
				".wallpapers"
			).style = `background-image: linear-gradient(109.6deg, rgb(223, 234, 247) 11.2%, rgb(244, 248, 252) 91.1%); background-color: transparent; background-blend-mode: unset;`;
		}
		if (gradient === "grediant-4") {
			document.querySelector(
				".wallpapers"
			).style = `background-image: linear-gradient(-109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%); background-color: transparent; background-blend-mode: unset;`;
		}
		if (gradient === "grediant-5") {
			document.querySelector(
				".wallpapers"
			).style = `background-image: radial-gradient(circle at 10% 20%, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%); background-color: transparent; background-blend-mode: unset;`;
		}
		if (gradient === "grediant-6") {
			document.querySelector(
				".wallpapers"
			).style = `background-image: radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%); background-color: transparent; background-blend-mode: unset;`;
		}
	};

	return (
	<>
	</>
	);
};

export default ThemeCustomizer;
