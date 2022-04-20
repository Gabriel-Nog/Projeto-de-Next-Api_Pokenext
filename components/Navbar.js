import Link from 'next/link'
export default function Navbar() {
    return (
        <ul>
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
                <Link href={"/about"}>
                    <a>Página De Sobre</a>
                </Link>
            </li>
        </ul>
    )
}