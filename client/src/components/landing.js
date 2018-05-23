import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Sidebar from './sidebar';
import AccordianImg from './accordian_img';
import Instructions from './Instructions';

import './landing.css';

export function Landing() {
    const folders = (
      <div>
        <li className="landing-menu-list-item">
            <Link to={`/homepage`}>Search for your next trail</Link>
        </li>
      </div>
    );

    return (
        <div className="sidebar sidebar-left landing-all">
            {/* <nav className="landing-menu">
                <ul className="landing-menu-list">
                    {folders}
                </ul>
			</nav> */}
			<Sidebar/>
			<Instructions/>
        </div>
    );
}

const mapStateToProps = state => ({
    folderList: Object.keys(state).map(folderId => state[folderId])
});

export default connect(mapStateToProps)(Landing);
