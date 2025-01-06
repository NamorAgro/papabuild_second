import Image from 'next/image';
import styles from './mainBlock.module.css'

import logo from '../public/logo.png'
import arrow from '../public/arrow.png'

export default function MainBlock() {
    return (
        <section className={styles.section}>
            <Image src={logo} alt='Website logo.' width={95} height={95} priority />
            <div>
                <h1 >
                    Строительство и сварочные работы недорого.
                </h1>
                <p className={styles.text}>
                    Профессиональные услуги строительства и сварки для вашего дома, дачи или бизнеса. От создания надежных металлоконструкций до возведения комфортных жилых пространств — качество и надежность гарантированы. Свяжитесь с нами для консультации и расчета стоимости.
                </p>
            </div>
            <Image src={arrow} alt='arrow.' width={55} height={55} priority />
        </section>
    );
}