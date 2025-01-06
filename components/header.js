import Messengers from './messengers';

import styles from './header.module.css'
import Link from 'next/link';



import telega from '@/public/telega.png'
import whatsapp from '@/public/whatsapp.png'

export default function Header() {
    const messObject = [
        {
            url: 'https://t.me/papabuild',
            image: telega,
            alt: 'telegram logo'
        },
        {
            url: 'https://api.whatsapp.com/send?phone=37122112948',
            image: whatsapp,
            alt: 'whatsapp logo'
        },
    ]
    return (
        <header className={styles.mainheader}>
            <div>
                <ul className={styles.list}>
                    {messObject.map((obj, index) => (
                        <Messengers key={index} url={obj.url} image={obj.image} alt={obj.alt}/>
                    ))}
                </ul>
            </div>
            
            <div className={styles.phonearea}>
                <p>Александр:</p>
                <Link className={styles.phone} href={'tel:+371 22112948'}>+371 22112948</Link>
            </div>
        </header>
    );
}