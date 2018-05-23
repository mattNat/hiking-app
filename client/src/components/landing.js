import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
            <nav className="landing-menu">
                <ul className="landing-menu-list">
                    {folders}
                </ul>
            </nav>
            <div className="accordian">
				<ul>
					<li>
						<div className="image_title">
							<a >Find</a>
						</div>
						<a >
							<img src="https://adventurejunkies-theadventurejunk.netdna-ssl.com/wp-content/uploads/hiking-1.jpg" 
							alt='Outdoor mountain one' width='650' height='325' />
						</a>
					</li>
					<li>
						<div className="image_title">
							<a >Your</a>
						</div>
						<a >
							<img src="https://www.travelalaskaoutdoors.com/img/masthead/mountains.jpg" 
							alt='Outdoor mountain two' width='650' height='325' />
						</a>
					</li>
					<li>
						<div className="image_title">
							<a >Next</a>
						</div>
						<a >
							<img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Hiking_in_the_Talkeetna_Mountains_of_Alaska.JPG" 
							alt='Outdoor mountain three' width='650' height='325' />
						</a>
					</li>
					<li>
						<div className="image_title">
							<a >Adventure...</a>
						</div>
						<a >
							<img src="http://yegfitness.ca/wp-content/uploads/2017/07/hiking.jpg" 
							alt='Outdoor mountain four' width='650' height='325' />
						</a>
					</li>
				</ul>
			</div>
        </div>
    );
}

const mapStateToProps = state => ({
    folderList: Object.keys(state).map(folderId => state[folderId])
});

export default connect(mapStateToProps)(Landing);
