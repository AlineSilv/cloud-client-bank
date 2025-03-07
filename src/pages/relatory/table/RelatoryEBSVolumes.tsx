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
} from "./TableStyles";

interface EBS {
  Account: string;
  Region: string;
  VolumeID: string;
  SizeGB: number;
  State: string;
  AttachedInstances: string[];
}

interface RelatoryEBSVolumesProps {
  data: EBS[];
}

const RelatoryEBSVolumes: React.FC<RelatoryEBSVolumesProps> = ({ data }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <Container>
      <h2>Relatório de EBS Volumes</h2>
      <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Account</Th>
            <Th>Region</Th>
            <Th>Volume ID</Th>
            <Th>Size (GB)</Th>
            <Th>State</Th>
            <Th>Attached Instances</Th>
          </Tr>
        </Thead>
        <tbody>
          {currentItems.map((volume) => (
            <Tr key={volume.VolumeID}>
              <Td>{volume.Account}</Td>
              <Td>{volume.Region}</Td>
              <Td>{volume.VolumeID}</Td>
              <Td>{volume.SizeGB}</Td>
              <Td>{volume.State}</Td>
              <Td>{volume.AttachedInstances.join(", ") || "N/A"}</Td>
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

export default RelatoryEBSVolumes;
