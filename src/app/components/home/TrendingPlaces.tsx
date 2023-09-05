import Image from 'next/image'
import { dubai, newDehli, newYork, paris } from '../../../../public/images'


type Props = {}

const TrendingPlaces = (props: Props) => {
  return (
    <div className="trending">
            <div>
                <Image src={ dubai } alt="dubai"/>
                <h3>Dubai</h3>
            </div>
        
            <div>
                <Image src={ newYork } alt="new-york"/>
                <h3>New York</h3>
            </div>
        
            <div>
                <Image src={ paris } alt="paris"/>
                <h3>Paris</h3>
            </div>
       
            <div>
                <Image src={ newDehli } alt="new-delhi"/>
                <h3>New delhi</h3>
            </div>
        </div>
  )
}

export default TrendingPlaces