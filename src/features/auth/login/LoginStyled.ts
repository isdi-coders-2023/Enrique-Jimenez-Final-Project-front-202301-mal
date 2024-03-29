import styled from 'styled-components';

export const LoginStyled = styled.form`
  width: 500px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.472);
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 2rem;
  gap: 1.6rem;
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 45%;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }

  .register__button {
    background-color: #ff7a3d;
    color: white;
    border: 2px solid var(--color-tertiary);
    padding: 4px 30px;
    border-radius: 6px;
    cursor: pointer;
    :disabled {
      background-color: var(--color-tertiary-disabled);
      border: 2px solid var(--color-tertiary-disabled);
      color: white;
      cursor: default;
    }
    :hover {
      background-color: white;
      color: var(--color-tertiary);
      border: 2px solid var(--color-tertiary);
    }
    :hover:disabled {
      background-color: var(--color-tertiary-disabled);
      border: 2px solid var(--color-tertiary-disabled);
      color: white;
      cursor: default;
    }
  }

  .info {
    font-size: small;
    font-weight: bold;
  }

  .error {
    color: red;
  }

  .login {
    font-size: small;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    color: green;
    justify-content: start;
  }

  .default {
    visibility: hidden;
  }

  .loading {
    color: black;
  }

  .span_small {
    font-size: small;
    color: black;
  }

  .form-submit {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;
