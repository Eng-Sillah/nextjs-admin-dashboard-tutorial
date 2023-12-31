import Link from "next/link";
import styles from "../../../app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search";
import Image from 'next/image';
import Pagination from "@/app/ui/dashboard/pagination/pagination";
function Users() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a users..."/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created at</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} /> Sillah
                            </div>
                        </td>
                        <td>sillah212@gmail.com</td>
                        <td>03.12.2023</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/users/id">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} /> John
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>03.12.2023</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/users/id">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default Users;