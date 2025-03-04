import OpenAI from 'openai';
import { loadConfig } from './config';
import axios from 'axios';

export async function generateCommand(input: string) {
  const { openaiApiKey, key, userId } = loadConfig();

  let command;

  if (openaiApiKey && openaiApiKey.length > 1) {
    const openai = new OpenAI({ apiKey: openaiApiKey });

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content:
            "Convert the user's request into a shell command without explanation. Give only the command on a single line, no other text. Do not format in any way. If the user's request requires multiple commands, return them in the same line separated by the && operator.",
        },
        { role: 'user', content: input },
      ],
    });

    command = response.choices[0]?.message?.content?.trim();
  } else if (key?.length > 1 && userId?.length > 1) {
    const response = await axios.post('https://vvk.ai/api/command', {
      input,
      key,
      userId,
    });

    command = response.data.command;
  } else {
    console.log(
      "Couldn't generage command: Set your OpenAI API Key with vvk config set openaiApiKey <your_api_key> or log in with vvk login"
    );
    process.exit(1);
  }
  if (!command) {
    console.log("Couldn't generate a command.");
    process.exit(1);
  }

  return command;
}
