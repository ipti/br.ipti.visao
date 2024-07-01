import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Thead = styled.thead`
  background-color: #f0f0f0;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
`;

const RelatorioGeral = () => {
  return (
    <Table>
      <Thead>
        <Tr>
            <Th>Nome da escola</Th>
            <Th>N° de Turmas</Th>
            <Th>Total de Matrículas</Th>
            <Th>Total de Triagens</Th>
        </Tr>
      </Thead>
        <tbody>
            {/* todo:Preencher com os dados do banco */}
            <Tr>
                <Td>Escola A</Td>
                <Td>10</Td>
                <Td>250</Td>
                <Td>50</Td>
            </Tr>
            <Tr>
                <Td>Escola B</Td>
                <Td>15</Td>
                <Td>300</Td>
                <Td>75</Td>
            </Tr>
            <Tr>
                <Td>Escola C</Td>
                <Td>8</Td>
                <Td>200</Td>
                <Td>40</Td>
            </Tr>
            <Tr>
                <Td>Escola D</Td>
                <Td>12</Td>
                <Td>280</Td>
                <Td>60</Td>
            </Tr>
            <Tr>
                <Td>Escola E</Td>
                <Td>9</Td>
                <Td>220</Td>
                <Td>45</Td>
            </Tr>
        </tbody>
    </Table>
  );
};

export default RelatorioGeral;