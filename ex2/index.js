function removeProperty(obj, property) {
    const newObj = { ...obj };
    delete newObj[property];
   
    return newObj;
   }
   
   const obj = { a: 1, b: 2 };
   const property = "b";
   
   const result = removeProperty(obj, property);
   console.log(result); 