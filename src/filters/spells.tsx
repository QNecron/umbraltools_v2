import { useState } from 'react';

import DataAlpha from '../data/alphabet.json';
import DataCasters from '../data/spell_casters.json';
import DataTiers from '../data/spell_tiers.json';
import DataSpells from '../data/spells.json';
import DataSummons from '../data/bestiary_summons.json';

import Dialog from '../components/Dialog.tsx';
import Grid from '../components/Grid.tsx';
import Accordion from '../components/Accordion.tsx';
import Card from '../components/Card.tsx';
import Tabs from '../components/Tabs.tsx';
import Icons from "../components/Icons.tsx";

export default function Spells() {

  const [alpha, alphaUpdate] = useState("*");
  const [caster, casterUpdate] = useState("*");
  const [level, levelUpdate] = useState("1");

  const Filters = [
    {id: 'class', title: 'Class', data: DataCasters, state: caster, update: casterUpdate, condensed: false},
    {id: 'tier', title: 'Tier', data: DataTiers, state: level, update: levelUpdate, condensed: true},
    {id: 'name', title: 'Name', data: DataAlpha, state: alpha, update: alphaUpdate, condensed: true},
  ];

  return(
    <>
    <nav className="filters" aria-label="Spell filters" role="navigation">
      <Dialog type="secondary" triggerCopy="Summons" triggerButton="primary">
        {DataSummons.map((entry) => (
          <Accordion accordion="summons" title={entry.name} button="primary full">
            <p><strong>AC:</strong> {entry.ac}</p>
            <p><strong>HP:</strong> {entry.hp}</p>
            <p><strong>ATK:</strong> {entry.atk}</p>
            <p><strong>MV:</strong> {entry.mv}</p>
            <ul>
              <li><strong>S:</strong> {entry.attributes.str}</li>
              <li><strong>D:</strong> {entry.attributes.dex}</li>
              <li><strong>C:</strong> {entry.attributes.con}</li>
              <li><strong>I:</strong> {entry.attributes.int}</li>
              <li><strong>W:</strong> {entry.attributes.wis}</li>
              <li><strong>Ch:</strong> {entry.attributes.chr}</li>
            </ul>
            <p><strong>{entry.special.name}.</strong> {entry.special.benefit}</p>
          </Accordion>
        ))}
      </Dialog>
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
      {DataSpells.sort((a, b) => a.name < b.name ? -1 : 1).map((spell, index) => {
                
        let alphaFilter = spell.name.charAt(0);
        let casterFilter = spell.class;
        let levelFilter = spell.tier;
                
        // alphabetical filter
        if(alphaFilter !== alpha && alpha !== "*") return null;
                
        // caster filter
        if(casterFilter !== caster && caster !== "*") return null;
                
        // level filter
        if(levelFilter !== level && level !== "*") return null;

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
            copy_4={spell.description}
          >
            {spell.action &&
              <div className="card__actions">
                <strong>Action:</strong> {spell.action}
              </div>
            }
            {(spell.element_1 || spell.element_2) &&
              <div className="card__icons">
                {spell.element_1 ? 
                  <div className="btn" data-btn="primary icon">
                    <Icons icon={spell.element_1} />
                  </div>
                : null}
                {spell.element_2 ? 
                  <div className="btn" data-btn="primary icon">
                    <Icons icon={spell.element_2} />
                  </div>
                : null}
              </div>
            }
          </Card>
        );

      })}
    </Grid>
    </>
  );

}