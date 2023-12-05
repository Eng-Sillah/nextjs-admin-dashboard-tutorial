"use client"
import Link from "next/link";
import styles from "./menuLinks.module.css"
import { usePathname } from "next/navigation";
function MenuLinks({item}) {
    const pathName = usePathname();
    console.log(pathName)

    return (
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLinks;