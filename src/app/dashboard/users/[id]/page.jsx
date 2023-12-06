"use client"
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image";

function SingleUserPage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" fill /> 
                </div>
                Sillah
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label> Username</label>
                <input type="text" name="username" placeholder="sillah212" />
                <label> Email</label>
                <input type="email" name="email" placeholder="sillah212@example.com" />
                <label> Password</label>
                <input type="password" name="password" placeholder="sil****" />
                <label> Phone</label>
                <input type="phone" name="phone" placeholder="Phone" />
                <label> Username</label>
                <textarea type="text" name="address" placeholder="Mountain Cut" />
                <label>Is Admin?</label>
                <select name="role" id="role">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label>Is Active?</label>
                <select name="active" id="active">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage;