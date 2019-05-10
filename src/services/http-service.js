import 'whatwg-fetch';

class HttpService {

    getPlayers = () => {
        let promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3001/player')
                .then(res => {
                    resolve(res.json());
                });
        });
        return promise;
    }

    getScores = () => {
        let promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3001/scores')
                .then(res => {
                    resolve(res.json());
                });
        });
        return promise;
    }

    getGamesPlayed = () => {
        let promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3001/gamesPlayed')
                .then(res => {
                    resolve(res.json());
                });
        });
        return promise;
    }
}

export default HttpService;