import Image from "next/image";
import styles from './workItem.module.css'

export default function WorkItem({image, alt, title, text}) {
    return (
        <article className={styles.item}>
            <div className={styles.imageArea}>
                <Image className={styles.image} src={image} alt={alt} fill sizes="(max-width: 1000px) 100vw, 33vw"/>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
}