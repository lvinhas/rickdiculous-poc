import React from "react";
import {
  IonItem,
  IonList,
  IonThumbnail,
  IonLabel,
  IonImg,
  IonText,
  IonAvatar
} from "@ionic/react";
import { useQuery } from "urql";
import { Link } from "@reach/router";
import Button from "host/Button";

const CharactersQuery = `
  query {
    characters{
      results{
        id,
        name,
        image
      }
    }
  }
`;

const List = () => {
  const [result] = useQuery({
    query: CharactersQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div>
      <Button>Host Button</Button>
      <IonList>
      {data.characters.results.map((item) => {
        return (
          <Link to={`details/${item.id}`} key={item.id}>
            <IonItem >
              <IonAvatar slot="start">
                <IonImg src={item.image} />
              </IonAvatar>
              <IonLabel>
                <IonText>{item.name}</IonText>
              </IonLabel>
            </IonItem>
          </Link>
        );
      })}
    </IonList>
    </div>
  );
};

export default List;
