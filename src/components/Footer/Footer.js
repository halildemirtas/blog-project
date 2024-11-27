import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

import DecorativeSwoops from './DecorativeSwoops';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
          {/*
            NOTE: If you'd like to build your blog on top
            of this code, the license requires that you leave
            this paragraph untouched. Check out LICENSE.md
            for more information.
          */}
          <p className={styles.attribution}>
            From My Eyes bir analog fotoğraf projesidir. {' '}
           
          
          </p>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Linkler;</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="https://www.instagram.com/halildmrtas/">Instagram</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
