import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Todo() {
    const router = useRouter()
    const todoId = router.query.todoId
    return (
        <>
            <Link href={'/'}>
                <a>Voltar</a>
            </Link>
            <h3>Exibindo a Tarefa: {todoId}</h3>
            <p>Comentário:III alá</p>
            <Link href={`/todos/${todoId}/comments/1`}>
                <a>+Detalhes</a>
            </Link>
        </>
    )
}