import { Container, Img } from "./styles";

import logo from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Img src={logo} alt="Logo" />
    </Container>
  );
}
