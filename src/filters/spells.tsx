import { useState } from 'react';

import DataAlpha from '../data/alphabet.json';
import DataCasters from '../data/spell_casters.json';
import DataTiers from '../data/spell_tiers.json';
import DataSpells from '../data/spells.json';

import Dialog from '../components/Dialog.tsx';
import Grid from '../components/Grid.tsx';
import Card from '../components/Card.tsx';
import Tabs from '../components/Tabs.tsx';

export default function Spells() {

  const [alpha, alphaUpdate] = useState("*");
  const [caster, casterUpdate] = useState("*");
  const [level, levelUpdate] = useState("1");

  return(
    <>
    <nav className="filters" aria-label="Item filters" role="navigation">
      <Dialog type="secondary" triggerCopy="Filters" triggerButton="primary">
        <Tabs 
          data={DataCasters} 
          state={caster} 
          update={casterUpdate}
        >
          <h3 className="tabs__title" data-heading="5">Class</h3>
        </Tabs>
        <Tabs 
          classes="condensed" 
          data={DataTiers} 
          state={level} 
          update={levelUpdate}
        >
          <h3 className="tabs__title" data-heading="5">Tier</h3>
        </Tabs>
        <Tabs 
          classes="condensed" 
          data={DataAlpha} 
          state={alpha} 
          update={alphaUpdate}
        >
          <h3 className="tabs__title" data-heading="5">Name</h3>
        </Tabs>
      </Dialog>
    </nav>
    <Grid desktop="3" tablet="3" mobile="1">
      {DataSpells.sort((a, b) => a.name < b.name ? -1 : 1).map((spell, index) => {
                
        let alphaFilter = spell.name.charAt(0);
        let casterFilter = spell.class;
        let levelFilter = spell.tier;
                
        // alphabetical filter
        if (alphaFilter !== alpha && alpha !== "*") return null;
                
        // caster filter
        if (casterFilter !== caster && caster !== "*") return null;
                
        // level filter
        if (levelFilter !== level && level !== "*") return null;

        let spellClass = <> <strong>Class:</strong> {spell.class} </>;
        let spellDuration = <> <strong>Duration:</strong> {spell.duration} </>;
        let spellRange = <> <strong>Range:</strong> {spell.range} </>;
                
        return(
          <Card
            key={index}
            card="spells"
            title={spell.name}
            badge={spell.tier}
            copy_1={spellClass}
            copy_2={spellDuration}
            copy_3={spellRange}
            copy_5={spell.description}
          />
        );

      })}
    </Grid>
    </>
  );

}