import { Flashcard } from "react-quizlet-flashcard";
import { Flex, Link, Text } from "@radix-ui/themes";
import { flashcardList } from "../utils";

export function LinksPage() {
  return (
    <ol>
      {flashcardList.map(flashcard => (
        <li key={flashcard.slug} size="3">
          <Link href={`/${flashcard.slug}`}>{flashcard.name}</Link>
        </li>
      ))}
    </ol>
  );
}
