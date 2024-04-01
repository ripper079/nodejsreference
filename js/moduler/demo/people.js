//console.log('First line in people.js');
//console.log(path.basename(__filename));       //This is more a dynamic solution
//normal Array
const people = ['Pelle' , 'Oscar', 'Pia', 'Jen'];
const ages = [23 , 12, 78, 56];
//console.log(people);

//In order to make other file have access to the data defined here, you need to export the data with keyword export, everything after = is accessible from the importing file
//Otherwise is returns an empty object

//Here we export an object
module.exports = {
    allNames : people,
    fastCar : "Super lambo"
};


/*
module.exports = {
    people : people
};
//Can be replaced with (shortcode)
module.exports = {
    people 
};


*/