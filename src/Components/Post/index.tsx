import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Container } from "./styles";
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    content: Content[];
    publishedAt: Date; 
}

export function Post({author, content, publishedAt}: PostProps) {
    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState([
       'Gostei muito do post!',
       'quibusdam fugit neque consequatur et necessitatibus incidunt atque.'
   


    ]);

    const publishedDate = new Date(publishedAt); 

    const publishedDateFormatted = format(publishedDate, "d 'de' LLLL 'às' HH:mm'h'", { 
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, { 
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([
           ...comments, newCommentText
        ]);

        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <Container>
            <article>
                <header>
                    <div className="author">
                        <Avatar hasBorder src={author.avatarUrl} />
                        <div className="authorInfo">
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>
                    <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}> {/* Modificado */}
                        {publishedDateRelativeToNow}
                    </time>
                </header>

                <div className="content">
                    {content.map((line) => {
                        if (line.type === 'paragraph') {
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href={line.content}>{line.content}</a></p>;
                        }
                    })}
                    <p>
                        <a href="#">#novoprojeto</a> {' '}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a> {' '}
                    </p>
                </div>

                <form onSubmit={handleCreateNewComment} className="commentForm">
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                        value={newCommentText} 
                        onChange={handleNewCommentChange} 
                        name="comment" 
                        placeholder="Deixe seu comentário" 
                        onInvalid={handleNewCommentInvalid}
                        required
                    />
                    <footer>
                        <button 
                            disabled={isNewCommentEmpty}
                            type="submit"
                        >
                            Publicar
                        </button>
                    </footer>
                </form>

                <div className="commentList">
                    {comments.map((comment) => (
                        <Comment
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    ))}
                </div>
            </article>
        </Container>
    );
}
