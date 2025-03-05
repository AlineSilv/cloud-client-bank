import React,  { useState, useEffect, lazy, Suspense }  from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutModal from '../login/LogoutModal.tsx'
import {
  ContentScreen,
  RowHeader,
  BoxLogo,
  Logo,
  HeaderMenuBar,
  LabelInstruct,
  LabelInstructBlack,
  InstanceSelect,
  MenuConfig,
  IconLogout,
  RelatoryContent,
} from "./RelatoryStyles.ts";

const relatoryComponents: Record<string, any> = {
  "#": lazy(() => import("./EmptyRelatory.tsx")),
  "AMIs": lazy(() => import("./table/RelatoryAMIs.tsx")),
  "EBSSnapshots": lazy(() => import("./table/RelatoryEBSSnapshots.tsx")),
  "EBS": lazy(() => import("./table/RelatoryEBSVolumes.tsx")),
  "EC2": lazy(() => import("./table/RelatoryEC2Instances.tsx")),
  "ElasticIP": lazy(() => import("./table/RelatoryElasticIPs.tsx")),
  "RDS": lazy(() => import("./table/RelatoryRDSInstances.tsx")),
  "RDSSnapshots": lazy(() => import("./table/RelatoryRDSSnapshots.tsx")),
  "S3": lazy(() => import("./table/RelatoryS3Buckets.tsx")),
};

function Relatory() {
  const [selectedInstance, setSelectedInstance] = useState<string>("#");
  const [jsonData, setJsonData] = useState<any>({});

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/recursos.json`)
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data); 
      })
      .catch((error) => console.error("Erro ao carregar JSON", error));
  }, []);

  const getFilteredData = () => {
    if (!selectedInstance || Object.keys(jsonData).length === 0) return [];
  
    let allData: any[] = [];
  
    Object.keys(jsonData).forEach((account) => {
      if (jsonData[account][selectedInstance]) {
        const formattedData = jsonData[account][selectedInstance].map((item: any) => ({
          ...item,
          Account: account, 
        }));
        allData = [...allData, ...formattedData];
      }
    });
  
    return allData;
  };
  const handleFilterChange = (instance: string) => {
    setSelectedInstance(instance);
  };

  const SelectedRelatory = selectedInstance ? relatoryComponents[selectedInstance] : null;
  
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogout = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <ContentScreen>
      <RowHeader>
        <BoxLogo><Logo src={`${process.env.PUBLIC_URL}/assets/TelaLogin/logo-cloud-client.png`} alt="logo"
            style={{ cursor: "pointer" }} 
            onClick={() => navigate("/home")}/></BoxLogo>
        <HeaderMenuBar>
          <LabelInstruct> Instâncias / <LabelInstructBlack>{selectedInstance || ""}</LabelInstructBlack></LabelInstruct>
          <InstanceSelect value={selectedInstance} onChange={(e) => handleFilterChange(e.target.value)}> 
            <option value="#">Selecione a Instância</option>
            <option value="AMIs">AMIs</option>
            <option value="EBSSnapshots">EBS Snapshots</option>
            <option value="EBS">EBS Volumes</option>
            <option value="EC2">EC2 Instances</option>
            <option value="ElasticIP">Elastic IPs</option>
            <option value="RDS">RDS Instances</option>
            <option value="RDSSnapshots">RDS Snapshots</option>
            <option value="S3">S3 Buckets</option>
          </InstanceSelect>
        </HeaderMenuBar>
        <MenuConfig>
          <IconLogout>
            <img src= {`${process.env.PUBLIC_URL}/assets/Navbar/icon-logout.png`} alt="alertas" style={{ width: 15, height: 20 }} 
            onClick={() => setIsModalOpen(true)}/>
          </IconLogout>
        </MenuConfig>
      </RowHeader>
      <RelatoryContent>
        {SelectedRelatory && (
          <Suspense fallback={<div>Carregando...</div>}>
            <SelectedRelatory data={getFilteredData()} />
          </Suspense>
        )}
      </RelatoryContent>
      <LogoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleLogout} 
        />
    </ContentScreen>
  );
}

export default Relatory;

