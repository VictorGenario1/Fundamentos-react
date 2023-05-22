import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment({content, onDeleteComment}){
    function handleDeleteComment (){
        onDeleteComment(content);
       
    }


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/victorGenario.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Genario</strong>
                            <time title="15 de Maio às 06:32h" dateTime="2023-05-15 06:32:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}