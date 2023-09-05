'use client'

import Image from 'next/image'
import Navbar from '../components/Navbar'
import {
  host,
	house1,
	house2,
	house3,
	image4,
	image5,
	logoRed,
} from '../../../public/images'
import './../listing/listing.css'
import './house.css'
import { FaHome, FaStar, FaStarHalfAlt } from 'react-icons/fa'

type Props = {}

const page = (props: Props) => {
	return (
		<>
			<Navbar classe='navbar-white' logo={logoRed} link={'house'} />
			<main className='house-details'>
				<div className='house-title'>
					<h1>Wenge House</h1>
					<div className='row'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
						<FaStar />
						<span>245 reviews</span>
					</div>
					<div>
						<p>Locaiton: Sand Francisco, California, United of America</p>
					</div>
				</div>

				<div className='gallery'>
					<div className='gallery-img-1'>
						<Image src={house1} alt='house-1' />
					</div>
					<div>
						<Image src={house2} alt='house-2' />
					</div>
					<div>
						<Image src={house3} alt='house-3' />
					</div>
					<div>
						<Image src={image4} alt='house-4' />
					</div>
					<div>
						<Image src={image5} alt='house-5' />
					</div>
				</div>


        <div className="small-details">
            <h2>Entire rental unit hosted y Brandom</h2>
            <p>1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking</p>
            <h4>R250 / day</h4>
        </div>
        <hr className="line"/>
        <form className="check-form">
            <div>
                <label>Check-in</label>
                <input type="text" placeholder="Add date"/>
            </div>
            <div>
                <label>Check-out</label>
                <input type="text" placeholder="Add date"/>
            </div>
            <div className="guest-field">
                <label>Guest</label>
                <input type="text" placeholder="2 guest"/>
            </div>
            <button type="submit">Check availability</button>
        </form>

        <ul className="details-list">
            <li><i className="fas fa-home"></i><FaHome/>Entire Home
                <span>You will have the enter flat for you.</span>
            </li>
            <li><i className="fas fa-paint-brush"></i>Enhanced Clean
                <span>This hos has committed to staybnb&apos;s clenaing process</span>
            </li>
            <li><i className="fas fa-map-marker-alt"></i>Great Location
                <span>90% of recent guest gave the location a 5 star rating.</span>
            </li>
            <li><i className="fas fa-heart"></i>Great Check-in Experience
                <span>100% of reent guests gave the check-in process a 5 star rating.</span>
            </li>
        </ul>

        <hr className="line"/>
        <p className="home-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut neque eos provident, cumque quos asperiores harum vel odio minus ipsa nemo nam velit soluta. Modi dolor dicta harum minima eligendi, voluptate reiciendis minus doloribus voluptas odit veniam, tempora, dolores pariatur cumque commodi error quos est temporibus consequuntur fugiat praesentium sed. Sapiente optio dolores veritatis neque necessitatibus quam, at aspernatur labore! Adipisci consequuntur a iure cupiditate dolorum at placeat alias provident accusantium! Quia quas, quo laudantium labore nesciunt sunt odit delectus culpa natus reprehenderit, iusto facilis, atque magnam debitis temporibus eligendi cupiditate beatae tempora quidem blanditiis laboriosam id. Vel, consequatur?</p>
        <hr className="line"/>

        <div className="map">
            <h3>Location on map</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.2818980364796!2d18.472625575741677!3d-34.010974326437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4301e041849b%3A0x8923e017d4535a84!2s65%20Sussex%20Rd%2C%20Wynberg%2C%20Cape%20Town%2C%207800!5e0!3m2!1sen!2sza!4v1692024051038!5m2!1sen!2sza" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <b>Wynberg, Cape Town</b>
            <p>It is fascinating...</p>
        </div>

        <hr className="line"/>
        <div className="host">
            <Image src={ host } alt="host"/>
            <div>
                <h2>Hosted by Johnny</h2>
                <p><span>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStarHalfAlt/>
                  <FaStar/>
                    
                </span>&nbsp; &nbsp; 245 reviews &nbsp; &nbsp; response rate 100% &nbsp; &nbsp; response time 60min</p>
            </div>
        </div>

        <a href="#"className="contact-host">Contact host</a>
			</main>
		</>
	)
}

export default page
