const router = require('express').Router();
const path = require('path')


router.get('/', (req, res) => {
    res.json({ message: 'hello' });
});

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/sign-up-modal.html'))
});

module.exports = router;