"use client"
import styles from "./sidebar.module.css"
import MenuLinks from "./menuLinks/menuLinks";
import Image from 'next/image';

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
} from "react-icons/md";


const menuItem = [
    {
        title: 'Pages',
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
        ],
    },
    {
        title: 'Analytics',
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
        ]
    },
]
function Sidebar() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.user}>
                    <Image src="/noavatar.png" alt="user" width="50" height="50"  className={styles.userImage}/>
                    <div className={styles.userDetails}>
                        <span className={styles.userName}>Sillah</span>
                        <span className={styles.role}>Administrator</span>
                    </div>
                </div>
                <ul className={styles.list}>
                    {menuItem.map((cat) => (
                        <li key={cat.title}>
                            <span className={styles.cat}>{cat.title}</span>
                            {cat.list.map((item) => (
                                <MenuLinks item={item} key={item.title} />
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;