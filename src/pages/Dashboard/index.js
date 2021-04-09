import React, { useEffect, useState } from 'react';
import { BiMinus, BiPrinter, BiSearch, BiUserPin } from 'react-icons/bi';
import {
  RiAddFill,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiAttachmentLine,
} from 'react-icons/ri';
import {
  Container,
  Content,
  Header,
  InfoUser,
  Options,
  Pagination,
  PaginationItem,
  Row,
  TableContainer,
  TableTitle,
  TableWrapper,
  Title,
  Total,
} from './styles';

import Button from '../../components/Button';
import data from '../../data/charges';
import user from '../../data/user';
import formatValue from '../../utils/formatValue';

function Dashboard() {
  const [charges, setCharges] = useState([]);

  const formattedTotal = formatValue(
    data.reduce((sum, actual) => sum + actual.value, 0)
  );

  useEffect(() => {
    async function loadCharges() {
      const chargesFormatted = data.map((charge) => ({
        ...charge,
        formattedValue: formatValue(charge.value),
      }));

      setCharges(chargesFormatted);
    }

    loadCharges();
  }, []);

  const handleShowMore = (id) => {
    const newCharges = data.map((charge) => ({
      ...charge,
      formattedValue: formatValue(charge.value),
      showMoreInfo: charge.id === id ? true : false,
    }));

    setCharges(newCharges);
  };

  const handleShowLess = (id) => {
    const newCharges = data.map((charge) => ({
      ...charge,
      formattedValue: formatValue(charge.value),
      showMoreInfo: charge.id === id ? false : false,
    }));

    setCharges(newCharges);
  };

  return (
    <Container>
      <Header>
        <Title>Cobranças Recebidas</Title>
        <InfoUser>
          <BiUserPin size={25} />
          <div>
            <span>
              {user.name}

              <p>{user.code}</p>
            </span>

            <RiArrowDownSLine size={20} />
          </div>
        </InfoUser>
      </Header>
      <Content>
        <div>
          <span>
            Relação de cobranças recebidas <BiSearch size={25} />
          </span>

          <section>
            <Button outlined size="xs">
              TODAS AS COBRANÇAS <RiArrowDownSLine size={20} />
            </Button>
            <Button size="sm">
              7 DIAS <RiArrowDownSLine size={20} />
            </Button>
          </section>

          <TableContainer>
            <TableTitle>
              <span>Vencimento</span>
              <span>Nome do Beneficiário</span>
              <span>Valor</span>
              <div></div>
            </TableTitle>

            {charges.map(
              ({
                id,
                dueDate,
                recipientName,
                formattedValue,
                showMoreInfo,
                situation,
              }) => (
                <TableWrapper showMoreInfo={showMoreInfo} key={id}>
                  <Row>
                    <span>{dueDate}</span>
                    <span>{recipientName}</span>
                    <span>{formattedValue}</span>

                    <div>
                      {' '}
                      <button
                        onClick={() =>
                          showMoreInfo ? handleShowLess(id) : handleShowMore(id)
                        }
                      >
                        {showMoreInfo ? (
                          <BiMinus size={30} />
                        ) : (
                          <RiAddFill size={30} />
                        )}
                      </button>
                    </div>
                  </Row>
                  {showMoreInfo && (
                    <section>
                      <span>
                        Situação: <b>{situation}</b>{' '}
                      </span>
                      <span>
                        Opções: <BiPrinter /> <RiAttachmentLine />{' '}
                      </span>
                    </section>
                  )}
                </TableWrapper>
              )
            )}
          </TableContainer>

          <Total>
            <span>Total: {formattedTotal}</span>
          </Total>

          <Options>
            <select onChange={() => {}}>
              <option value="5">05 por página</option>
            </select>
            <Pagination>
              <PaginationItem>
                <RiArrowLeftSLine />
              </PaginationItem>
              <PaginationItem>1</PaginationItem>
              <PaginationItem>2</PaginationItem>
              <PaginationItem>3</PaginationItem>
              <PaginationItem>
                <RiArrowRightSLine />
              </PaginationItem>
            </Pagination>
          </Options>
        </div>
      </Content>
    </Container>
  );
}

export default Dashboard;
