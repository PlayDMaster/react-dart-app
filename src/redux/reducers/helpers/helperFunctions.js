export const computedAverage = (scoresMade, score) => {
    let sum = scoresMade.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    if (!sum) {
        return parseInt(score);
    } else {
        return ((sum + parseInt(score)) / (scoresMade.length + 1));
    }
};

export const percentage = (attempts, success) => {
    percentage = success / attempts * 100
    return percentage;
};

export const counter = (score, low, high, value) => {
    if (score >= low && score <= high) {
        return value + 1
    } else {
        return value
    }
};