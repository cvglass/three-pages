const defineSentiment = (score) => {
  if(score.positive.score > score.negative.score){
    return 'positive'
  } else {
    return 'negative'
  }
}


const topWords = (score, type) => {
  if (type === 'positive') {
    return score.positive.words
  } else {
    return score.negative.words
  }
}

module.exports = {
  defineSentiment: defineSentiment,
  topWords: topWords
}
