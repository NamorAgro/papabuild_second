import Image from 'next/image';
import styles from './page.module.css'

import VideoAmbed from '@/components/metallContractionPage/videoImported';
import Contacts from '@/components/contactBlock';

import sun from '@/public/metallicheskij-naves/sun.svg'
import constraction from '@/public/metallicheskij-naves/construction.svg'
import biceps from '@/public/metallicheskij-naves/biceps.svg'
import sceleton from '@/public/metallicheskij-naves/construction.jpg'
import madeConstraction from '@/public/photos/finished1.jpg'

export const metadata = {
    title: "Прочный металлический навес для автомобиля – защита от солнца, дождя и снега",
    description: "Закажите надежный металлический навес для машины! Прочная конструкция из толстого металла, устойчивая к ветру и снегопадам. Индивидуальные размеры и конфигурации. Защита авто от осадков и солнца.",
};

export default function MetallNavesPage() {
    return (
        <div>
            <div className={styles.section}>
                <div className={styles.mainTitle}>
                    <h1 className={styles.text}>
                        Надежный металлический навес для автомобиля
                    </h1>
                    <p className={styles.textP}>
                        Это прочность и реальная защита, а не то что предлагают на рынке.
                    </p>
                </div>
                <section className={styles.video}>
                    <VideoAmbed src={'https://player.vimeo.com/video/1065103938'} title='Мтеталлический навес для автомобиля.' />
                </section>
            </div>

            <section className={styles.benefits}>
                <div className={styles.benefitsItem}>
                    <Image src={sun} alt='иконка солнца' width={66} height={66} />
                    <h4 className={styles.benefitsText}>Защита от осадков и солнечных лучей</h4>
                </div>
                <div className={styles.benefitsItem}>
                    <Image src={constraction} alt='иконка дома' width={66} height={44} />
                    <h4 className={styles.benefitsText}>Прочная сварная конструкция, закрепленная в земле</h4>
                </div>
                <div className={styles.benefitsItem} width={49} height={49}>
                    <Image src={biceps} alt='иконка бицепса' />
                    <h4 className={styles.benefitsText}>Толстый металл и усиленная крыша</h4>
                </div>
            </section>
            <div className={styles.about}>
                <section className={styles.twoClumns}>
                <Image
                        src={sceleton}
                        alt='Металлический каркас навеса для машины. Показан процесс строительства.'
                        width={1280}
                        height={960}
                        className={styles.carcas}

                    />
                    <div>
                        <h3>Надежная прочная конструкция</h3>
                        <p className={styles.textOf}>Конструкция надежно фиксируется в грунте за счет заливки закладных, что гарантирует устойчивость даже при сильном ветре и снегопадах.</p>
                        <p>Мы используем только качественный толстый металл и прочные листы для крыши. Это не легкие конструкции, которые могут улететь или разрушиться зимой, а надежный мини-гараж для вашего автомобиля.</p>
                    </div>
                    
                </section>
                <section className={styles.twoClumns}>

                    <Image
                        src={madeConstraction}
                        alt='Готовый металлический навес для двух машин, вид сбоку.'
                        width={1280}
                        height={960}
                        className={styles.carcas}
                    />
                    <div>
                        <section className={styles.block}>
                            <div className={styles.titleblock}>
                                <h3>Цена этого навеса</h3>
                            </div>
                            <table className={styles.table}>
                                <tbody>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>2000</td>
                                    </tr>
                                    <tr>
                                        <td>Работа</td>
                                        <td>1500</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <p className={styles.priceText}>Изготавливаем навесы по индивидуальным размерам и требованиям.<br/> Возможны различные формы и конфигурации.</p>
                    </div>
                </section>
            </div>
            <Contacts />
        </div>

    );
}