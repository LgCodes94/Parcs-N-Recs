
require('dotenv').config();
const getString = 'multimedia/galleries/';
const str2 = 'parks';
let url = `https://developer.nps.gov/api/v1/${str2}?limit=1&api_key=${process.env.API_KEY}`;
const test = async (event) => {
    try {
        const response = await fetch(url);
        const res = await response.json();

        // front end search || one cate for User State code
        // res.data[0].activities     [] array of activities for the park

        // console.log(res.data[0].images);
        // res.data[0].url     url of park website
        // res.data[0].fullName    name of park
        // res.data[0].description    desc of park
        
        // res.data[0].contacts      [] array of object....??
        // res.data[0].addresses     [] array for the address[0] is the physical address 
        // res.data[0].operatingHours        [] array for the operation hours
        // res.data[0].images           [] array for image objects
        // ...images[0]     
        //          .title
        //          .altText
        //          .caption        description of image
        //          .url

    } catch (error) {
        console.log(error);
        console.log('this isnt it');
    }

}

test();

module.exports = test;