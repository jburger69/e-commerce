import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h6>E-commerce</h6>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/shop">Shop</Link>
                </li>
                <li>
                    <Link href="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;