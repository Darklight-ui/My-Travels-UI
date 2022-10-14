/** @format */

import React from "react";

function BodyComponent(props) {
	return (
		<div className='white--bg'>
			<div className='card'>
				<img src={props.data.image} alt='stamp' className='card--img' />
				<div className='card--body'>
					<div className='card--body'>
						<div className='card--stats'>
							<span className='material-symbols-outlined'>location_on</span>{" "}
							<span className='location'>{props.data.location}</span>
							<span className='google--map'>
								<a href={props.data.googleMapLink}>Location</a>
							</span>
						</div>
						<h1 className='card--header'>{props.data.title}</h1>
						<span className='duration'>
							{props.data.startDate} - {props.data.endDate}
						</span>
						<span className='card--desc'>{props.data.desc}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BodyComponent;
