"use client"
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image";

function SingleProductPage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" fill /> 
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder="Product title" />
                <label>Price</label>
                <input type="number" name="price" placeholder="00.00" />
                <label>Stock</label>
                <input type="number" name="stock" placeholder="0000" />
                <label>Color</label>
                <input type="text" name="color" placeholder="Color" />
                <label>Cat</label>
                <select name="cat" id="cat">
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="charger">Charger</option>
                </select>
                <label>Description</label>
                <textarea type="text" name="desc" id="desc" placeholder="Description"  rows="10"/>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage;