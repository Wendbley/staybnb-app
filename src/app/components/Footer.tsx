import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import './home/style.css'

type Props = {}

const Footer = (props: Props) => {
	return (
		<div className='footer'>
			<a href='https://www.facebook.com'>
				<FaFacebook />
			</a>
			<a href='https://www.twitter.com'>
				<FaTwitter />
			</a>
			<a href='https://www.instagram.com'>
				<FaInstagram />
			</a>
			<a href='https://www.youtube.com'>
				<FaYoutube />
			</a>
			<a href='https://www.linkedln.com'>
				<FaLinkedin/>
			</a>
			<hr />
			<p>Copyright 2023 StayBnB</p>
		</div>
	)
}

export default Footer
