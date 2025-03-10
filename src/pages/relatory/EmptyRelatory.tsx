import React from 'react';
import {
  ContentScreen,
  ContainerIllustration,
  ImgEmpty,
  BoxDescription,
  Description
} from './EmptyRelatoryStyles'

function EmptyRelatory() {

  return (
      <ContentScreen>
        <ContainerIllustration>
          <ImgEmpty src={`${process.env.PUBLIC_URL}/assets/TelaErro/empty-space-illustration.png`} alt="Illustration background" />
        </ContainerIllustration>
        <BoxDescription>
          <Description>- Hm ... Não vejo Nada por aqui!</Description>
        </BoxDescription>
      </ContentScreen>
  );
}

export default EmptyRelatory;