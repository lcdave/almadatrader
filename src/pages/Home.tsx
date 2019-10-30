import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonModal, IonButton, IonList, IonItem, IonLabel, IonContent, IonIcon, IonFab, IonFabButton,
IonGrid, IonRow, IonCol} from '@ionic/react';
import React, { useState } from 'react';
import { add } from 'ionicons/icons';


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Einkaufsliste</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem class="list_header">
        <IonGrid>
          <IonRow>
            <IonCol>Spieler</IonCol>
            <IonCol>Anzahl</IonCol>
            <IonCol>Preis</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
      <IonGrid>
          <IonRow>
            <IonCol>Sancho</IonCol>
            <IonCol>1x</IonCol>
            <IonCol>4'900</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
      <IonGrid>
          <IonRow>
            <IonCol>Coman</IonCol>
            <IonCol>5x</IonCol>
            <IonCol>6'900</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
      <IonGrid>
          <IonRow>
            <IonCol>Havertz</IonCol>
            <IonCol>5x</IonCol>
            <IonCol>5'900</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
      <IonGrid>
          <IonRow>
            <IonCol>Rodri</IonCol>
            <IonCol>10x</IonCol>
            <IonCol>6'900</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
      <IonGrid>
          <IonRow>
            <IonCol>Felipe Anderson</IonCol>
            <IonCol>5x</IonCol>
            <IonCol>14'900</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
      <IonGrid>
          <IonRow>
            <IonCol>Gnabry</IonCol>
            <IonCol>10x</IonCol>
            <IonCol>8'900</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem>
      <IonGrid>
          <IonRow>
            <IonCol>Lucas Moura</IonCol>
            <IonCol>10x</IonCol>
            <IonCol>30'000</IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonModal isOpen={showModal}>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton expand="block" mode="md">
        <IonIcon icon={add} onClick={() => setShowModal(true)} />
      </IonButton>
      </IonList>
  </IonContent>
    </IonPage>
  );
};

export default Home;
