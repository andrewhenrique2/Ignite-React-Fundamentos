import styled from "styled-components";

export const Container = styled.div`
    .avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
    }

    .avatarWithBorder {
        box-sizing: initial;
      width: 3rem;
      height: 3rem;
      border-radius: 8px;
      border: 4px solid var(--gray-800);
      outline: 2px solid var(--green-500);
    }
`;