import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 0.5rem;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

function ReportTable({ reports }) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>项目</Th>
          <Th>英文版报告</Th>
          <Th>中文版报告</Th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report, index) => (
          <tr key={index}>
            <Td>{report.project}</Td>
            <Td><a href={report.englishReport}>英文版</a></Td>
            <Td><a href={report.chineseReport}>中文版</a></Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ReportTable;