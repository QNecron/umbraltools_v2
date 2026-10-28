import { useState } from 'react';

import Input from '../components/Input.tsx';
import Select from '../components/Select.tsx';

export default function ItemCreator() {

  const [name, nameUpdate] = useState("");
  const [weapon, weaponUpdate] = useState("None");
  const [bonus, bonusUpdate] = useState("0");
  const [prefix, prefixUpdate] = useState("");

  interface ItemWpns {
    name: string;
    damage: string;
    type: string;
    range: string;
    properties: string;
  }

  const ItemWeapons: ItemWpns[] = [
    {
      name: "Longsword",
      damage: "d8",
      type: "M",
      range: "C",
      properties: "-"
    },
    {
      name: "Shortsword",
      damage: "d6",
      type: "M",
      range: "C",
      properties: "-"
    }
  ];

  interface ItemProps {
    name: string;
    damage: string;
    type: string;
    bonus: number;
  }

  const ItemProperties: ItemProps[] = [
    {
      "name": "Corrosive",
      "damage": "d4",
      "type": "acid",
      "bonus": 1
    },
    {
      "name": "Flaming",
      "damage": "d4",
      "type": "fire",
      "bonus": 1
    },
    {
      "name": "Frost",
      "damage": "d4",
      "type": "cold",
      "bonus": 1
    },
    {
      "name": "Shock",
      "damage": "d4",
      "type": "electrical",
      "bonus": 1      
    }
  ];

  function ItemDamageProperty(
    property: string, 
    data: ItemProps[]
  ): string {
    let damage = "";
    const itemProp = data.find((prop) => prop.name === property);
    const damageProp = itemProp ? itemProp.damage : "";
    const typeProp = itemProp ? itemProp.type: "";
    if(damageProp !== "") damage = "+ " + damageProp + " (" + typeProp + ")";
    return damage;
  }

  function WeaponDamage(name: string, data: ItemWpns[]): string {
    let damage = "";
    const itemProp = data.find((prop) => prop.name === name);
    const damageProp = itemProp ? itemProp.damage : "";
    if(damageProp !== "") damage = damageProp;
    return damage;
  }

  return(
    <>
    <Input 
      id="name" 
      type="text" 
      value={name} 
      label="Name"
      change={(event: React.ChangeEvent<HTMLInputElement>) =>
        nameUpdate(event.target.value)
      }
    />
    <Select 
      id="weapon"
      value={weapon}
      label="Weapon"
      change={(event: React.ChangeEvent<HTMLSelectElement>) =>
        weaponUpdate(event.target.value)
      }      
    >
      <option></option>
      {ItemWeapons.map((props, index) => {
        return(
          <option key={index} value={props.name}>{props.name}</option>
        );
      })}
    </Select>
    <Input 
      id="bonus" 
      type="number" 
      value={bonus} 
      label="Bonus"
      change={(event: React.ChangeEvent<HTMLInputElement>) =>
        bonusUpdate(event.target.value)
      }
      min={0}
      max={3}
    />
    <Select 
      id="property"
      value={prefix}
      label="Property"
      change={(event: React.ChangeEvent<HTMLSelectElement>) =>
        prefixUpdate(event.target.value)
      }      
    >
      <option></option>
      {ItemProperties.map((props, index) => {
        return(
          <option key={index} value={props.name}>{props.name}</option>
        );
      })}
    </Select>
    <ul>
      <li>Name: {name}</li>
      <li>Weapon: +{bonus} {prefix ? prefix + " ": ""} {weapon}</li>
      <li>Damage: {bonus} + {WeaponDamage(weapon, ItemWeapons)} {ItemDamageProperty(prefix, ItemProperties)}</li>
    </ul>
    </>
  );
}