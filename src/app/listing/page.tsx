'use client'

import Image from 'next/image'
import './listing.css'
import Navbar from '../components/Navbar'
import { arrow, logoRed } from '../../../public/images'
import LeftColumn from '../components/houseList/LeftColumn'
import RightColumn from '../components/houseList/RightColumn'

type Props = {}

const page = (props: Props) => {
	return (
		<>
			<Navbar classe={'navbar-white'} logo={logoRed} link='#' />
			<main>
				<div className='container'>
					<div className='list-container'>
						<LeftColumn />
						<RightColumn />
					</div>
					<div className='pagination'>
						<Image src={arrow} alt='arrow' />
						<span className='current'>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>&middot;&middot;&middot;&middot;</span>
						<span>20</span>
						<Image src={arrow} alt='' className='right-arrow' />
					</div>
				</div>
			</main>
		</>
	)
}

export default page
