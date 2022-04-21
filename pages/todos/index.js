import styles from "../../styles/Todos.module.css"
import Link from "next/link";
export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await data.json()

    return {
        props: { todos },
    }
}
export default function Todos({ todos }) {
    return (
        <>
            <h1>Tarefas:</h1>
            <ul className={styles.todo_list}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title} - <Link href={`/todos/${todo.id}`}><a>Veja Mais</a></Link></li>
                ))}
            </ul>
        </>
    )
}