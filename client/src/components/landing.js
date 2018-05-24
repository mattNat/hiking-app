import React from 'react';
import Sidebar from './sidebar';
import Instructions from './Instructions';

export default function Landing() {
    return (
        <div className="Landing">
			<Sidebar/>
			<Instructions/>
        </div>
    );
}
