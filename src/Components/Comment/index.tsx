import { ThumbsUp, Trash } from "phosphor-react"
import { Container } from "./styles"
import { Avatar } from "../Avatar";
import { useState } from "react";


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment ({content, onDeleteComment}: CommentProps ) {
    const [ likeCount, setLikeCount ] = useState(0);

    function handleLikeComment () {
        setLikeCount((state) => {
            return state + 1
        });
    }


    function handleDeleteComment() {
        onDeleteComment(content);
    }
    return (
        <Container>
            <div className="comment">
                < Avatar src="https://github.com/andrew.png" alt="" />
            <div className="commentBox">
                <div className="commentContent">
                    <header>
                        <div className="authorAndTime">
                            <strong>Andrew Henrique</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div> 
                         <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                         </button>
                    </header>
                    <p>{content}</p>
                </div>
                  <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                  </footer>
            </div>
            </div>
        </Container>
    );
    }