import React from 'react'
import Socials from './Socials';
import Copyright from './Copyright';

export default function Footer() {

  return (
    <footer className='flex flex-col justify-center p-[5px] items-center'>
      <Socials />
      <div>
        <Copyright />
      </div>
    </footer>
  );
}