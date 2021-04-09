import styled, { css, keyframes } from 'styled-components';

const animationContainer = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  background: #ed1450;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 5px;
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      p {
        font-size: 10px;
      }
    }
  }
`;

export const Content = styled.div`
  background: #f3f4f8;
  border-radius: 5px;
  padding: 20px;
  max-height: 900px;
  color: #555555;
  font-weight: 700;

  > div {
    background: #fff;
    border-radius: 10px;
    height: 100%;
    padding: 30px 20px;

    select {
      padding: 10px;
      border-radius: 10px;
      border-color: #ed1450;
      color: #ed1450;

      option {
        border-radius: 10px;
      }
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > span {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        color: #ed1450;
      }
    }
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Pagination = styled.div`
  width: 180px;
  border-radius: 10px;
  border: 2px solid #f3f4f8;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaginationItem = styled.div`
  width: 100%;
  padding: 10px;
  height: 100%;
  border-right: 1px solid #f3f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :nth-child(2) {
    background: #ed1450;
    color: #f3f4f8;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: none;
      border: none;
      color: #ed1450;
    }
  }
`;

export const TableWrapper = styled.div`
  border: 2px solid #f3f5f8;
  border-radius: 10px;
  padding: 10px 20px;
  width: 100%;
  font-size: 15px;
  margin-bottom: 10px;

  span {
    width: 400px;
  }

  ${(props) =>
    props.showMoreInfo &&
    css`
      section {
        animation: ${animationContainer} 0.5s;
        margin-top: 20px;
        display: flex;
        flex-direction: column;

        span {
          margin-bottom: 10px;
          display: flex;
          align-items: center;

          svg {
            margin-left: 10px;
          }

          b {
            color: #ed1450;
            margin-left: 10px;
          }
        }
      }
      div {
        button {
          transition: 0.2s;
          color: #aaaaaa;
        }
      }
    `}
`;

export const TableTitle = styled.div`
  padding: 25px 20px;
  display: flex;
  text-align: left;

  justify-content: space-between;

  span {
    width: 200px;
    display: flex;
    text-align: start;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: end;
`;
