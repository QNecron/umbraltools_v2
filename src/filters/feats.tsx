import { useState } from 'react';

import DataAlpha from '../data/alphabet.json';
import DataFeats from '../data/feats.json';

import Dialog from '../components/Dialog.tsx';
import Grid from '../components/Grid.tsx';
import Card from '../components/Card.tsx';
import Tabs from '../components/Tabs.tsx';

export default function Feats() {

  const [alpha, alphaUpdate] = useState("*");
  const [type, typeUpdate] = useState("general");

  const FeatTypes = ["general", "combat", "magical", "*"];

  const Filters = [
    {id: 'type', title: 'Type', data: FeatTypes, state: type, update: typeUpdate, condensed: false},
    {id: 'name', title: 'Name', data: DataAlpha, state: alpha, update: alphaUpdate, condensed: true},
  ];

  return(
    <>
    <nav className="filters" aria-label="Spell filters" role="navigation">
      <Dialog type="secondary" triggerCopy="Filters" triggerButton="primary">
        {Filters.map(({ id, title, data, state, update, condensed}) => (
          <Tabs
            key={id}
            classes={condensed ? "condensed" : undefined}
            data={data}
            state={state}
            update={update}
          >
            <h3 className="tabs__title" data-heading="5">{title}</h3>
          </Tabs>
        ))}
      </Dialog>
    </nav>
    <Grid desktop="3" tablet="3" mobile="1">
      {DataFeats.sort((a, b) => a.name < b.name ? -1 : 1).map((feat, index) => {
                
        let alphaFilter = feat.name.charAt(0);
        let typeFilter = feat.type;
                
        // alphabetical filter
        if(alphaFilter !== alpha && alpha !== "*") return null;
                
        // type filter
        if(typeFilter !== type && type !== "*") return null;

        let featAction = <> <strong>Action:</strong> {feat.action} </>;
                
        return(
          <Card
            key={index}
            card="spells"
            title={feat.name}
            badge={feat.type}
            copy_1={featAction}
            copy_5={feat.description}
          />
        );

      })}
    </Grid>
    </>
  );

}