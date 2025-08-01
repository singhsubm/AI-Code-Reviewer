const main = require('../services/ai.service');

module.exports.getResponse = async (req, res) => {
    const code = req.body.code ;

    if (!code) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await main(code);
    res.send(response);
}