import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonModal, IonButton, IonList, IonItem, IonLabel, IonContent, IonIcon, IonFab, IonFabButton} from '@ionic/react';
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
      <IonItem>
        <IonLabel>Vidal</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Sancho</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Coman</IonLabel>
      </IonItem>
      <IonModal isOpen={showModal}>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>
        <IonIcon icon={add} />
      </IonButton>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
      </IonList>
  </IonContent>
    </IonPage>
  );
};

export default Home;
