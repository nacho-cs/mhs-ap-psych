import { Heading, Flex, Link } from "@radix-ui/themes";

export function Header() {
  return (
    <Flex justify="between" width="100%">
      <Heading as="h2">MHS AP Psych Flashcards</Heading>
      <Link href="/" style={{ alignSelf: "center" }}>
        See flashcards
      </Link>
    </Flex>
  );
}
