import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { Router } from "@reach/router";
import { createClient, Provider } from "urql";
import List from "characters/List";
import Details from "details/Details";
import Button from "./Button";

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
});

const App = () => {
  return (
    <Provider value={client}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Wubba lubba dub dub</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <Button>Default Button</Button>
          <Router>
            <List path="/" />
            <Details path="details/:id" />
          </Router>
        </IonContent>
      </IonPage>
    </Provider>
  );
};

export default App;
