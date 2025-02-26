import React, { useState } from "react";
import {
  Container,
  Table,
  Thead,
  Tr,
  PaginationContainer,
  PaginationButton,
  TableWrapper,
  Th,
  Td
} from "./TableStyles.ts";

interface EBSSnapshot {
  Account: string;
  Region: string;
  SnapshotID: string;
  VolumeID: string;
  SizeGB: number;
  StartTime: string;
  State: string;
}

interface RelatoryEBSSnapshotsProps {
  data: EBSSnapshot[];
}

const RelatoryEBSSnapshots: React.FC<RelatoryEBSSnapshotsProps> = ({ data }) => {
  const itemsPerPage = 15; 
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <Container>
      <h2>Relatório de EBS Snapshots</h2>
      <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Account</Th>
            <Th>Region</Th>
            <Th>Snapshot ID</Th>
            <Th>Volume ID</Th>
            <Th>Size (GB)</Th>
            <Th>Start Time</Th>
            <Th>State</Th>
          </Tr>
        </Thead>
        <tbody>
          {currentItems.map((snapshot) => (
            <Tr key={snapshot.SnapshotID}>
              <Td>{snapshot.Account}</Td>
              <Td>{snapshot.Region}</Td>
              <Td>{snapshot.SnapshotID}</Td>
              <Td>{snapshot.VolumeID}</Td>
              <Td>{snapshot.SizeGB}</Td>
              <Td>{new Date(snapshot.StartTime).toLocaleDateString()}</Td>
              <Td>{snapshot.State}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      </TableWrapper>
      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationButton 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
          >
            Anterior
          </PaginationButton>
          <span>Página {currentPage} de {totalPages}</span>
          <PaginationButton 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages}
          >
            Próximo
          </PaginationButton>
        </PaginationContainer>
      )}
    </Container>
  );
};

export default RelatoryEBSSnapshots;
