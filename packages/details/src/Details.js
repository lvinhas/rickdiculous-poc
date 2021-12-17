import React from "react";
import { IonImg, IonText, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useQuery } from "urql";

const CharactersQuery = `
  query($id: ID!) {
      character(id: $id) {
        name,
        image 
      }
    }    
`;

const Details = ({ id }) => {
  const [result] = useQuery({
    query: CharactersQuery,
    variables: { id },
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <IonGrid>
      <IonRow>
        <IonCol className="ion-text-center">
          <IonImg src={data.character.image} />
          <IonText>{data.character.name}</IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

Details.defaultProps = {
  id: 1,
};
export default Details;
