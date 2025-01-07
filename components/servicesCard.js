import styles from './servicesCard.module.css'

export default function ServicesCard({ title, list }) {
    return (
        <>
            <section className={styles.card}>
                <h3>
                    {title}
                </h3>
                <ul>
                    {list.map((listItem, index) => (
                        <li key={index} className={styles.item}>
                            <h4>
                                {listItem}
                            </h4>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}