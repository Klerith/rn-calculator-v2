import { useState } from 'react';


export const useCalculator = () => {

  const [ number, setNumber ] = useState('0')


  const buildNumber = ( numberString: string ) => {

    if ( number.includes('.') && numberString === '.' ) return;

    if ( number.startsWith('0') || number.startsWith('-0') ) {

      // Punto decimal
      if ( numberString === '.' ) {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if ( numberString === '0' && number.includes('.') ) {
        return setNumber( number + numberString );
      }

      // Evaluar si es diferente de cero, no hay punto, y es el primer numero
      if ( numberString !== '0' && !number.includes('.') ) {
        return setNumber( numberString )
      }

      // Evitar 000000.00
      if ( numberString === '0' && !number.includes('.') ) {
        return;
      }

      return setNumber( number + numberString );
    }


    setNumber( number + numberString );

  }






  return {
    // Properties
    number,

    // Methods
    buildNumber,
  }
}

