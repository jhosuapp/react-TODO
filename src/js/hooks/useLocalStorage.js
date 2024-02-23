import { useState, useEffect } from 'react';
const useLocalStorage = (itemName, itemValue)=>{
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(itemValue);


  useEffect(()=>{
    let data;
    //Validate if exists data
    if(!localStorage.getItem(itemName)) {
      localStorage.setItem(itemName, JSON.stringify(itemValue));
      data = itemValue;
    }else{
      data = JSON.parse(localStorage.getItem(itemName));
    }
  });


  const saveItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return { item, saveItem, loading, error };
}

export { useLocalStorage }