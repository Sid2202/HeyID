import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
import Connect from './connect'

export async function getStaticProps(context) {

  // Device React
  const deviceIsMobile = isMobile;

  const deviceType = deviceIsMobile ? 'Yes, I am a mobile' : 'Nope, you are a Desktop!, currently supporting mobile only';

  return {
    props: {
       mobileDevice: deviceType
    }, // will be passed to the page component as props
  }
}

export default function Home({ mobileDevice }) {

  
  return (
    <div className="">
      hey {mobileDevice}
      <Connect />
    </div>
  )
}
