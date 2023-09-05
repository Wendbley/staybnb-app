import { HouseList } from '@/app/constants'
import React from 'react'
import House from './House'

type Props = {}

const LeftColumn = (props: Props) => {
	return (
		<div className='left-col'>
			<p>200+ Options</p>
			<h1>Recommended Places In San Francisco</h1>

			{HouseList.map((house, index) => (
				<House key={index} {...house} />
			))}
		</div>
	)
}

export default LeftColumn
