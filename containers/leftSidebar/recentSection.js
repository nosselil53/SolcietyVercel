import { useContext, useState } from "react";
import ChatContext from "../../helpers/chatContext";
import SliderSection from "./sliderSection";

const RecentSection = () => {
	const { handleClickRight, mainMenu } = useContext(ChatContext);
	const [sidebarToggle, setSidebarToggle] = useState(false);
	const OpenCloseSidebar = (sidebar) => {
		if (sidebar) {
			setSidebarToggle(!sidebar);
			document.querySelector(".main-nav").classList.add("on");
		} else {
			setSidebarToggle(!sidebar);
			document.querySelector(".main-nav").classList.remove("on");
		}
	};

	const hangleRightClick = () => {
		handleClickRight(!mainMenu);
		document.querySelector(".main-nav").classList.remove("on");
		document.querySelector(".app-sidebar").classList.add("on");
	};

	return (
		<div className="recent">
			<div className="theme-title">
				<div className="media">
				<div className="media">
        <div style={{ margin: "auto", textAlign: "center" }}>
          <br />
          <img
            className="glow2"
            src="/assets/images/logo/logogros.png"
            alt="logo"
            style={{
              width: "50%",
              margin: "auto",
              display: "inline-block",
              position: "relative"
            }}
          />
        </div>
      </div>
					<div className="media-body">
						<a
							className={`icon-btn button-effect pull-right mobile-back  ${
								sidebarToggle ? "btn-outline-primary" : "btn-outline-light"
							}`}
							href="#"
						>
							<i
								className="ti-angle-right"
								onClick={() => hangleRightClick()}
							></i>
						</a>
						<a
							className={`icon-btn button-effect pull-right mainnav  ${
								sidebarToggle ? "btn-outline-primary" : "btn-outline-light"
							}`}
							href="#"
							onClick={() => OpenCloseSidebar(sidebarToggle)}
						>
							<i className="ti-layout-grid2"></i>
						</a>
					</div>
				</div>
			</div>
			<SliderSection />
		</div>
	);
};

export default RecentSection;
