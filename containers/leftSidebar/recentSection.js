import { useContext, useState } from "react";
import ChatContext from "../../helpers/chatContext";
import SliderSection from "./sliderSection";
//import { getPageFiles } from "next/dist/next-server/server/get-page-files";
//import React, { useEffect, useLayoutEffect } from "react";

const RecentSection = (props) => {
	const { handleClickRight, mainMenu } = useContext(ChatContext);
	const [sidebarToggle, setSidebarToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  //const width = useWindowSize();
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
		document.querySelector(".app-sidebar").classList.add("active");
	};

	return (
		<div className="recent">
			<div className="theme-title">
        		
				<div className="media">
        <div className=" dynemic-sidebar active">
           <div className="">
               <div className="theme-title">
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
    </div>
  </div>
  <div className="chat custom-scroll">
    <div className="theme-tab tab-sm chat-tabs">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="chat"
          role="tabpanel"
          aria-labelledby="chat-tab"
        >
          <div className="theme-tab">
            <ul className="nav nav-tabs" id="myTab1" role="tablist">
              <li className="nav-item" data-to="chat-content">
                <a
                  className="nav-link button-effect active"
                  id="direct-tab"
                  data-bs-toggle="tab"
                  href="#direct"
                  role="tab"
                  aria-controls="direct"
                  aria-selected="false"
                  data-to="chating"
                >
                  DAOs
                </a>
              </li>
              <li className="nav-item " data-to="call-content">
                <a
                  className="nav-link button-effect"
                  id="group-tab"
                  data-bs-toggle="tab"
                  href="/#group"
                //  onClick={()=> getPageFiles}
                 
                  role="tab"
                  aria-controls="group"
                  aria-selected="false"
                
                >
                  Details
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent1">
              <div
                className="tab-pane fade show active"
                id="direct"
                role="tabpanel"
                aria-labelledby="direct-tab"
              >
                <ul className="chat-main">
                  <li className="active" data-to="chating">
                    <div className="chat-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="/assets/images/avtar/3.jpg"
                          alt="Avatar"
						  width={50}
						  height={50}
							
						
                        />
                      </div>
                      <div className="details">
                        <h5>Global chat</h5>
                        <h6>New announcement</h6>
                      </div>
                      <div className="date-status">
                        <div className="badge badge-primary sm">8</div>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="/assets/images/avtar/2.jpg"
                          alt="Avatar"
						  width={50}
						  height={50}
                        />
                      </div>
                      <div className="details">
                        <h5>Dabloons DAO</h5>
                        <h6 style={{ color: "gray" }}>No news</h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="group"
                role="tabpanel"
                aria-labelledby="group-tab"
              >
                <ul className="group-main">
                  <li data-to="group_blank">
                    <div className="group-box">
                      <div className="profile">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/family.png"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Make Solana greater</h5>
                        <h6>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry.
                        </h6>
                      </div>
                      <div className="date-status">
                        <ul className="grop-icon">
                          <li>
                            <a
                              className="group-tp"
                              href="#"
                              data-tippy-content="Josephin"
                            >
                              <img
                                src="../assets/images/contact/1.jpg"
                                alt="group-icon-img"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="group-tp"
                              href="#"
                              data-tippy-content="Jony "
                            >
                              <img
                                src="../assets/images/contact/2.jpg"
                                alt="group-icon-img"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="group-tp"
                              href="#"
                              data-tippy-content="Pabelo"
                            >
                              <img
                                src="../assets/images/contact/3.jpg"
                                alt="group-icon-img"
                              />
                            </a>
                          </li>
                          <li>+ 12</li>
                        </ul>
                        <div className="badge badge-primary" />
                      </div>
                    </div>
                  </li>
                  <li data-to="group_blank">
                    <div className="group-box">
                      <div className="profile">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/onboard.png"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Onboarding and normies</h5>
                        <h6>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry.
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="group_blank">
                    <div className="group-box">
                      <div className="profile">
                        <img
                          className="bg-img"
                          src="../assets/images/avtar/jobboard.png"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Open Fee-less Marketplace</h5>
                        <h6>
                          Lorem Ipsum is simply dummy text the printing and
                          typesetting industry.
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



				
			     
				</div>
					
				
					<div className="media-body">
					
							<i
								className="ti-angle-right"
								onClick={() => hangleRightClick()}
							></i>
					
							<i className="ti-layout-grid2"></i>
					
					</div>
				</div>
			</div>
			<SliderSection />
		</div>
	);
};

export default RecentSection;
