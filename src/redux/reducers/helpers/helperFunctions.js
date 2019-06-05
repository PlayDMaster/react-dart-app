export const computedAverage = (scoresMade, score, gameId) => {

    const values = Object.values(scoresMade)
    var sum = 0;
    var arrayLength = 0;
    for (let i = 0; i <= gameId; i++) {
        sum += values[i].reduce((a, c) => { return a + c }, 0);
        arrayLength += values[i].length;
    }
    if (!sum) {
        return score;
    } else {
        return (sum + score) / (arrayLength + 1);
    }
};

export const percentage = (success, attempts) => {
    let percentage = (success / attempts) * 100
    return percentage.toFixed(2);
};

export const counter = (score, low, high, value) => {
    if (score >= low && score <= high) {
        return value + 1
    } else {
        return value
    }
};