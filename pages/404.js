import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Página não Encontrada : (</h1>
            <Link href={"/"}><a>Voltar Para o Ínicio</a></Link>
        </>
    )
}