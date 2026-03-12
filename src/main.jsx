import { render } from "preact/compat";
import "./index.css";
import { HomePage } from "./HomePage";
import { FlashcardPage } from "./FlashcardPage";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "react-quizlet-flashcard/dist/index.css";
import { Switch, Route } from "wouter-preact";

render(
  <Theme accentColor="ruby" panelBackground="solid" radius="none">
    <Switch>
      <Route path="/:slug">
        {params => <FlashcardPage slug={params.slug} />}
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
      <Route>
        <HomePage />
      </Route>
    </Switch>
  </Theme>,
  document.getElementById("app")
);
