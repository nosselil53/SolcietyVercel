import React, { useEffect} from "react";
import FevoriteSection from "./fevoriteSection";
import DocumentSection from "./documentSection";
import ContactListSection from "./contactListSection";
import NotificationSection from "./notificationSection";
import SettingSection from "./settingSection";
import StatusSection from "./statusSection";
import RecentSection from "./recentSection";
import ChatSection from "./chatSection";
import { Fragment, useState } from "react";
import { NavLink, TabContent, TabPane } from "reactstrap";
import { Tooltip } from "react-tippy";
import { getPageFiles } from "next/dist/next-server/server/get-page-files";

const Index = () => {
	const width = useWindowSize();
	const [activeTab, setActiveTab] = useState("");

	function useWindowSize() {
		const [size, setSize] = useState([0, 0]);
		useEffect(() => {
			function updateSize() {
				setSize(window.innerWidth);
			}
			window.addEventListener("resize", updateSize);
			updateSize();
			return () => window.removeEventListener("resize", updateSize);
		}, []);
		return size;
	}

	const TogglTab = (value) => {
		setActiveTab(value);
		document.querySelector(".recent-default").classList.remove("active");
		if(width<800){
			document.querySelector(".app-sidebar").classList.remove("active");
		}
	};

	return (
		<Fragment>
			<nav className="main-nav on custom-scroll">
				{/* logo section */}
				<div className="logo-warpper">
					
					<a  href="/#"
					onClick={()=> getPageFiles}
					>
						<img src="/assets/images/logo/logo.png" alt="logo" />
					</a>
				</div>

				{/* list section */}
				<div className="sidebar-main">
					<ul className="sidebar-top">
						<li>
							<Tooltip title="Status" position="top" trigger="mouseenter">
								<NavLink
									className="button-effect step1"
									onClick={() => TogglTab("status")}
									data-intro="Check Status here"
								>
									<div className="user-popup status one">
										<div
											className="bg-size"
											style={{
												backgroundImage: `url("/assets/images/avtar/1.jpg")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
												display: "block",
											}}
										>
											<img
												className="bg-img"
												src="/assets/images/avtar/2.jpg"
												alt="Avatar"
												style={{ display: "none" }}
											/>
										</div>
									</div>
								</NavLink>
							</Tooltip>
						</li>
						<li>
							<Tooltip title="Favourite" position="top" trigger="mouseenter">
								<NavLink
									className={`icon-btn btn-light button-effect ${
										activeTab === "fevorite" ? "active" : ""
									}`}
									onClick={() => TogglTab("fevorite")}
								>
									<i className="fa fa-star"></i>
								 

								</NavLink>
							</Tooltip>
						</li>
						<li>
							<Tooltip title="Document" position="top" trigger="mouseenter">
								<NavLink
									className={`icon-btn btn-light button-effect ${
										activeTab === "document" ? "active" : ""
									}`}
									onClick={() => TogglTab("document")}
								>
									{" "}
									<i className="fa fa-file-text"></i>
								</NavLink>
							</Tooltip>
						</li>
						<li>
							<Tooltip title="Contact" position="top" trigger="mouseenter">
								<NavLink
									className={`icon-btn btn-light button-effect ${
										activeTab === "contact" ? "active" : ""
									}`}
									onClick={() => TogglTab("contact")}
								>
									{" "}
									<i className="fa fa-users"></i>
								</NavLink>
							</Tooltip>
						</li>

						<li>
							<div className="dot-btn dot-danger grow">
								<Tooltip
									title="Notification"
									position="top-end"
									size="small"
									trigger="mouseenter"
								>
									<NavLink
										className={`icon-btn btn-light button-effect ${
											activeTab === "notification" ? "active" : ""
										}`}
										onClick={() => TogglTab("notification")}
									>
										<i className="fa fa-bell"></i>
									</NavLink>
								</Tooltip>
							</div>
						</li>
						<li>
							<Tooltip title="Settings" position="top" trigger="mouseenter">
								<NavLink
									className={`icon-btn btn-light button-effect step2 ${
										activeTab === "setting" ? "active" : ""
									}`}
									onClick={() => TogglTab("setting")}
									data-intro="You can change settings by clicking here"
								>
									<i className="fa fa-cog"></i>
								</NavLink>
							</Tooltip>
						</li>
					</ul>
					<ul className="sidebar-bottom">
						<li>
							<Tooltip title="SignOut" position="top" trigger="mouseenter">
								<NavLink
									className="icon-btn btn-light"
								>
									<i className="fa fa-power-off"> </i>
								</NavLink>
							</Tooltip>
						</li>
					</ul>
				</div>
			</nav>

			<aside className="chitchat-left-sidebar left-disp">
				<div className="recent-default dynemic-sidebar active">
					<RecentSection />
					<ChatSection />
				</div>
				<TabContent activeTab={activeTab}>
					<TabPane tabId="fevorite">
						<FevoriteSection tab={activeTab} ActiveTab={setActiveTab} />
					</TabPane>
					<TabPane tabId="document">
						<DocumentSection tab={activeTab} ActiveTab={setActiveTab} />
					</TabPane>
					<TabPane tabId="contact">
						<ContactListSection tab={activeTab} ActiveTab={setActiveTab} />
					</TabPane>
					<TabPane tabId="notification">
						<NotificationSection tab={activeTab} ActiveTab={setActiveTab} />
					</TabPane>
					<TabPane tabId="setting">
						<SettingSection tab={activeTab} ActiveTab={setActiveTab} />
					</TabPane>
					<TabPane tabId="status">
						<StatusSection tab={activeTab} ActiveTab={setActiveTab} />
					</TabPane>
				</TabContent>
			</aside>
		</Fragment>
	);
};

export default Index;
