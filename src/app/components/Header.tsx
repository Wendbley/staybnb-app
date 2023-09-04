import Image from 'next/image'
import { logo, search } from '../../../public/images'
import './style.css'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const Header = (props: Props) => {
	return (
		<div className='header'>
			<nav>
				<a href='index.html'>
					<Image src={logo} alt='logo' className='logo' />
				</a>
				<ul className='nav-links'>
					<li className='nav-link active'>
						<a href='#'>Popular</a>
					</li>
					<li className='nav-link'>
						<a href='#'>Travel Outside</a>
					</li>
					<li className='nav-link'>
						<a href='houseListing.html'>Online Packages</a>
					</li>
				</ul>
				<a href='#' className='register-btn'>
					Register Now
				</a>
				<i className='fas fa-bars fa-2x' id='open'></i>
				<i className='fa-solid fa-x fa-2x' id='close'></i>
			</nav>

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
