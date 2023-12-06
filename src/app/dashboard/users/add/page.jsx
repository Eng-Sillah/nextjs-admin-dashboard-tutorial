"use client"
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"


function AddUserPage() {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Username" name="Username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="role" id="role">
                    <option value={false} selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="active" id="active">
                    <option value={true} selected>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address" rows="16" placeholder="Address"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage;