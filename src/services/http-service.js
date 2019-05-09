import 'whatwg-fetch';

class HttpService {
    getPlayers = () => {
        fetch('http://localhost:3001/player')
            .then(res => {
                console.log(res.json());
            })
    }
}

export default HttpService;