const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

router.post("/", (req, res) => {
  if (req.body.text) {
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: req.body.text,
        temperature: 0.7,
        stop: "none",
        max_tokens: 2048,
      })
      .then((d) => {
        return res.send({
          statusMessage: "success",
          response: JSON.stringify(d.data.choices[0].text),
          statusCode: 200,
        });
      })
      .catch((e) => {
        return res.send({
          statusMessage: "Something went wrong",
          statusCode: 400,
        });
      });
  }
});
module.exports = router;
