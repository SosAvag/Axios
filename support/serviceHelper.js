const axios = require('axios');

const getDataFromUrl = async ()=>{
   const getData =  await axios.get('https://jsonplaceholder.typicode.com/users') ;
    // console.log(getData)
   return getData;
};



module.exports = {
    getDataFromUrl,
}