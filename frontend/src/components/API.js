import axios from 'axios';

export default axios.create({
    baseURL: "https://django-gatsby-test2.vercel.app/backend/filmovi",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})
