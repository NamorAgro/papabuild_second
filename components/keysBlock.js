import WorkItem from './workItem'

import styles from './keysBlock.module.css'

import forCar from '@/public/photos/finished1.jpg'
import veranda from '@/public/photos/veranda.png'
import terrase from '@/public/photos/floor_big.jpg'
import owen from '@/public/photos/owen-out.jpg'
import dors from '@/public/photos/garage.png'
import construction from '@/public/photos/worker.jpg'
import sauna from '@/public/photos/inside-sauna.jpg'
import are from '@/public/photos/building.png'
import more from '@/public/photos/more.png'

export default function KeysBlock() {
    const items = [
        {
            image : forCar,
            alt : 'Навес из металла.',
            title : 'Навес для машин',
            text : 'Прочный и доступный по цене навес для автомобилей. Надежная сварная конструкция установлена на бетонном основании, обеспечивающем долговечность.'
        },
        {
            image : dors,
            alt : 'Металлические двери в гараж.',
            title : 'Металлические ворота',
            text : 'Надежные гаражные ворота из металла с утеплением. Двойные стены и качественная сварка обеспечивают долговечность и прочность конструкции.'
        },
        {
            image : sauna,
            alt : 'Помещение бани.',
            title : 'Банное помещение',
            text : 'Полная отделка внутреннего помещения бани с использованием лиственницы. Удобные два этажа полочек создают комфортное пространство для отдыха и релакса.'
        },
        {
            image : construction,
            alt : 'Сварная конструкция',
            title : 'Сварная конструкция',
            text : 'Настил из прочного сварного металла для защиты товаров. Три уровня металлических стеллажей, идеально подходящих для хранения и организации.'
        },
        {
            image : veranda,
            alt : 'Бемедка из дерева.',
            title : 'Беседка',
            text : 'Летняя деревянная беседка для отдыха с бетонным основанием. Конструкция прочная, эстетически приятная и идеально подходит для любого двора.'
        },
        {
            image : owen,
            alt : 'Печь для бани из металла',
            title : 'Печь для бани',
            text : 'Сварная печь из металла толщиной 6-8 мм, идеально подходящая для бани. Конструкция включает внутренние полости для оптимального распределения тепла, а также выводы для пара и дыма.'
        },
        {
            image : terrase,
            alt : 'Терраса из дерева',
            title : 'Терраса',
            text : 'Открытое деревянное пространство, построенное быстро и по доступной цене. Идеально для летних посиделок или семейных мероприятий.'
        },
        
        {
            image : are,
            alt : 'Построика из дерева и камня.',
            title : 'Помещения',
            text : 'Строительство производственных и жилых помещений из дерева, бетона, камня и металла. Особенность — наличие печного отопления, что делает помещения универсальными и уютными.'
        },
        {
            image : more,
            alt : '',
            title : 'И многое другое',
            text : 'Среди других проектов: перголы, настилы, ремонтные работы, сварка кузова автомобилей и многое другое. Каждый проект выполняется с тщательной проработкой деталей и качественным подходом.'
        }
    ]
    return (
        <section className={styles.block}>
            <h2 className={styles.title}>Проекты</h2>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <WorkItem key={index} image={item.image} alt={item.alt} title={item.title} text={item.text}/>
                ))}
            </div>
        </section>
    );
}