import Image from 'next/image'
import { Exclusives_ } from '../../constants'
type Props = {}

const Exclusives = (props: Props) => {
	return (
		<div className='exclusives'>
			{Exclusives_.map((excl, index) => (
				<div key={index}>
					<Image src={excl.pict} alt='picture' />
					<span>
						<h3>{excl.location}</h3>
						<p>{excl.price}</p>
					</span>
				</div>
			))}
		</div>
	)
}

export default Exclusives
