import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, ChartOptions, ChartData } from 'chart.js';
import { Bar, Line, Pie, Radar, Doughnut } from 'react-chartjs-2';
import LogoutModal from '../login/LogoutModal';
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
  IconMenuNotification,
  RelatoryContent,
  ToggleButton
} from "./DashboardStyles";

// Configuração do Chart.js
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface InstanceData {
  Account?: string;
  Region?: string;
  InstanceID?: string;
  State?: string;
  InstanceType?: string;
  ImageID?: string;
  OperatingSystem?: string;
  Volumes?: string[];
  Tags?: { Key: string; Value: string }[];
  CPUUsage?: number;
  MemoryUsage?: number;
  NetworkIn?: number;
  NetworkOut?: number;
  VolumeSize?: number;
  IOPS?: number;
  BucketName?: string;
  ObjectCount?: number;
  Size?: number;
  DBInstanceIdentifier?: string;
  Engine?: string;
  AllocatedStorage?: number;
}

interface DashboardChartData {
  title: string;
  type: 'pie' | 'bar' | 'line' | 'radar' | 'doughnut';
  data: Array<{ name: string; value: number }>;
}

interface DashboardData {
  type: string;
  charts: DashboardChartData[];
  stats: {
    totalInstances: number;
    totalCost: number;
    totalStorage: number;
  };
}

//Interfaces dos Charts

// Para gráficos de Pizza (Pie)
interface PieChartData extends ChartData<'pie'> {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor?: string[];
    hoverBackgroundColor?: string[];
  }[];
}

// Para gráficos de Barra (Bar)
interface BarChartData extends ChartData<'bar'> {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
}

// Para gráficos de Linha (Line)
interface LineChartData extends ChartData<'line'> {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    fill?: boolean;
    borderColor?: string;
    tension?: number;
    pointRadius?: number;
  }[];
}

// Para gráficos de Radar
interface RadarChartData extends ChartData<'radar'> {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    pointBackgroundColor?: string;
    pointBorderColor?: string;
  }[];
}

// Para gráficos de Rosca (Doughnut)
interface DoughnutChartData extends ChartData<'doughnut'> {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor?: string[];
    hoverBackgroundColor?: string[];
  }[];
}

