const openai = require('../services/openai');

test('test opeanAI api', () => {
    openai(`What's your name?`)
    .then(res => {
        expect(res.status).toBe(200);
    })
});