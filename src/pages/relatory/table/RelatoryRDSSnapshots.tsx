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

interface RDSSnapshots {
  Account: string;
  Region: string;
  SnapshotID: string;
  DBInstanceID: string;
  SizeGB: number;
  Status: string;
  CreateTime: string;
}

interface RelatoryRDSSnapshotsProps {
  data: RDSSnapshots[];
}

const RelatoryRDSSnapshots: React.FC<RelatoryRDSSnapshotsProps> = ({ data }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisibleFilter, setModalVisibleFilter] = useState(false);
  const [modalVisibleDownload, setModalVisibleDownload] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState({
    Account: true,
    Region: true,
    SnapshotID: true,
    DBInstanceID: true,
    SizeGB: true,
    Status: true,
    CreateTime: true
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const handleColumnToggle = (column: keyof RDSSnapshots) => {
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
        SnapshotID: true,
        DBInstanceID: true,
        SizeGB: true,
        Status: true,
        CreateTime: true
      });
      setModalVisibleFilter(false);
    };
  
    // Função para exportar os dados para JSON
    const exportToJSON = () => {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      saveAs(blob, "relatorio_rdssnapshots.json");
    };
  
    // Função para exportar os dados para PDF
    const exportToPDF = () => {
      const doc = new jsPDF();
      doc.text("Relatório de RDS Snapshots", 20, 20);
    
      const tableData = data.map((item) => [
        item.Account,
        item.Region,
        item.SnapshotID,
        item.DBInstanceID,
        item.SizeGB,
        item.Status,
        item.CreateTime
      ]);
    
      // Chama autoTable corretamente
      autoTable(doc, {
        head: [["Account", "Region", "Snapshot ID", "DB Instance ID", "Size GB", "Status", "Create Time"]],
        body: tableData,
      });
    
      doc.save("relatorio_rdssnapthots.pdf");
    };
  
    // Função para exportar os dados para Excel
    const exportToExcel = () => {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "RDS Snapshots");
      XLSX.writeFile(wb, "relatorio_rdssnapshots.xlsx");
    };
  
  return (
    <Container>
      <ContentTable>
        <DescriptionBox>
          <LabelBox>
            <h3>Relatório de RDS Snapshots</h3>
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
      <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            {selectedColumns.Account && <Th>Account</Th>}
            {selectedColumns.Region && <Th>Region</Th>}
            {selectedColumns.SnapshotID && <Th>Snapshot ID</Th>}
            {selectedColumns.DBInstanceID && <Th>DB Instance ID</Th>}
            {selectedColumns.SizeGB && <Th>Size GB</Th>}
            {selectedColumns.Status && <Th>Status</Th>}
            {selectedColumns.CreateTime && <Th>Create Time</Th>}
          </Tr>
        </Thead>
        <tbody>
          {currentItems.map((snapshot, index) => (
            <Tr key={index}>
              {selectedColumns.Account && <Td>{snapshot.Account}</Td>}
              {selectedColumns.Region && <Td>{snapshot.Region}</Td>}
              {selectedColumns.SnapshotID && <Td>{snapshot.SnapshotID}</Td>}
              {selectedColumns.DBInstanceID && <Td>{snapshot.DBInstanceID}</Td>}
              {selectedColumns.SizeGB && <Td>{snapshot.SizeGB}</Td>}
              {selectedColumns.Status && <Td>{snapshot.Status}</Td>}
              {selectedColumns.CreateTime && <Td>{snapshot.CreateTime}</Td>}
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
                    checked={selectedColumns[column as keyof RDSSnapshots]}
                    onChange={() => handleColumnToggle(column as keyof RDSSnapshots)}
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

export default RelatoryRDSSnapshots;