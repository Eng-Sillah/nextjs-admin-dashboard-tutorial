import styles from "./transactions.module.css"
import Image from 'next/image';
function Transactions() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Last Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.userDetail}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            Sebastian
                        </td>
                        <td> <span className={`${styles.pending} ${styles.status}`}> Pending</span></td>
                        <td>01.12.2023</td>
                        <td>Le 700</td>
                    </tr>
                    <tr>
                        <td className={styles.userDetail}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            Jonethan
                        </td>
                        <td> <span className={`${styles.done} ${styles.status}`}> Done</span></td>
                        <td>01.12.2023</td>
                        <td>Le 4050</td>
                    </tr>
                    <tr>
                        <td className={styles.userDetail}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            Sillah
                        </td>
                        <td> <span className={`${styles.cancled} ${styles.status}`}> Cancled</span></td>
                        <td>01.12.2023</td>
                        <td>Le 3000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;