import { useState, useEffect } from 'react';
// eslint-disable-next-line 
const useLocalStorage = (itemName, itemValue)=>{
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(itemValue);

  useEffect(()=>{
    setTimeout(()=>{
      try {
        let data;
        //Validate if exists data
        if(!localStorage.getItem(itemName)) {
          localStorage.setItem(itemName, JSON.stringify(itemValue));
          data = itemValue;
        }else{
          data = JSON.parse(localStorage.getItem(itemName));
          setItem(data);
        }
        console.log('se ejecuta');
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    },2000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const saveItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return { item, saveItem, loading, error };
}

export { useLocalStorage }