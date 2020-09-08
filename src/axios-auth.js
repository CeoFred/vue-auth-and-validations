import axios from "axios";

const instance = axios.create({
  baseUrl:'https://stock-trader-dbec7.firebaseio.com/users.json'
});


// instance.defaults.headers.common['SOMETHING'] = 'something';


export default instance;
