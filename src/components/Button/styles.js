import styled, { css } from 'styled-components';

export const Container = styled.button`
  background: ${(props) => (props.outlined ? '#fff' : '#ed1450')};
  color: ${(props) => (props.outlined ? '#ed1450' : '#fff')};
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.outlined ? '#ed1450' : '#fff')};
  padding: 0 16px;

  ${(props) =>
    !props.outlined &&
    css`
      border: none;
    `}
  ${(props) =>
    props.size === 'xs' &&
    css`
      width: 210px;
    `}
  ${(props) =>
    props.size === 'sm' &&
    css`
      width: 115px;
    `}
  font-weight: 600;
  margin-top: 16px;
  transition: 0.3s;
  font-size: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: 7px;
  }
`;
