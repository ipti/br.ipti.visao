import { styled } from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: Arial, sans-serif;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;