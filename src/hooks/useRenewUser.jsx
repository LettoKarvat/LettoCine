import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const addItemToCart = async (monthsToRenew, auth) => {
  const response = await fetch(import.meta.env.VITE_CART, {
    method: "POST",
    headers: {
      'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
      'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY,
      'X-Parse-Session-Token': auth.user.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      productId: "3EG0nJtdT7",
      quantity: monthsToRenew
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.json();
  return data.result.id;
};

const performCheckout = async (tudo, auth, userRenew) => {
  const response = await fetch(import.meta.env.VITE_CHECKOUT, {
    method: "POST",
    headers: {
      'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
      'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY,
      'X-Parse-Session-Token': auth.user.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      total: tudo,
      name: userRenew
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP erro ao gerar pix ${response.status}`);
  }

  const dataQr = await response.json();
  return dataQr.result;
};

export const useRenewUser = () => {
  const { auth } = useAuth();
  const [monthsToRenew, setMonthsToRenew] = useState(1);
  const [qrData, setQrData] =useState(null)


  const handleRenew = async (userRenew) => {
    try {
      const itemId = await addItemToCart(monthsToRenew, auth);

      const tudo = monthsToRenew * 30;
      
      const result = await performCheckout(tudo, auth, userRenew);
      
      setQrData(result)

      

    } catch (error) {
      console.error("Erro ao renovar usuário:", error);
    }
  };

  return {
    monthsToRenew,
    setMonthsToRenew,
    setQrData,
    qrData,
    handleRenew
  };
};
