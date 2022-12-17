const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({ apiKey: process.env.OPENAI_SECRET_KEY });
const openAi = new OpenAIApi(config);

module.exports = function completion(prompt) {
    return openAi.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 4000,
        temperature: 1.0
    });
}