import styles from "@/app/ui/login/login.module.css"
function Login() {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;