const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        });
    res.status(400).json(err);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const userData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if (!userData) {
            res.status(404).json({ message: 'No post found with the id entered!' });
            return;
        } 
        
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;