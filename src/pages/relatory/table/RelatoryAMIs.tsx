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
  FilterButton
} from "./TableStyles.ts";

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
  const [modalVisible, setModalVisible] = useState(false);
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
    setModalVisible(false);
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
    setModalVisible(false);
  };

  return (
    <Container>
      <TableWrapper>
        <DescriptionBox>
          <h3>Relatório de AMIs</h3>
          <p>
            Agrupar por
            <ButtonSelectColumn type="button" onClick={() => setModalVisible(true)}>
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

      {modalVisible && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h3>Seleção de Colunas</h3>
              <CloseButton onClick={() => setModalVisible(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              {Object.keys(selectedColumns).map((column) => (
                <div key={column}>
                  <label>
                    <Checkbox
                      type="checkbox"
                      checked={selectedColumns[column as keyof AMIs]}
                      onChange={() => handleColumnToggle(column as keyof AMIs)}
                    />
                    {column}
                  </label>
                </div>
              ))}
            </ModalBody>
            <ModalFooter>
              <FilterButton onClick={revertFilters}>Reverter</FilterButton>
              <FilterButton onClick={applyFilters}>Aplicar</FilterButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default RelatoryAMIs;
