import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito, Roboto } from 'next/font/google'

import MenuContextProvider from './context/useMenuContext'
import Footer from './components/Footer'

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	display: 'swap',
	subsets: ['latin'],
})
const inter = Nunito({subsets:['latin']})

export const metadata: Metadata = {
	title: 'Staybnb App',
	description: 'Clone of Staybnb App',
}

/**
 * 
 * @param param0 
 * @returns 
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<MenuContextProvider>{children}</MenuContextProvider>
				<Footer />
			</body>
		</html>
	)
}
