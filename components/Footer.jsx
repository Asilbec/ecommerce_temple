import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Bekware All rights reserverd</p>
      <p className="icons">
        <Link href='https://www.instagram.com/bekk_18/'>
        <AiFillInstagram  />
        </Link>
        <Link href='https://twitter.com/bek_Devv'>
        <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  )
}

export default Footer