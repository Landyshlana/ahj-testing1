/*export default function cardNumber(value){
    const arr = [...value].reverse().map((o)=>Number(o));
   
      let sum=0;
      for(let i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
          let digit = arr[i]*2;  
          if(digit > 9) digit -= 9;
          sum += digit;
        }
        else{
          sum+=arr[i];
        }
      }
      return sum % 10===0;
    }*/
      export default function cardNumber(value) {
        const num = `${value}`;
        let nCheck = 0;
        let bEven = false;
        for (let n = num.length - 1; n >= 0; n -= 1) {
          let nDigit = parseInt(num.charAt(n), 10);
          /* eslint-disable */
              if (bEven && (nDigit *= 2) > 9) {
                  nDigit -= 9;
              }
              nCheck += nDigit;
              bEven = !bEven;
          }
      
          return nCheck % 10 === 0;
      }
    