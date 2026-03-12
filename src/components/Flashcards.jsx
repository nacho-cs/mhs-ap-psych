import { FlashcardArray, useFlashcardArray } from "react-quizlet-flashcard";
import { baseCss, flashcardContent } from "../utils";
import { Text, Link } from "@radix-ui/themes";

export function Flashcards({ slug }) {
  const content = flashcardContent[slug];
  if (!content) {
    return (
      <>
        <Text>404 not found</Text>
        <Link href="/">Return Home</Link>
      </>
    );
  }
  const flashcardArr = content.split("----").map((flashcard, i) => {
    const question = flashcard.split("--")[0];
    const answer = flashcard.split("--")[1];
    return {
      id: i,
      front: { html: <Text>{question?.trim()}</Text>, style: baseCss },
      back: { html: <Text>{answer?.trim()}</Text>, style: baseCss },
    };
  });

  const flipArrayHook = useFlashcardArray({
    cycle: true,
    deckLength: flashcardArr.length,
    showProgressBar: true,
  });

  return <FlashcardArray deck={flashcardArr} flipArrayHook={flipArrayHook} />;
}
