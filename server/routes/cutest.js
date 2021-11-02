const express = require('express');
const router = express.Router();
const fs = require('firebase-admin');
const _ = require('lodash');

const db = fs.firestore();

router.get('/hamsters/cutest', async (req, res) => {
    const hamsters = [];
    let results = [];
    const request = await db.collection('hamsters').get();
    
    request.forEach(doc => {
        hamsters.push({...doc.data(), id: doc.ref.id})
    });

    hamsters.forEach(h => {
        const count = h.wins - h.defeats;
        return results.push({...h, count: count});
    })

    const maxVal = _.maxBy(results, 'count'); 
    let allWinners = results.filter(i => i.count === maxVal.count);
    allWinners.filter(i => delete i.count);

    if (request.empty) {
        res.sendStatus(404);
        return;
    }

    res.status(200).json(allWinners);
});

module.exports = router;