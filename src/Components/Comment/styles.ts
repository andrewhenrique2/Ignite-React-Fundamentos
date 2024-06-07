import styled from "styled-components";

export const Container = styled.div`
.comment {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
}

.comment > img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  
}

.commentBox {
     flex: 1;
}

.commentContent {
    background-color: var(--gray-700);
    border-radius: 8px;
    padding: 1rem;
}

.commentContent header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.authorAndTime strong {
    display: block;
    font-size: 0.875rem;
    line-height: 1.6;
}

.authorAndTime time {
    display: block;
    font-size: 0.75rem;
    line-height: 1.6;
    color: var(--gray-400);

}

.commentContent header button {
    background-color: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;

    &:hover {
        color: var(--red-500);
    }
}

.commentContent p {
    margin-top: 1rem;
    color: var(--gray-300);
}

.commentBox footer {
    margin-top: 1rem;
}
.commentBox footer button {
    background: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;
    border-radius: 2px;
    display: flex;
    align-items: center;
}

.commentBox footer, button, svg {
    margin-right: 0.5rem;
}

.commentBox footer, button, span {
    padding: 0 0.25rem;
}

.commentBox footer button:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px var(--green-500);
  }

`;