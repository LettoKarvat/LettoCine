import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const addItemToCart = async (monthsToRenew, auth, plano) => {
  let productId;

  if (plano === 1) {
    productId = "3EG0nJtdT7";
    monthsToRenew = 1;
  } else if (plano === 2) {
    productId = "axbtDsVHQc";
    monthsToRenew = 1;
  } else if (plano === 3) {
    productId = "a0HmwQzhwP";
    monthsToRenew = 1;
  } else {
    // Defina um valor padrão ou lide com outros casos, se necessário
    throw new Error(`Plano inválido: ${plano}`);
  }

  const response = await fetch(import.meta.env.VITE_CART, {
    method: "POST",
    headers: {
      'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
      'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY,
      'X-Parse-Session-Token': auth.user.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      productId: productId,
      quantity: monthsToRenew
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.json();
  return data.result.id;
};


const performCheckout = async (monthsToRenew, auth, userRenew, plano, coupon) => {
  let tudo;

  if (plano === 1) {
    tudo = 35;
  } else if (plano === 2) {
    tudo = 85;
  } else if (plano === 3) {
    tudo = 150;
  } else {
    // Lide com outros valores de plano ou lance um erro, se necessário
    throw new Error(`Plano inválido: ${plano}`);
  }

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
      coupon: coupon,
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
  const [qrData, setQrData] = useState(null)


  const handleRenew = async (userRenew, plano, coupon) => {
    try {
      const itemId = await addItemToCart(monthsToRenew, auth, plano);

      if (!coupon) {
        coupon = "without";
      }
      const result = await performCheckout(monthsToRenew, auth, userRenew, plano, coupon);

      setQrData(result)

      return result


    } catch (error) {
      console.error("Erro ao renovar usuário:");
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
