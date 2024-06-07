import styled from "styled-components";

export const Container = styled.div`
  article {
    background: var(--gray-800);
    border-radius: 8px;
    padding: 2.5rem;
  }

  article:first-child {
    margin-bottom: 2rem;
  }

  article > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  article > header time {
    font-size: 0.875rem;
    color: var(--gray-400);
  }

  .content {
    line-height: 1.6;
    color: var(--gray-300);
    margin-top: 1.5rem;
  }

  .content p {
    margin-top: 1rem;
    color: var(--gray-300);
  }

  .content p a {
    font-weight: bold;
    color: var(--green-500);
    text-decoration: none;

    &:hover {
      color: var(--green-300);
    }
  }

  .author {
    display: flex;
    align-items: center;
  }



  .author .authorInfo {
    margin-left: 1rem;
  }

  .authorInfo {
    display: flex;
    flex-direction: column;
  }
  .authorInfo strong {
    color: var(--gray-100);
    line-height: 1.6;
  }
.authorInfo span {
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
 
}

.commentForm {
width: 100%;
margin-top: 1.5rem;
padding-top: 1.5rem;
border-top: 1px solid var(--gray-600);
}

.commentForm > strong {
    line-height: 1.6;
    color: var(--gray-100);
}

.commentForm textarea {
    width: 100%;
    background-color: var(--gray-900);
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: var(--gray-100);
    line-height: 1.4;
    margin-top: 1rem;
}

.commentForm footer > button[type=submit] {
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: var(--green-500);
    color: var(--white);
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s;
    &:hover:not(:disabled) {
        background: var(--green-300);
    }
}

.commentForm button[type=submit]:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.commentForm:focus-within footer {
    visibility: visible;
    max-height: none;
}

.commentForm footer {
    visibility: hidden;
    max-height: 0;
}

.commentList {
    margin-top: 2rem; 
}
`;
