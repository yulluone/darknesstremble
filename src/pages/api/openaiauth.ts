import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-MynaggAR0Xz5yV9gL2AkiXlR",
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const response = await openai.listModels();
  // const response = await openai.retrieveModel("text-davinci-003");
  try {
    const response: any = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      max_tokens: 7,
      temperature: 0,
    });
    // console.log(response);
    res.status(200).json(response);
  } catch (err) {
    // console.log(err);
    res.status(200).json(err);
  }
}
