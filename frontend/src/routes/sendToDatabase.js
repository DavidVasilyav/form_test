import axios from 'axios';
const FORM_DB_GET_REQUEST = 'http://localhost:4545/form'


export function sendDataToDb(titleFromFrom, urlFromFrom) {
    console.log(titleFromFrom);
    axios
    .post(
        FORM_DB_GET_REQUEST,
        [
            {
                title: titleFromFrom,
                imgUrl: urlFromFrom
            },
        ],
        {
            headers: {
                'content-type': 'application/json',
            },
        }
    )
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
}