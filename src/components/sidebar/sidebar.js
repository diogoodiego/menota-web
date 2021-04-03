import { FiPlusCircle, FiHome } from "react-icons/fi";
import "./sideBar.css";

function SideBar(){
    return(
    <div id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block d-none p-0">
        <ul className="nav flex-column p-0">
            <li className="nav-item">
                <a className="nav-link"><FiHome/><p> All notes</p></a>
            </li>
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Tags</span>
        <a className="link-secondary" href="#" aria-label="Add a new report">
            <span><FiPlusCircle /></span>
        </a>
        </h6>
        <ul className="nav flex-column mb-2">
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>Current month
                    </a>
            </li>
        </ul>
    </div>
)};

export default SideBar;