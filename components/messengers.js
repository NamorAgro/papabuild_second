import Link from "next/link";
import Image from "next/image";
import styles from './messengers.module.css'
export default function Messengers({url, image, alt}) {
    return (
        <li className={styles.point}>
            <Link href={url}>
                <Image src={image} alt={alt} priority/>
            </Link>
        </li>
    );
}