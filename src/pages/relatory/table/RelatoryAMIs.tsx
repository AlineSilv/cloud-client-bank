import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

import {
  Container,
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


interface AMIs {
  Account: string;
  Region: string;
  ImageID: string;
  Name: string;
  CreationDate: string;
  State: string;
}

interface RelatoryAMIsProps {
  data: AMIs[];
}

const RelatoryAMIs: React.FC<RelatoryAMIsProps> = ({ data }) => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisibleFilter, setModalVisibleFilter] = useState(false);
  const [modalVisibleDownload, setModalVisibleDownload] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState({
    Account: true,
    Region: true,
    ImageID: true,
    Name: true,
    CreationDate: true,
    State: true,
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleColumnToggle = (column: keyof AMIs) => {
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
      ImageID: true,
      Name: true,
      CreationDate: true,
      State: true,
    });
    setModalVisibleFilter(false);
  };

  // Função para exportar os dados para JSON
  const exportToJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    saveAs(blob, "relatorio_amis.json");
  };

  // Função para exportar os dados para PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Relatório de AMIs", 20, 20);
  
    const tableData = data.map((item) => [
      item.Account,
      item.Region,
      item.ImageID,
      item.Name,
      item.CreationDate,
      item.State,
    ]);
  
    // Chama autoTable corretamente
    autoTable(doc, {
      head: [["Account", "Region", "Image ID", "Name", "Creation Date", "State"]],
      body: tableData,
    });
  
    doc.save("relatorio_amis.pdf");
  };

  // Função para exportar os dados para Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "AMIs");
    XLSX.writeFile(wb, "relatorio_amis.xlsx");
  };

  return (
    <Container>
      <TableWrapper>
        <DescriptionBox>
          <LabelBox>
            <h3>Relatório de AMIs</h3>
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
        <Table>
          <Thead>
            <Tr>
              {selectedColumns.Account && <Th>Account</Th>}
              {selectedColumns.Region && <Th>Region</Th>}
              {selectedColumns.ImageID && <Th>Image ID</Th>}
              {selectedColumns.Name && <Th>Name</Th>}
              {selectedColumns.CreationDate && <Th>Creation Date</Th>}
              {selectedColumns.State && <Th>State</Th>}
            </Tr>
          </Thead>
          <tbody>
            {currentItems.map((ami) => (
              <Tr key={ami.ImageID}>
                {selectedColumns.Account && <Td>{ami.Account}</Td>}
                {selectedColumns.Region && <Td>{ami.Region}</Td>}
                {selectedColumns.ImageID && <Td>{ami.ImageID}</Td>}
                {selectedColumns.Name && <Td>{ami.Name}</Td>}
                {selectedColumns.CreationDate && <Td>{ami.CreationDate}</Td>}
                {selectedColumns.State && <Td>{ami.State}</Td>}
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
                    checked={selectedColumns[column as keyof AMIs]}
                    onChange={() => handleColumnToggle(column as keyof AMIs)}
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

export default RelatoryAMIs;
