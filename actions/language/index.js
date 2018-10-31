
import Axios from 'axios';

export function LANGUAGE_INIT(){
  return {
    type: 'LANGUAGE:INIT:',
    payload: new Promise((resolve, reject) => {
      Axios.get('/api/language/init')
        .then(response => {
          setTimeout(() => {
            resolve(response.data);
          }, 5000);
        })
        .catch(error => {
          reject(error);
        })
    })
  }
}

export function LANGUAGE_SET(code){
  return {
    type: 'LANGUAGE:SET:',
    payload: code
  }
}
