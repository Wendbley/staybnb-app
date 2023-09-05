import { FiltersAmnities, FiltersPropertyType } from '@/app/constants'
import React from 'react'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const RightColumn = (props: Props) => {
	return (
		<div className='right-col'>
			<div className='sidebar'>
				<h2>Filters</h2>
				<h3>Property Type</h3>

				{ FiltersPropertyType.map((item, index) => (
					<div className='filter' key={index}>
						<input type='checkbox' /> 
                        <p>{item.home}</p>
						<span>({item.firstNum})</span>
					</div>
				))}

				<h3>Amenities</h3>
				{ FiltersAmnities.map((item, index) => (
					<div className='filter' key={index}>
						<input type='checkbox' /> 
                        <p>{item.home}</p>
						<span>({item.firstNum})</span>
					</div>
				))}
			</div>

			<div className='sidebar-link'>
				<a href='#'>View More</a>
			</div>
		</div>
	)
}

export default RightColumn
