import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
export default function Navbar() {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href={"/"}>
                    <a>Ínicio</a>
                </Link>
            </li>
            <li>
                <Link href={"/products"}>
                    <a>Produtos</a>
                </Link>
            </li>
            <li>
                <Link href={"/sales_off"}>
                    <a>Promoções</a>
                </Link>
            </li>
            <li>
                <Link href={"/todos"}>
                    <a>Tarefas</a>
                </Link>
            </li>
            <li>
                <Link href={"/about"}>
                    <a>Página De Sobre</a>
                </Link>
            </li>
        </ul>
    )
}