function Dashboard() {
  const [selectedInstance, setSelectedInstance] = useState<string>("#");
  const [jsonData, setJsonData] = useState<Record<string, Record<string, InstanceData[]>>>({});
  const [chartData, setChartData] = useState<DashboardData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/recursos.json`)
      .then((response) => response.json())
      .then((data: Record<string, Record<string, InstanceData[]>>) => {
        setJsonData(data);
        updateChartData(selectedInstance, data);
      })
      .catch((error) => console.error("Erro ao carregar JSON", error));
  }, []);

  useEffect(() => {
    if (Object.keys(jsonData).length > 0) {
      updateChartData(selectedInstance, jsonData);
    }
  }, [selectedInstance, jsonData]);

  const calculateTotalCost = (data: InstanceData[]) => {
    return data.length * 100; // Exemplo simplificado
  };

  const calculateTotalStorage = (data: InstanceData[]) => {
    return data.reduce((total: number, item: InstanceData) => {
      return total + (item.VolumeSize || 0) + (item.Size || 0);
    }, 0);
  };

  const updateChartData = (instanceType: string, data: Record<string, Record<string, InstanceData[]>>) => {
    if (!instanceType || instanceType === "#") return;

    const allData = getFilteredData();
    
    const stats = {
      totalInstances: allData.length,
      totalCost: calculateTotalCost(allData),
      totalStorage: calculateTotalStorage(allData)
    };

    switch (instanceType) {
      case "EC2":
        setChartData({
          type: "EC2",
          charts: [
            {
              title: "Distribuição de Tipos de Instâncias",
              type: "pie",
              data: Object.entries(allData.reduce((acc: any, item: any) => {
                acc[item.InstanceType] = (acc[item.InstanceType] || 0) + 1;
                return acc;
              }, {})).map(([key, value]) => ({ name: key, value: value as number }))
            },
            {
              title: "Uso de CPU por Instância",
              type: "bar",
              data: allData.map((item: any) => ({
                name: item.InstanceID || '',
                value: item.CPUUsage || 0,
              }))
            },
            {
              title: "Uso de Memória",
              type: "line",
              data: allData.map((item: any) => ({
                name: item.InstanceID || '',
                value: item.MemoryUsage || 0,
              }))
            },
            {
              title: "Tráfego de Rede",
              type: "radar",
              data: allData.map((item: any) => ({
                name: item.InstanceID || '',
                value: (item.NetworkIn || 0) + (item.NetworkOut || 0),
              }))
            }
          ],
          stats
        });
        break;

      case "EBS":
        setChartData({
          type: "EBS",
          charts: [
            {
              title: "Distribuição de Tamanho de Volumes",
              type: "bar",
              data: allData.map((item: any) => ({
                name: item.InstanceID || '',
                value: item.VolumeSize || 0,
              }))
            },
            {
              title: "Uso de IOPS",
              type: "line",
              data: allData.map((item: any) => ({
                name: item.InstanceID || '',
                value: item.IOPS || 0,
              }))
            },
            {
              title: "Distribuição de Volumes por Região",
              type: "doughnut",
              data: Object.entries(allData.reduce((acc: any, item: any) => {
                acc[item.Region] = (acc[item.Region] || 0) + 1;
                return acc;
              }, {})).map(([key, value]) => ({ name: key, value: value as number }))
            }
          ],
          stats
        });
        break;

      case "RDS":
        setChartData({
          type: "RDS",
          charts: [
            {
              title: "Distribuição de Tipos de Banco",
              type: "pie",
              data: Object.entries(allData.reduce((acc: any, item: any) => {
                acc[item.Engine] = (acc[item.Engine] || 0) + 1;
                return acc;
              }, {})).map(([key, value]) => ({ name: key, value: value as number }))
            },
            {
              title: "Uso de Memória",
              type: "bar",
              data: allData.map((item: any) => ({
                name: item.DBInstanceIdentifier || '',
                value: item.AllocatedStorage || 0,
              }))
            },
            {
              title: "Status das Instâncias",
              type: "doughnut",
              data: Object.entries(allData.reduce((acc: any, item: any) => {
                acc[item.State] = (acc[item.State] || 0) + 1;
                return acc;
              }, {})).map(([key, value]) => ({ name: key, value: value as number }))
            }
          ],
          stats
        });
        break;

      case "S3":
        setChartData({
          type: "S3",
          charts: [
            {
              title: "Tamanho dos Buckets",
              type: "bar",
              data: allData.map((item: any) => ({
                name: item.BucketName || '',
                value: item.Size || 0,
              }))
            },
            {
              title: "Número de Objetos",
              type: "line",
              data: allData.map((item: any) => ({
                name: item.BucketName || '',
                value: item.ObjectCount || 0,
              }))
            },
            {
              title: "Distribuição por Região",
              type: "pie",
              data: Object.entries(allData.reduce((acc: any, item: any) => {
                acc[item.Region] = (acc[item.Region] || 0) + 1;
                return acc;
              }, {})).map(([key, value]) => ({ name: key, value: value as number }))
            }
          ],
          stats
        });
        break;

      default:
        setChartData(null);
    }
  };

  const getFilteredData = () => {
    if (!selectedInstance || Object.keys(jsonData).length === 0) return [];

    let allData: InstanceData[] = [];
    
    Object.keys(jsonData).forEach((account) => {
      if (jsonData[account][selectedInstance]) {
        const formattedData = jsonData[account][selectedInstance].map((item: InstanceData) => ({
          ...item,
          Account: account, 
        }));
        allData = [...allData, ...formattedData];
      }
    });
    
    return allData;
  };

  const renderCharts = () => {
    if (!chartData) return null;

    return chartData.charts.map((chart: DashboardChartData, index: number) => {
      const chartOptions: ChartOptions<'bar' | 'line' | 'pie' | 'radar' | 'doughnut'> = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: chart.title,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
            },
          },
        },
      };

      const chartData: ChartData<'bar' | 'line' | 'pie' | 'radar' | 'doughnut'> = {
        labels: chart.data.map(item => item.name),
        datasets: [{
          label: chart.title,
          data: chart.data.map(item => item.value),
          backgroundColor: chart.type === 'pie' || chart.type === 'doughnut' ? [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ] : chart.type === 'radar' ? [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ] : 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          ...(chart.type === 'line' && {
            tension: 0.1,
            fill: false
          }),
          ...(chart.type === 'radar' && {
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
          })
        }]
      };

      const pieChartOptions: ChartOptions<'pie'> = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
      
      const doughnutChartOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
      
      const barChartOptions: ChartOptions<'bar'> = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      
      const lineChartOptions: ChartOptions<'line'> = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      
      const radarChartOptions: ChartOptions<'radar'> = {
        responsive: true,
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      };
      
      return (
        <div key={index}>
          <h3>{chart.title}</h3>
          <ToggleButton
            onClick={() => setShowAdvanced(prev => !prev)}
            style={{ marginLeft: 'auto' }}
          >
            {showAdvanced ? ' Ocultar Detalhes' : ' Ver Detalhes'}
          </ToggleButton>
          {chart.type === 'pie' ? (
            <Pie 
              data={{
                labels: chart.data.map(item => item.name),
                datasets: [{
                  data: chart.data.map(item => item.value),
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
                }]
              }} 
              options={pieChartOptions} 
            />
          ) : chart.type === 'doughnut' ? (
            <Doughnut 
              data={{
                labels: chart.data.map(item => item.name),
                datasets: [{
                  data: chart.data.map(item => item.value),
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
                }]
              }} 
              options={doughnutChartOptions} 
            />
          ) : chart.type === 'radar' ? (
            <Radar 
              data={{
                labels: chart.data.map(item => item.name),
                datasets: [{
                  label: chart.title,
                  data: chart.data.map(item => item.value),
                  backgroundColor: 'rgba(179,181,198,0.2)',
                  borderColor: 'rgba(179,181,198,1)',
                  pointBackgroundColor: 'rgba(179,181,198,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(179,181,198,1)'
                }]
              }} 
              options={radarChartOptions} 
            />
          ) : chart.type === 'line' ? (
            <Line 
              data={{
                labels: chart.data.map(item => item.name),
                datasets: [{
                  label: chart.title,
                  data: chart.data.map(item => item.value),
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }]
              }} 
              options={lineChartOptions} 
            />
          ) : (
            <Bar 
              data={{
                labels: chart.data.map(item => item.name),
                datasets: [{
                  label: chart.title,
                  data: chart.data.map(item => item.value),
                  backgroundColor: 'rgba(54, 162, 235, 0.5)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1
                }]
              }} 
              options={barChartOptions} 
            />
          )}
        </div>
      );
    });
  };

  const handleFilterChange = (instance: string) => {
    setSelectedInstance(instance);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <ContentScreen>
      <RowHeader>
        <BoxLogo>
          <Logo 
            src={`${process.env.PUBLIC_URL}/assets/TelaLogin/logo-cloud-client.png`} 
            alt="logo" 
            style={{ cursor: "pointer" }} 
            onClick={() => navigate("/home")}
          />
        </BoxLogo>
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
          <IconMenuNotification>
            <img 
              src={`${process.env.PUBLIC_URL}/assets/Navbar/icon-Logout.png`} 
              alt="logout" 
              style={{ width: 15, height: 20 }} 
              onClick={() => setIsModalOpen(true)}
            />
          </IconMenuNotification>
        </MenuConfig>
      </RowHeader>
      <RelatoryContent>
        {selectedInstance === "#" ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Selecione um tipo de instância para visualizar os gráficos</h2>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {chartData && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <h3>Total de Instâncias: {chartData.stats.totalInstances}</h3>
                  <h3>Custo Estimado: ${chartData.stats.totalCost.toFixed(2)}</h3>
                  <h3>Armazenamento Total: {chartData.stats.totalStorage.toLocaleString()} GB</h3>
                </div>
              </div>
            )}
            {renderCharts()}
          </div>
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

export default Dashboard;