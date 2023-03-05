import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Style from "../public/assets/style/style.css"

import { ToastContainer } from "react-toastify";
import ChatContextProvider from "../helpers/chatContext/chatCtx";
import CustomizerContextProvider from "../helpers/customizerContext/customizerCtx";

import { useRouter } from "next/router";

export default function MyAppComponent({ Component, pageProps }) {
	const router = useRouter();
	const [currentUser, setCurrentUser] = useState(false);
	const [loader, setLoader] = useState(true);

	

	return (
		<Fragment>
			<Head>
				<title>Solciety </title>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Chitchat" />
				<meta name="keywords" content="Chitchat" />
				<meta name="author" content="Chitchat" />
				<link rel="icon" href="/favicon.png" />
				<link rel="shortcut icon" href="/favicon.png" />
				<link
					rel="stylesheet"
					type="text/scss"
					href="#javascript"
					media="screen"
					id="color"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&amp;display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Roboto:400,500,600&amp;display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&amp;display=swap"
					rel="stylesheet"
				/>
				  <script src="https://kit.fontawesome.com/c523e84bfb.js" crossorigin="anonymous"></script>
			</Head>
			
			<div>
				<CustomizerContextProvider>
					<ChatContextProvider>
						<Component {...pageProps} />
					</ChatContextProvider>
				</CustomizerContextProvider>
				<ToastContainer />
			</div>
		</Fragment>
	);
}
