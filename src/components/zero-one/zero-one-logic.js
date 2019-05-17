export default class Logic {

    constructor(gameType) {
        this.gameType = gameType
    }

    subtractScore(scoreEntered) {
        let scoreLeft = gameScore - scoreEntered;
        return scoreLeft;
    }

    playGame(gameScore) {
        while (gameScore > 0) {

        }
    }
}