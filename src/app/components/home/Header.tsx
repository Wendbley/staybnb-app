'use client'


import Image from 'next/image'

import './style.css'
import {  logo, search } from '../../../../public/images'
import Navbar from '../Navbar'

type Props = {}

/**
 *
 * @param props
 * @returns
 */
const Header = (props: Props) => {

	return (
		<div className='header'>
			<Navbar classe={'header'} logo={ logo} link={ 'home' }/>

			<div className='container'>
				<h1>Find Your Next Stay</h1>
				<div className='search-box'>
					<form>
						<div className='location-input'>
							<label>Location</label>
							<input type='text' placeholder='Where ayou going?' />
						</div>
						<div>
							<label>Check in</label>
							<input type='text' placeholder='Add Date' />
						</div>
						<div>
							<label>Check out</label>
							<input type='text' placeholder='Add Date' />
						</div>
						<div>
							<label>Guest</label>
							<input type='text' placeholder='Add Guest' />
						</div>
						<button type='submit'>
							<Image src={search} alt='search' />
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Header
