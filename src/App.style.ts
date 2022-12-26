import styled from 'styled-components';

export const StyledWrapperApp = styled.div`
  background-color: #121212;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  #iconPlay {
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    &:hover {
      transform: scale(1.2);
    }
  }

  .result {
    position: absolute;
    left: 20px;
  }
`;

export const StyledInput = styled.input`
  width: 268px;
  height: 28px;
  padding: 6px 48px;
  color: rgb(0, 0, 0);
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  border-radius: 500px;
  outline: none;
  font-size: 0.875rem;
`;

export const StyledWrapperInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
