import { Header } from "./components/Header";
import { Container, Flex } from "@radix-ui/themes";
import { Flashcards } from "./components/Flashcards";

export function FlashcardPage({ slug }) {
  return (
    <Container>
      <Flex direction="column" gapY="5" align="center">
        <Header />
        <Flashcards slug={slug} />
      </Flex>
    </Container>
  );
}
