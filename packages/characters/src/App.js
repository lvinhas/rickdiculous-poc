import React from "react";
import {
  IonPage,
  IonContent,
} from "@ionic/react";
import { createClient, Provider } from "urql";
import List from "./List";

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
});

const App = () => {
  return (
    <Provider value={client}>
      <IonPage>
        <IonContent>
          <List />
        </IonContent>
      </IonPage>
    </Provider>
  );
};

export default App;
