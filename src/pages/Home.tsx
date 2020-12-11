import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';


import { Mnemonic, IdentityType } from 'tdex-sdk';

const identity = new Mnemonic({
  chain: "regtest", // or regtest
  type: IdentityType.Mnemonic,
  value: {
    mnemonic:
      "deny pyramid explain dragon crane oxygen nature flee version cat fatal kingdom tray suspect broccoli ship rival hard add cruel defy library picture unaware",
  }
});


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{identity.getNextAddress().confidentialAddress}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">title</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
