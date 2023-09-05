import Image, { StaticImageData } from 'next/image'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

type Props = {
	photo: StaticImageData
    location: string
    quality: string
    nbrBedroms: string
    nbrGuests: number
    price: number
}

const House = ({ photo, location, quality, nbrBedroms, nbrGuests, price }: Props) => {
	return (
		<div className='house'>
			<div className='house-img'>
				<Image src={photo} alt='image-s' />
			</div>
			<div className='house-info'>
				<p>{ location }</p>
				<h3>{ quality }</h3>
				<p>{ nbrBedroms } </p>
				<FaStar />
				<FaStar />
				<FaStar />
				<FaStarHalfAlt />
				<FaStar />

				<div className='house-price'>
					<p>{ nbrGuests } Guests</p>
					<h4>
						R{ price } <span>/ day </span>
					</h4>
				</div>
			</div>
		</div>
	)
}

export default House
