import React, {useState} from "react";
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

interface S3 {
  Account: string;
  BucketName: string;
  Region: string;
  LifecycleRules: boolean;
  SizeBytes: number;
  StorageClass: string;
}

interface RelatoryS3BucketsProps {
  data: S3[];
}

const RelatoryS3Buckets: React.FC<RelatoryS3BucketsProps> = ({ data }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
    
  return (
    <Container>
      <h2>Relatório de S3 Buckets</h2>
      <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Account</Th>
            <Th>Bucket Name</Th>
            <Th>Region</Th>
            <Th>Lifecycle Rules</Th>
            <Th>Size (Bytes)</Th>
            <Th>Storage Class</Th>
          </Tr>
        </Thead>
        <tbody>
          {currentItems.map((bucket, index) => (
            <Tr key={index}>
              <Td>{bucket.Account}</Td>
              <Td>{bucket.BucketName}</Td>
              <Td>{bucket.Region}</Td>
              <Td>{bucket.LifecycleRules ? "Configurado" : "Não Configurado"}</Td>
              <Td>{bucket.SizeBytes}</Td>
              <Td>{bucket.StorageClass}</Td>
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

export default RelatoryS3Buckets;
