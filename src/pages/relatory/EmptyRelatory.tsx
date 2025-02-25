import React from 'react';
import {
  ContentScreen,
  ContainerIllustration,
  ImgEmpty,
  BoxDescription,
  Description
} from './EmptyRelatoryStyles.ts'

function Home() {

  return (
      <ContentScreen>
        <ContainerIllustration>
          <ImgEmpty src="./assets/TelaErro/empty-space-illustration.png" alt="Illustration background" />
        </ContainerIllustration>
        <BoxDescription>
          <Description>- Hm ... Não vejo Nada por aqui!</Description>
        </BoxDescription>
      </ContentScreen>
  );
}

export default Home;