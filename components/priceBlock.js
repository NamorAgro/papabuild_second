import styles from './priceBlock.module.css'

export default function PriceBlock() {
    return (
        <section className={styles.block}>
            <div className={styles.titleblock}>
                <h2 className={styles.title}>
                    Цены на строительство, сварочные и ремонтные работы
                </h2>
                <p className={styles.text}>
                    Все цены указаны как приблизительные. Точный расчет стоимости зависит от сложности
                    и объема работ. Свяжитесь со мной, чтобы обсудить детали вашего проекта —
                    строительство, сварка или ремонт.
                </p>
            </div>
            <table className={styles.table}>
                <thead >
                    <tr >
                        <th>Виды работ</th>
                        <th>Цены</th>
                        <th>Сроки</th>
                    </tr>
                </thead >
                <tbody>
                    <tr>
                        <td>Постройка деревянной или кирпичной бани «под ключ»</td>
                        <td>от 4000 €</td>
                        <td>3 - 4 месяца</td>
                    </tr>
                    <tr>
                        <td>Возведение металлических конструкций (навесов, козырьков, каркасов)</td>
                        <td>от 1000 €</td>
                        <td>1 - 2 месяца</td>
                    </tr>
                    <tr>
                        <td>Сварочные работы (изготовление, монтаж металлоконструкций)</td>
                        <td>15 € / час</td>
                        <td> - </td>
                    </tr>
                    <tr>
                        <td>Ремонтные работы (отделка, плитка, монтаж)</td>
                        <td>15 € / час</td>
                        <td> - </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
