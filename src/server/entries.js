const express = require('express');
const router = new express.Router();
const analyze = require('Sentimental').analyze;
const defineSentiment = require('../utils').defineSentiment;
const topWords = require('../utils').topWords;

const Entry = require('../db/models/').Entry

router.get('/', (req, res, next) => {
  Entry.findAll({
    order: [
      ['id', 'DESC']
    ]
  })
  .then(entries => {
    res.send(entries)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Entry.create(req.body)
  .then(entry => {
    res.redirect('/entry/' + entry.id)
  })
  .catch(next)
})

router.get('/:id/delete', (req, res, next) => {
  Entry.findById(req.params.id)
  .then(entry => {
    return entry.destroy()
  })
  .then(() => {
    res.status(200)
  })
  .catch(next)
});

router.get('/:id', (req, res, next) => {
  Entry.findById(req.params.id)
  .then(entry => {
    const sentimentScore = analyze(entry.text);
    const sentiment = defineSentiment(sentimentScore);
    entry.sentiment = sentiment;
    entry.topWords = topWords(sentimentScore, sentiment).join(', ');
    res.send(entry)
  })
  .catch(next)
})

router.post('/:id/edit', (req, res, next) => {
  const updatedText = req.body.text;
  Entry.findById(req.params.id)
    .then(entry => {
      return entry.update({text: updatedText})
    })
    .then(updatedEntry => res.redirect('/entry/' + updatedEntry.id))
    .catch(next)
})

module.exports = router;
