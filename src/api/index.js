import axios from 'axios';

const KEY = 'wi1reg9DSyIP93cgaWj3YV3ifinz51z8rXQU1fdrKcE';

const URL = 'https://api.unsplash.com/search/photos?query=uzbekistan';

const fetchImages = async page => {

    let data = [];

  await axios.get(`${URL}&client_id=${KEY}&per_page=3&page=${page}`)
        .then(response => {
            // debugger
           data = response.data.results;
            console.log(response.data.results)
        })
        .catch(errors => {
            throw new Error(errors);
        });


    // debugger
    return data

};

export {fetchImages};
