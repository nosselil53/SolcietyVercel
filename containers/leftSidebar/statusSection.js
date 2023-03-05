import { X } from "react-feather"
const StatusSection = (props) => {

    return (
        <div className={`status-tab custom-scroll dynemic-sidebar ${props.tab === "status" ? "active" : ""}`} id="status">
            <div className="my-status-box">
              <div className="status-content">
                <div className="media">
                  <div className="img-status">
                    <div className="user-status  bg-size" style={{ backgroundImage: `url('../assets/images/avtar/2.jpg')`,backgroundSize:"cover",backgroundPosition:"center",display:"block" }}></div>
                    <div className="upload-img">
                      <input type="file"/>
                    </div>
                  </div>
                  <div className="media-body">
                    <h3>my status</h3>
                    <p>tap to add status Update</p>
                  </div>
         
                </div>
              </div>
            </div>
            <div className="contact-status-box">
              <div className="theme-title">
                <h3>Recent Update</h3>
              </div>
              
              </div>
            </div>
       
    );
}

export default StatusSection;