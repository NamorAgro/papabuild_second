import ServicesCard from "./servicesCard";
import styles from './secondBlock.module.css'

export default function SecondBlock() {
    const services = [
        {
            title: 'Сварочные работы',
            services: [
                'Изготовление и установка металлоконструкций.',
                'Сварка заборов, ворот, калиток.',
                'Монтаж навесов и козырьков.',
                'Сборка и ремонт лестничных конструкций.',
                'Создание перил, ограждений, решеток.',
                'Ремонт металлических деталей и конструкций.',
                'Cварка кузова автомобилей. ',

            ]
        },
        {
            title: 'Строительные работы',
            services: [
                'Возведение беседок, веранд хозяйственных построек.',
                'Строительство гаражей и подсобных помещений.',
                'Монтаж крыши, установка перекрытий.',
                'Укладка фундамента, подготовка участка.',
                'Установка перегородок и стен.',
                'Монтаж террас и беседок.'
            ]
        },
        {
            title: 'Ремонтные работы',
            services: [
                'Отделка окон и откосов.',
                'Выравнивание стен и полов.',
                'Укладка плитки.',
                'Монтаж и ремонт потолков.',
                'Штукатурка и покраска поверхностей.',
                'Установка дверей и окон.'
            ]
        }
    ]
    return (
        <section className={styles.block}>
            <h2 className={styles.title}>
                Услуги
            </h2>
            <div className={styles.cards}>
                {services.map(service => (
                    <ServicesCard key={service.title} title={service.title} list={service.services} />
                ))}
            </div>
        </section>
    );
}