import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFileAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
  width: 100%;
  padding: 2rem 1rem;
  background-color: #f0f2f5;
  color: #333;
  box-sizing: border-box;
  overflow-y: auto;
  
  user-select: none;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  text-align: center;
  color: #2c3e50;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #3498db;
    border-radius: 2px;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  background-color: transparent;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
`;

const Thead = styled.thead`
  background-color: transparent;
`;

const Th = styled.th`
  color: #2c3e50;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  border-bottom: 2px solid #3498db;
`;

const Tbody = styled.tbody`
`;

const Tr = styled.tr`
  background-color: ${props => props.even ? '#f8f9fa' : '#ffffff'};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #e8f4fd;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Td = styled.td`
  padding: 1rem;
  font-size: 0.95rem;
  border: none;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 30%;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 70%;
  }

  &.reports-column {
    text-align: center;
  }
`;

const ProjectName = styled.span`
  font-weight: 600;
  color: #2c3e50;
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  transition: all 0.3s ease;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  background-color: rgba(52, 152, 219, 0.1);
  user-select: text;

  &:hover {
    color: #ffffff;
    background-color: #3498db;
  }

  svg {
    margin-right: 5px;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? '#3498db' : 'white'};
  color: ${props => props.active ? 'white' : '#3498db'};
  border: 1px solid #3498db;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: #2980b9;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  margin: 0 1rem;
  font-weight: 600;
  color: #2c3e50;
`;

const reportsData = [
  {
    project: "AbyssWorld",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Abyss%20World/AbyssWorld%20Security%20analysis%20report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Abyss%20World/AbyssWorld%E6%B8%B8%E6%88%8F%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A-zh.pdf"
  },
  {
    project: "BigTime",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/BigTime/BigTime%20Game%20Analysis%20Report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/BigTime/BigTime%E6%B8%B8%E6%88%8F%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },
  {
    project: "Cradles",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Cradles/Cradles%20security%20analysis%20report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Cradles/Cradles%E6%B8%B8%E6%88%8F%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A%26%E5%AE%89%E5%85%A8%E8%AF%84%E5%88%86.pdf"
  },
  {
    project: "Last Remains",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Last%20Remains/Last%20Remains%20Security%20analysis%20report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Last%20Remains/LastRemains%E6%B8%B8%E6%88%8F%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },
  {
    project: "MetalCore",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/MetalCore/MetalCore%20Security%20Analysis%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/MetalCore/MetalCore%20%E6%B8%B8%E6%88%8F%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },
  {
    project: "NyanHeroes",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/NyanHeroes/NyanHeroes%20Security%20analysis%20report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/NyanHeroes/NyanHeroes%E6%B8%B8%E6%88%8F%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },
  {
    project: "RuneHeroes",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/RuneHero/RuneHero%20Security%20analysis%20report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/RuneHero/RuneHero%E6%B8%B8%E6%88%8F%E5%AE%89%E5%85%A8%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },
  {
    project: "Seraph",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Seraph/Seraph%20Game%20Security%20Analysis%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Seraph/Seraph%E6%B8%B8%E6%88%8F%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },
  {
    project: "Shrapnel",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Shrapnel/Shrapnel%20Security%20analysis%20report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/Shrapnel/Shrapnel%E6%B8%B8%E6%88%8F%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },
  {
    project: "illuvium",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/illuvium/illuvium%20Security%20analysis%20report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/illuvium/Illuvium%20%E6%B8%B8%E6%88%8F%E5%AE%89%E5%85%A8%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },
  {
    project: "SubstanceX",
    englishReport: "https://github.com/DamoclesLabs/Audit/blob/main/SubstanceX/Code%20Security%20Audit%20Report%20For%20SubstanceX.pdf",
    chineseReport: ""
  },
  {
    project: "OFF THE GRID ",
    englishReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/OFF%20THE%20GRID/off%20the%20Grid%20Security%20analysis%20report%20.pdf",
    chineseReport: "https://github.com/DamoclesLabs/GameFi-Analysis-Report/blob/main/OFF%20THE%20GRID/Off%20the%20grid%20%E6%B8%B8%E6%88%8F%E5%AE%89%E5%85%A8%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.pdf"
  },  
  {
    project: "Blend",
    englishReport: "https://github.com/DamoclesLabs/Audit/blob/main/Blend/Final%20Code%20Security%20Audit%20Report%20For%20Blend.pdf",
    chineseReport: ""
  },
  {
    project: "ThrustPad",
    englishReport: "https://github.com/DamoclesLabs/Audit/blob/main/ThrustPad/Code%20Security%20Audit%20Report%20For%20ThrustPad%20Final.pdf",
    chineseReport: ""
  },
  {
    project: "EDBank",
    englishReport: "https://github.com/DamoclesLabs/Audit/blob/main/EDBank/Code%20Security%20Audit%20Report%20For%20EDBank%20Final.pdf",
    chineseReport: ""
  },
  // ... 添加其他项目数据
];

function Reports() {
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 10;

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reportsData.slice(indexOfFirstReport, indexOfLastReport);

  const totalPages = Math.ceil(reportsData.length / reportsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <ReportsContainer>
      <Title>Security Analysis Reports</Title>
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th style={{ width: '30%' }}>Project</Th>
              <Th style={{ width: '70%', textAlign: 'center' }}>Reports</Th>
            </tr>
          </Thead>
          <Tbody>
            {currentReports.map((report, index) => (
              <Tr key={index} even={index % 2 === 0}>
                <Td><ProjectName>{report.project}</ProjectName></Td>
                <Td className="reports-column">
                  <Link href={report.englishReport} target="_blank">
                    <FaFileAlt /> EN
                  </Link>
                  {report.chineseReport && (
                    <Link href={report.chineseReport} target="_blank">
                      <FaFileAlt /> 中文
                    </Link>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <PaginationContainer>
        <PageButton 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </PageButton>
        <PageInfo>Page {currentPage} of {totalPages}</PageInfo>
        <PageButton 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </PageButton>
      </PaginationContainer>
    </ReportsContainer>
  );
}

export default Reports;