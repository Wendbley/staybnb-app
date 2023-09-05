import Image from 'next/image'
import { story1, story2, story3 } from '../../../../public/images'


type Props = {}

const Stories = (props: Props) => {
	return (
		<div className='stories'>
			<div>
				<Image src={story1} alt='story-1' />
				<p>Popular Eruopean countries with a budget of jsut R10, 000</p>
			</div>

			<div>
				<Image src={story2} alt='story-2' />
				<p>Traveled more than 100 countries in less than a year</p>
			</div>

			<div>
				<Image src={story3} alt='story-3' />
				<p>Best experience you get while traveling to Thailand.</p>
			</div>
		</div>
	)
}

export default Stories
