"use client"
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "../../../app/ui/dashboard/products/products.module.css"
function Products() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a Product..."/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                        <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage} /> Iphone 8
                            </div>
                        </td>
                        <td>Simple Desc</td>
                        <td>Le 1400</td>
                        <td>03.12.2023</td>
                        <td>60</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/products/id">
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
                            <div className={styles.product}>
                        <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage} /> Apple Watch
                            </div>
                        </td>
                        <td>Apple description</td>
                        <td>Le 1065</td>
                        <td>03.12.2023</td>
                        <td>14</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/products/id">
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

export default Products;