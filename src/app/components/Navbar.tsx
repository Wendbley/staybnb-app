import Image, { StaticImageData } from 'next/image'
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useMenuContext } from '../context/useMenuContext'
import Link from 'next/link'

type Props = { 
	classe: string 
	logo: StaticImageData
	link: string 
}

/**
 * 
 * @param param0 
 * @returns 
 */
const Navbar = ({ classe, logo, link}: Props) => {
	const { state, dispatch } = useContext(useMenuContext)

	const newLocal = state.menuOpen ? 'hidemenu' : ''
	return (
		<nav className={`${classe == 'header'? newLocal: classe}`}>
			<Link href='/'>
				<Image src={logo} alt='logo' className='logo' />
			</Link>
			<ul className='nav-links'>
				<li className={`nav-link ${link === 'home'? 'active':''}`}>
					<Link href='/'>Popular</Link>
				</li>
				<li className={`nav-link ${link === 'house'? 'active':''}`}>
					<Link href='/house'>Travel Outside</Link>
				</li>
				<li className={`nav-link ${link === 'listing'? 'active':''}`}>
					<Link href='/listing'>Online Packages</Link>
				</li>
			</ul>
			<a href='#' className='register-btn'>
				Register Now
			</a>
			<FaBars id='open' onClick={() => dispatch({ type: 'OPEN' })} />
			<AiOutlineClose
				id='close'
				className={`${state.menuOpen ? 'hidemenu' : ''}`}
				onClick={() => dispatch({ type: 'CLOSE' })}
			/>
		</nav>
	)
}

export default Navbar
