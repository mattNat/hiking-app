import React from 'react';

export default function AccordianImg() {
  return (
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
  );
}