import React, {useState} from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import {
  Container,
  ContentTable,
  Table,
  Thead,
  Tr,
  PaginationContainer,
  PaginationButton,
  TableWrapper,
  Th,
  Td,
  DescriptionBox,
  ButtonSelectColumn,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  Checkbox,
  FilterButton,
  LabelBox,
  ButtonDownload
} from "./TableStyles";

interface EC2 {
  Account: string;
  Region: string;
  InstanceID: string;
  State: string;
  InstanceType: string;
  ImageID: string;
  OperatingSystem: string;
  Volumes: string[];
  Tags: { Key: string; Value: string }[];
}

const extractTagValue = (tags: { Key: string; Value: string }[], key: string) => {
  const tag = tags.find(tag => tag.Key === key);
  return tag ? tag.Value : "N/A";
};

const RelatoryEC2Instances: React.FC<{ data: EC2[] }> = ({ data }) => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisibleFilter, setModalVisibleFilter] = useState(false);
  const [modalVisibleDownload, setModalVisibleDownload] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState({
    Account: true,
    Region: true,
    InstanceID:true,
    State: true,
    InstanceType: true,
    ImageID: true,
    OperatingSystem: true,
    Volumes: true,
    Tags: true
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
    const handleColumnToggle = (column: keyof EC2) => {
      setSelectedColumns((prev) => ({
        ...prev,
        [column]: !prev[column],
      }));
    };
  
    const applyFilters = () => {
      setModalVisibleFilter(false);
    };
  
    const revertFilters = () => {
      setSelectedColumns({
        Account: true,
        Region: true,
        InstanceID:true,
        State: true,
        InstanceType: true,
        ImageID: true,
        OperatingSystem: true,
        Volumes: true,
        Tags: true
      });
      setModalVisibleFilter(false);
    };
  
    // Função para exportar os dados para JSON
    const exportToJSON = () => {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      saveAs(blob, "relatorio_ec2.json");
    };
  
    // Função para exportar os dados para PDF
    const exportToPDF = () => {
      const doc = new jsPDF();
      doc.text("Relatório de EC2", 20, 20);
    
      const tableData = data.map((item) => [
        item.Account,
        item.Region,
        item.InstanceID,
        item.State,
        item.InstanceType,
        item.ImageID,
        item.OperatingSystem,
        item.Volumes
      ]);
    
      // Chama autoTable corretamente
      autoTable(doc, {
        head: [["Account", "Region", "InstanceID", "State","InstanceType", "ImageID","OperatingSystem", "Volumes"]],
        body: tableData,
      });
    
      doc.save("relatorio_ec2.pdf");
    };
  
    // Função para exportar os dados para Excel
    const exportToExcel = () => {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "EC2");
      XLSX.writeFile(wb, "relatorio_ec2.xlsx");
    };

  return (
    <Container>
      <ContentTable>
        <DescriptionBox>
          <LabelBox>
          <h3>Relatório de EC2 Instances</h3>
            <ButtonDownload type="button" onClick={() => setModalVisibleDownload(true)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-download.png`}
                style={{ width: 20, height: 20 }}
                alt="baixar"
              />
            </ButtonDownload>
          </LabelBox>
          <p>
            Agrupar por colunas:
            <ButtonSelectColumn type="button" onClick={() => setModalVisibleFilter(true)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-filter.png`}
                style={{ width: 15, height: 20 }}
                alt="filtro"
              />
            </ButtonSelectColumn>
          </p>
        </DescriptionBox>
      <h3>Dados Gerais</h3>
      <TableWrapper>
      <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <Table>
          <Thead>
            <Tr>
            {selectedColumns.Account && <Th>Account</Th>}
            {selectedColumns.Region && <Th>Region</Th>}
            {selectedColumns.InstanceID && <Th>Instance ID</Th>}
            {selectedColumns.State && <Th>State</Th>}
            {selectedColumns.InstanceType && <Th>Instance Type</Th>}
            {selectedColumns.ImageID && <Th>Image ID</Th>}
            {selectedColumns.OperatingSystem && <Th>Operating System</Th>}
            {selectedColumns.Volumes && <Th>Volumes</Th>}
            </Tr>
          </Thead>
          <tbody>
            {currentItems.map(ec2 => (
              <Tr key={ec2.InstanceID}>
                {selectedColumns.Account && <Td>{ec2.Account}</Td>}
                {selectedColumns.Region && <Td>{ec2.Region}</Td>}
                {selectedColumns.InstanceID && <Td>{ec2.InstanceID}</Td>}
                {selectedColumns.State && <Td>{ec2.State}</Td>}
                {selectedColumns.InstanceType && <Td>{ec2.InstanceType}</Td>}
                {selectedColumns.ImageID && <Td>{ec2.ImageID}</Td>}
                {selectedColumns.OperatingSystem && <Td>{ec2.OperatingSystem}</Td>}
                {selectedColumns.Volumes && <Td>{ec2.Volumes.join(", ") || "N/A"}</Td>}
              </Tr>
            ))}
          </tbody>
        </Table>
        {totalPages > 1 && (
          <PaginationContainer>
            <PaginationButton
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-back.png`}
                style={{ width: 15, height: 20 }}
                alt="voltar"
              />
            </PaginationButton>
            <span>{currentPage}&nbsp;&nbsp;de&nbsp;&nbsp;{totalPages}</span>
            <PaginationButton
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-back.png`}
                style={{ width: 15, height: 20, transform: "scaleX(-1)" }}
                alt="avançar"
              />
            </PaginationButton>
          </PaginationContainer>
        )}
      </div>
      </TableWrapper>
      </ContentTable>
      <ContentTable>
      {/* Segunda Tabela: Tags */}
      <h3>Informações de Tags</h3>
      <TableWrapper>
        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <Table>
          <Thead>
            <Tr>
            {selectedColumns.Account && <Th>Account</Th>}
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
                {selectedColumns.Account && <Td>{ec2.Account}</Td>}
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
        {totalPages > 1 && (
          <PaginationContainer>
            <PaginationButton
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-back.png`}
                style={{ width: 15, height: 20 }}
                alt="voltar"
              />
            </PaginationButton>
            <span>{currentPage}&nbsp;&nbsp;de&nbsp;&nbsp;{totalPages}</span>
            <PaginationButton
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-back.png`}
                style={{ width: 15, height: 20, transform: "scaleX(-1)" }}
                alt="avançar"
              />
            </PaginationButton>
          </PaginationContainer>
        )}
      </div>
      </TableWrapper>
      </ContentTable>
      {/* Modal de Filtro */}
      {modalVisibleFilter && (
        <Modal onClick={() => setModalVisibleFilter(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>Seleção de Filtros</h3>
              <CloseButton onClick={() => setModalVisibleFilter(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              {Object.keys(selectedColumns).map((column) => (
                <div key={column}>
                  <Checkbox
                    type="checkbox"
                    checked={selectedColumns[column as keyof EC2]}
                    onChange={() => handleColumnToggle(column as keyof EC2)}
                  />
                  <label>{column}</label>
                </div>
              ))}
            </ModalBody>
            <ModalFooter>
              <FilterButton onClick={applyFilters}>Aplicar Filtros</FilterButton>
              <FilterButton onClick={revertFilters}>Reverter Filtros</FilterButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    {/* Modal de Download */}
      {modalVisibleDownload && (
        <Modal onClick={() => setModalVisibleDownload(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>Seleção de Formato</h3>
              <CloseButton onClick={() => setModalVisibleDownload(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <FilterButton onClick={exportToJSON}>Exportar como JSON</FilterButton>
              <FilterButton onClick={exportToPDF}>Exportar como PDF</FilterButton>
              <FilterButton onClick={exportToExcel}>Exportar como Excel</FilterButton>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default RelatoryEC2Instances;
