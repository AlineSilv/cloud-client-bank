import {
    Container,
    ContentAsideForm,
    BoxLogo,
    ImgLogo,
    BoxForm,
    BoxInstruct,
    TextWelcome,
    LabelForm,
    BoxInput,
    InputForm,
    InputFormPass,
    BoxLabel,
    BoxButton,
    ButtonForm,
    BoxAccount,
    TextAccount,
    TextAccountBold,
    ContentIllustration,
    ImgIllustration
} from './RegisterScreenStyles'
function Register() {
  return (
    <>
    <Container>
    <ContentAsideForm>
      <BoxLogo>
        <ImgLogo style={{ width: 200, height: 200 }} src={`${process.env.PUBLIC_URL}/assets/TelaLogin/logo-cloud-client.png `} alt="Logo" />
      </BoxLogo>
      <BoxForm>
          <BoxInstruct>
            <TextWelcome>Preencha seus dados:</TextWelcome>
          </BoxInstruct>
          <form>
          <LabelForm>Nome:</LabelForm>
            <BoxInput>
              <InputForm
                type="text"
                placeholder="User" />
            </BoxInput>
              <BoxLabel>
              <LabelForm>E-mail:</LabelForm>
            </BoxLabel>
            <BoxInput>
              <InputForm
                  type="text"
                  placeholder="user@gmail.com" />
              </BoxInput>
              <BoxLabel>
              <LabelForm>Senha:</LabelForm>
            </BoxLabel>
            <BoxInput>
              <InputFormPass
                type="password"
                placeholder="********" />
            </BoxInput>
            <BoxLabel>
              <LabelForm>Confirmar senha:</LabelForm>
            </BoxLabel>
            <BoxInput>
              <InputFormPass
                type="password"
                placeholder="********" />
            </BoxInput>
            <BoxButton>
              <ButtonForm type="submit">Começar a usar</ButtonForm>
            </BoxButton>
            <BoxAccount>
              <p>
                <TextAccount>Já possui uma conta? </TextAccount>
                <TextAccountBold as="a" href="/">Logar</TextAccountBold>
              </p>
            </BoxAccount>
          </form>
      </BoxForm>
      </ContentAsideForm>
      <ContentIllustration>
        <ImgIllustration alt="Ilustração Artística" src={`${process.env.PUBLIC_URL}/assets/TelaLogin/cloudapp-login-bckg-blck.png`}/>
        </ContentIllustration>
    </Container>
    </>
 
  );
}

export default Register;