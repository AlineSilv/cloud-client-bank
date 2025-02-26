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
} from "./TableStyles.ts";

interface EC2 {
  Account: string;
  Region: string;
  InstanceID: string;
  State: string;
  InstanceType: string;
  ImageId: string;
  OperatingSystem: string;
  Volumes: string[];
  Tags: { Key: string; Value: string }[];
}

const extractTagValue = (tags: { Key: string; Value: string }[], key: string) => {
  const tag = tags.find(tag => tag.Key === key);
  return tag ? tag.Value : "N/A";
};

const RelatoryEC2Instances: React.FC<{ data: EC2[] }> = ({ data }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  return (
    <Container>
      <h2>Relatório de EC2 Instances</h2>
      
      {/* Primeira Tabela: Dados principais */}
      <h3>Dados Gerais</h3>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Account</Th>
              <Th>Region</Th>
              <Th>Instance ID</Th>
              <Th>State</Th>
              <Th>Instance Type</Th>
              <Th>Image ID</Th>
              <Th>Operating System</Th>
              <Th>Volumes</Th>
            </Tr>
          </Thead>
          <tbody>
            {currentItems.map(ec2 => (
              <Tr key={ec2.InstanceID}>
                <Td>{ec2.Account}</Td>
                <Td>{ec2.Region}</Td>
                <Td>{ec2.InstanceID}</Td>
                <Td>{ec2.State}</Td>
                <Td>{ec2.InstanceType}</Td>
                <Td>{ec2.ImageId}</Td>
                <Td>{ec2.OperatingSystem}</Td>
                <Td>{ec2.Volumes.join(", ") || "N/A"}</Td>
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

      {/* Segunda Tabela: Tags */}
      <h3>Informações de Tags</h3>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>Account</Th>
              <Th>Name</Th>
              <Th>swoMonitor</Th>
              <Th>Billing-MagProd</Th>
              <Th>swoRiskClass</Th>
              <Th>map-migrated</Th>
              <Th>swoBackup</Th>
              <Th>swoPatch</Th>
              <Th>Shutdown</Th>
              <Th>aws:cloudformation:stack-name</Th>
              <Th>aws:cloudformation:stack-id</Th>
              <Th>aws:cloudformation:logical-id</Th>
              <Th>AWSApplicationMigrationServiceManaged</Th>
              <Th>aws:ec2launchtemplate:id</Th>
              <Th>mgn.amazonaws.com-job</Th>
              <Th>observacao</Th>
            </Tr>
          </Thead>
          <tbody>
            {currentItems.map(ec2 => (
              <Tr key={ec2.InstanceID}>
                <Td>{ec2.Account}</Td>
                <Td>{extractTagValue(ec2.Tags, "Name")}</Td>
                <Td>{extractTagValue(ec2.Tags, "swoMonitor")}</Td>
                <Td>{extractTagValue(ec2.Tags, "Billing-MagProd")}</Td>
                <Td>{extractTagValue(ec2.Tags, "swoRiskClass")}</Td>
                <Td>{extractTagValue(ec2.Tags, "map-migrated")}</Td>
                <Td>{extractTagValue(ec2.Tags, "swoBackup")}</Td>
                <Td>{extractTagValue(ec2.Tags, "swoPatch")}</Td>
                <Td>{extractTagValue(ec2.Tags, "Shutdown")}</Td>
                <Td>{extractTagValue(ec2.Tags, "aws:cloudformation:stack-name")}</Td>
                <Td>{extractTagValue(ec2.Tags, "aws:cloudformation:stack-id")}</Td>
                <Td>{extractTagValue(ec2.Tags, "aws:cloudformation:logical-id")}</Td>
                <Td>{extractTagValue(ec2.Tags, "AWSApplicationMigrationServiceManaged")}</Td>
                <Td>{extractTagValue(ec2.Tags, "aws:ec2launchtemplate:id")}</Td>
                <Td>{extractTagValue(ec2.Tags, "mgn.amazonaws.com-job")}</Td>
                <Td>{extractTagValue(ec2.Tags, "observacao")}</Td>
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

export default RelatoryEC2Instances;
