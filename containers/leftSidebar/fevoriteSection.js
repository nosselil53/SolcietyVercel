import {X} from "react-feather"


	const Section2 = (props) => {
		const closeLeftSide = () => {
			document.querySelector(".notification-tab").classList.remove("active")
			document.querySelector(".recent-default").classList.add("active");
			props.ActiveTab("")
		  }
		

	const addToFavourite = (e) => {
		e.currentTarget.classList.toggle("btn-outline-primary");
		e.currentTarget.classList.toggle("btn-primary");
	};

	return (
		<div
			className={`fevorite-tab dynemic-sidebar ${
				props.tab === "fevorite" ? "active" : ""
			}`}
			id="favourite"
		>
			<div className="theme-title">
				<div className="media">
				

					<div>
						<h2>Favourite</h2>
						<h4>Last Recent</h4>
						</div>
						<div className='media-body text-right'>
            {' '}
            <a
              className='icon-btn btn-outline-light btn-sm close-panel'
              href='#'
              onClick={() => closeLeftSide()}
            >
              <X />
            </a>
          </div>
						

				
					</div>
					</div>
					
		</div>
	);
};

export default Section2;
