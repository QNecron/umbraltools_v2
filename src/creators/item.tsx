import { useState } from 'react';

import Input from '../components/Input.tsx';
import Select from '../components/Select.tsx';

export default function ItemCreator() {

  const [name, nameUpdate] = useState("");
  const [prefix, prefixUpdate] = useState("");

  interface ItemProps {
    name: string;
    damage: string;
    type: string;
    bonus: number;
  }

  const ItemProperties: ItemProps[] = [
    {
      "name": "",
      "damage": "",
      "type": "",
      "bonus": 0
    },
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

    if(damageProp !== "") {
      damage = "+ " + damageProp + " (" + typeProp + ")";
    }

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
      id="property"
      value={prefix}
      label="Property"
      change={(event: React.ChangeEvent<HTMLSelectElement>) =>
        prefixUpdate(event.target.value)
      }      
    >
      {ItemProperties.map((props, index) => {
        return(
          <option key={index} value={props.name}>{props.name}</option>
        );
      })}
    </Select>
    <ul>
      <li>Name: {name}</li>
      <li>+1 {prefix ? prefix + " ": ""} Longsword</li>
      <li>1d8 + 1 {ItemDamageProperty(prefix, ItemProperties)}</li>
      <li><em>Assuming the weapon was a +1 Longsword.</em></li>
    </ul>
    </>
  );
}