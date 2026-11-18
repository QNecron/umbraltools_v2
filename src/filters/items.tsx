import { useState } from 'react';

import DataAlpha from '../data/alphabet.json';
import DataAlchemical from '../data/item_alchemical.json';
import DataConsumable from '../data/item_consumables.json';

import ItemTypes from '../data/item_types.json';

import Dialog from '../components/Dialog.tsx';
import Grid from '../components/Grid.tsx';
import Card from '../components/Card.tsx';
import Tabs from '../components/Tabs.tsx';

const DataItems = DataConsumable.concat(DataAlchemical);

export default function Items() {

  const [alpha, alphaUpdate] = useState("*");
  const [type, typeUpdate] = useState("consumable");

  const Filters = [
    {id: 'type', title: 'Type', data: ItemTypes, state: type, update: typeUpdate, condensed: false},
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
      {DataItems.sort((a, b) => a.name < b.name ? -1 : 1).map((item, index) => {
                
        let alphaFilter = item.name.charAt(0);
        let typeFilter = item.type;

        // alphabetical filter
        if(alphaFilter !== alpha && alpha !== "*") return null;
                
        // type filter
        if(typeFilter !== type && type !== "*") return null;
                
        return(
          <Card
            key={index}
            card="items"
            title={item.name}
            badge={item.duration !== "" ? item.duration : ""}
            copy_1={item.description !== "" ? item.description : ""}
            copy_4={item.benefit}
            copy_5={item.curse ? item.curse : ""}
          />
        );

      })}
    </Grid>
    </>
  );

}