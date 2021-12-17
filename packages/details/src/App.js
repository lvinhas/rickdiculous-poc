import React from "react";
import {
  IonPage,
  IonContent,
} from "@ionic/react";
import { createClient, Provider } from "urql";
import Details from "./Details";

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
});

const App = () => {
  return (
    <Provider value={client}>
      <IonPage>
        <IonContent>
            <Details />
        </IonContent>
      </IonPage>
    </Provider>
  );
};

export default App;
