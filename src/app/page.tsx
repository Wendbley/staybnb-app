import Exclusives from './components/home/Exclusives'
import Footer from './components/Footer'
import Header from './components/home/Header'
import Stories from './components/home/Stories'
import TrendingPlaces from './components/home/TrendingPlaces'

export default function Home() {
	return (
		<>
			<Header />
			<main className='container'>
				<h2 className='subtitle'>Exclusives</h2>
				<Exclusives />

				<h2 className='subtitle'>Trending Places</h2>
				<TrendingPlaces />

				<div className='cta'>
					<h3>Sharing Earning NOW</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{' '}
						repudiandae, quasi quidem voluptate facilis non!
					</p>
					<a href='#' className='cta-btn'>
						Know More
					</a>
				</div>

				<h2 className='subtitle'>Travellers Stories</h2>
				<Stories />

				<a href='#' className='start-btn'>
					Start Making Money
				</a>
				<div className='about-msg'>
					<h2>About StayBnB</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Perspiciatis, ullam quis! Animi voluptate repudiandae reiciendis.
						Nihil, illum velit atque magni ex, inventore eveniet commodi
						pariatur eos deserunt provident fugit voluptates nam cupiditate
						tenetur dolor ad asperiores alias optio ullam libero, vel officia!
						Et suscipit repellat labore, est explicabo libero placeat.
					</p>
				</div>
			</main>
		</>
	)
}
