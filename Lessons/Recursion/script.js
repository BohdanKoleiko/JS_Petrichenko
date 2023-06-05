function getPropOfObj(obj) {
   for (let key in obj) {
      if (typeof obj[key] !== 'object') {
         console.log(`Property ${key} has a value ${obj[key]}`);
      } else {
         getPropOfObj(obj[key]);
      }
   }
}