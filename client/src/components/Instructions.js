import React from 'react';
import './Instructions.css';

// import images for instruction set
import SearchPage from '../img/searchPage.png';
import Trails from '../img/trails.png';
import SaveTrail from '../img/saveTrail.png';
import PostImage from '../img/postImage.png';
import PostDetail from '../img/postDetail.png';

export default function Instructions() {
  return (
    <div className='instructions'>
      <h1>HIKING FRIEND</h1>
      <h2>Core Functionality</h2>
      <p>
        Hiking Friend is a searching app for hiking trails.  It's core feature includes Google Geolocation and Hiking Project APIs to return 10 popular trails.  After this search, the user is free to store trails for future reference.
      </p>
      <h1>Instructions</h1>
      <img className='col-12 col-s-12' src={SearchPage} alt='search page'/>
      <h2>Searching for trails</h2>
      <p>
        To begin searching for your favorite trails, navigate to the search web page by clicking on "SEARCH TRAILS" on the navigation bar.  
        <br/><br/>
        In the search window, type in your desired destination.  When enough characters has been inputted, a drop down list of likely candidates pops up.  Click one and 10 trails are returned.
      </p>
      <p>
      <img className='col-12 col-s-12' src={Trails} alt='return ten trails'/>      
      </p>
      <h2>Saving trails for prospective hikers</h2>
      <p>
        To save a trail for future reference, click on the "Save Trail" button. This will redirect you to a page containing a form and additional trail details.  
      </p>
      <img className='col-12 col-s-12' src={SaveTrail} alt='save trail'/>       
      <p>
        Fill in the details of interested party members.  After entering some comments, the last field is the date for the prospective hike.  Simply select a date then click save.  You can also select cancel to return to the searched hiking trails.
        <br/><br/>
        To access the saved trails, click on "SAVED TRAILS" on the navigation bar.  
      </p>
      <h2>Saved trail posts</h2>
      <img className='col-3 col-s-3' src={PostImage} alt='post entry'/>
      <p>
        Hovering or clicking on the image on the post will show additional trail detail.
      </p>
      <img className='col-3 col-s-3' src={PostDetail} alt='post detail'/>       
      <p>
        To delete a post, simple click the "Delete Post" button.
      </p>
    </div>
  );
}