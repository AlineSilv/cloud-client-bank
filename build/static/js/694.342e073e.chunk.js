"use strict";(self.webpackChunkcloudclientbank=self.webpackChunkcloudclientbank||[]).push([[694],{694:(n,e,d)=>{d.r(e),d.d(e,{default:()=>l});var s=d(43),i=d(506),r=d(960);const c=(n,e)=>{const d=n.find((n=>n.Key===e));return d?d.Value:"N/A"},l=n=>{let{data:e}=n;const[d,l]=(0,s.useState)(1),a=10*d,o=a-10,h=e.slice(o,a),t=Math.ceil(e.length/10);return(0,r.jsxs)(i.mc,{children:[(0,r.jsx)("h2",{children:"Relat\xf3rio de EC2 Instances"}),(0,r.jsx)("h3",{children:"Dados Gerais"}),(0,r.jsx)(i.AC,{children:(0,r.jsxs)(i.XI,{children:[(0,r.jsx)(i.d8,{children:(0,r.jsxs)(i.Tr,{children:[(0,r.jsx)(i.Th,{children:"Account"}),(0,r.jsx)(i.Th,{children:"Region"}),(0,r.jsx)(i.Th,{children:"Instance ID"}),(0,r.jsx)(i.Th,{children:"State"}),(0,r.jsx)(i.Th,{children:"Instance Type"}),(0,r.jsx)(i.Th,{children:"Image ID"}),(0,r.jsx)(i.Th,{children:"Operating System"}),(0,r.jsx)(i.Th,{children:"Volumes"})]})}),(0,r.jsx)("tbody",{children:h.map((n=>(0,r.jsxs)(i.Tr,{children:[(0,r.jsx)(i.Td,{children:n.Account}),(0,r.jsx)(i.Td,{children:n.Region}),(0,r.jsx)(i.Td,{children:n.InstanceID}),(0,r.jsx)(i.Td,{children:n.State}),(0,r.jsx)(i.Td,{children:n.InstanceType}),(0,r.jsx)(i.Td,{children:n.ImageId}),(0,r.jsx)(i.Td,{children:n.OperatingSystem}),(0,r.jsx)(i.Td,{children:n.Volumes.join(", ")||"N/A"})]},n.InstanceID)))})]})}),t>1&&(0,r.jsxs)(i.Mn,{children:[(0,r.jsx)(i.L7,{onClick:()=>l((n=>Math.max(n-1,1))),disabled:1===d,children:"Anterior"}),(0,r.jsxs)("span",{children:["P\xe1gina ",d," de ",t]}),(0,r.jsx)(i.L7,{onClick:()=>l((n=>Math.min(n+1,t))),disabled:d===t,children:"Pr\xf3ximo"})]}),(0,r.jsx)("h3",{children:"Informa\xe7\xf5es de Tags"}),(0,r.jsx)(i.AC,{children:(0,r.jsxs)(i.XI,{children:[(0,r.jsx)(i.d8,{children:(0,r.jsxs)(i.Tr,{children:[(0,r.jsx)(i.Th,{children:"Account"}),(0,r.jsx)(i.Th,{children:"Name"}),(0,r.jsx)(i.Th,{children:"swoMonitor"}),(0,r.jsx)(i.Th,{children:"Billing-MagProd"}),(0,r.jsx)(i.Th,{children:"swoRiskClass"}),(0,r.jsx)(i.Th,{children:"map-migrated"}),(0,r.jsx)(i.Th,{children:"swoBackup"}),(0,r.jsx)(i.Th,{children:"swoPatch"}),(0,r.jsx)(i.Th,{children:"Shutdown"}),(0,r.jsx)(i.Th,{children:"aws:cloudformation:stack-name"}),(0,r.jsx)(i.Th,{children:"aws:cloudformation:stack-id"}),(0,r.jsx)(i.Th,{children:"aws:cloudformation:logical-id"}),(0,r.jsx)(i.Th,{children:"AWSApplicationMigrationServiceManaged"}),(0,r.jsx)(i.Th,{children:"aws:ec2launchtemplate:id"}),(0,r.jsx)(i.Th,{children:"mgn.amazonaws.com-job"}),(0,r.jsx)(i.Th,{children:"observacao"})]})}),(0,r.jsx)("tbody",{children:h.map((n=>(0,r.jsxs)(i.Tr,{children:[(0,r.jsx)(i.Td,{children:n.Account}),(0,r.jsx)(i.Td,{children:c(n.Tags,"Name")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"swoMonitor")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"Billing-MagProd")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"swoRiskClass")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"map-migrated")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"swoBackup")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"swoPatch")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"Shutdown")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"aws:cloudformation:stack-name")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"aws:cloudformation:stack-id")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"aws:cloudformation:logical-id")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"AWSApplicationMigrationServiceManaged")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"aws:ec2launchtemplate:id")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"mgn.amazonaws.com-job")}),(0,r.jsx)(i.Td,{children:c(n.Tags,"observacao")})]},n.InstanceID)))})]})}),t>1&&(0,r.jsxs)(i.Mn,{children:[(0,r.jsx)(i.L7,{onClick:()=>l((n=>Math.max(n-1,1))),disabled:1===d,children:"Anterior"}),(0,r.jsxs)("span",{children:["P\xe1gina ",d," de ",t]}),(0,r.jsx)(i.L7,{onClick:()=>l((n=>Math.min(n+1,t))),disabled:d===t,children:"Pr\xf3ximo"})]})]})}},506:(n,e,d)=>{d.d(e,{AC:()=>g,L7:()=>A,Mn:()=>w,Td:()=>u,Th:()=>m,Tr:()=>f,XI:()=>p,d8:()=>b,mc:()=>T});var s,i,r,c,l,a,o,h,t,x=d(528),j=d(464);const T=j.Ay.div(s||(s=(0,x.A)(["\n  width: 98%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=j.Ay.div(i||(i=(0,x.A)(["\n  width: 100%;\n  max-height: 500px;\n  overflow-y: auto;\n  overflow-x: auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #ffffff; \n"]))),p=j.Ay.table(r||(r=(0,x.A)(["\n  border-collapse: collapse;\n  width: 100%;\n"]))),m=j.Ay.th(c||(c=(0,x.A)(["\n  border: 1px solid #ddd;\n  font-size: 12px;\n  padding: 12px;\n  text-align: left;\n  background-color: #f2f2f2;\n  position: sticky;\n  top: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  z-index: 10; \n"]))),u=j.Ay.td(l||(l=(0,x.A)(["\n  font-size: 12px;\n  text-align: left;\n  padding: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; \n  border: 1px solid #ddd;\n"]))),b=j.Ay.thead(a||(a=(0,x.A)(["\n  color: black;\n"]))),f=j.Ay.tr(o||(o=(0,x.A)(["\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"]))),w=j.Ay.div(h||(h=(0,x.A)(["\n  margin-top: 10px;\n  display: flex;\n  justify-content: center; \n  align-items: center;\n  gap: 10px;\n"]))),A=j.Ay.button(t||(t=(0,x.A)(["\n  margin: 0 5px;\n  padding: 5px 10px;\n  border: none;\n  background-color:rgb(0, 0, 0);\n  color: white;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: 0.3s ease-in-out;\n\n  &:hover {\n    background-color:rgb(0, 0, 0);\n  }\n\n  &:disabled {\n    background-color: #bbb;\n    cursor: not-allowed;\n  }\n"])))}}]);
//# sourceMappingURL=694.342e073e.chunk.js.map