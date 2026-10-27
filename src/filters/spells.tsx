import { useState } from 'react';

import Data from '../data/spells.json';

import Grid from '../components/Grid.tsx';
import Card from '../components/Card.tsx';

export default function Spells() {

  const [alpha, alphaUpdate] = useState("*");
  const [caster, casterUpdate] = useState("*");
  const [level, levelUpdate] = useState("1");

  return(
    <Grid desktop="3" tablet="3" mobile="1">
      {Data.sort((a, b) => a.name < b.name ? -1 : 1).map((spell, index) => {
                
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
  );

}