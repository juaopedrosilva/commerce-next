import Image from 'next/image'

import logo from '@assets/svgs/logo.svg'
import search from '@assets/svgs/search.svg'
import cart from '@assets/svgs/cart.svg'

import { Wrapper } from './styles'

export default function Header() {
  return (
    <Wrapper>
      <Image alt="Comerce" src={logo} objectFit="none" quality={100} />
      <div className="right-collunm">
        <div className="search-container">
          <input type="text" placeholder="Procurando por algo específico?" />
          <Image src={search} alt="Search" width="25" height="25" />
        </div>
        <div className="cart">
          <Image src={cart} alt="Cart" width="30" height="30" />
          <span className="quantity">8</span>
        </div>
      </div>
    </Wrapper>
  )
}
