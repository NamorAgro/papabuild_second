import styles from './contactBlock.module.css'

import Link from 'next/link';

export default function Contacts() {
    return (
        <section className={styles.block}>
            <h2>
                Как связаться
            </h2>
            <div className={styles.info}>
                <section>
                    <h3>Локация</h3>
                    <p>Рига, Латвия</p>
                </section>
                <section>
                    <h3>Контакты</h3>
                    <Link className={styles.phone} href={'tel:+371 22112948'}>+371 22112948</Link>
                </section>
                <section>
                    <h3>Рабочее время</h3>
                    <p>Понедельник - суббота: 09:00 - 18:00</p>
                </section>
            </div>
        </section>
    );
}