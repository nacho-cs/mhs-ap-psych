import { LinksPage } from "./components/LinksPage";
import { Header } from "./components/Header";
import { Container, Flex } from "@radix-ui/themes";

export function HomePage() {
  return (
    <Container>
      <Flex direction="column" gapY="5" align="center">
        <Header />
        <LinksPage />
      </Flex>
    </Container>
  );
}
