import axios from 'axios';

const KEY = '&client_id=wi1reg9DSyIP93cgaWj3YV3ifinz51z8rXQU1fdrKcE';

const URL = 'https://api.unsplash.com/search/photos?query=uzbekistan';

const fetchImages = async page => {

    let data = [];

  await axios.get(`${URL}${KEY}&per_page=8&page=${page}`)
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


const fetchImageStats = async() => {

    let urlCarusel = 'https://api.unsplash.com/search/photos?query=islamic';
    let res = [];
    await axios.get(`${urlCarusel}${KEY}&per_page=82`)
        .then(response => {
            debugger
            res = response.data.results;
            console.log(response.data.results)
        })
        .catch(errors => {
            throw new Error(errors);
        });


    debugger
    return res

};

export {fetchImages, fetchImageStats};
