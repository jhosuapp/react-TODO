import { useState } from 'react';
const useLocalStorage = (itemName, itemValue)=>{

  let data;
  //Validate if exists data
  if(!localStorage.getItem(itemName)) {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
    data = itemValue;
  }else{
    data = JSON.parse(localStorage.getItem(itemName));
  }

  const [item, setItem] = useState(data);

  const saveItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [ item, saveItem ];
}

export { useLocalStorage }