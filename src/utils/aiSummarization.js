import axios from "axios";

const AI_SUMMARIZATION_API_URL = "https://api.edenai.run/v2/text/summarize";

const token = import.meta.env.VITE_AI_BEARER_TOKEN;

export const getAISummary = async (
  text,
  outputSentences = 3,
  language = "en"
) => {
  const options = {
    method: "POST",
    url: AI_SUMMARIZATION_API_URL,
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: {
      output_sentences: outputSentences,
      providers: "anthropic",
      text: text,
      language: language,
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data.anthropic.result;
    console.log("data = ", data);
    return data; // Adjust this line to match the structure of the actual response
  } catch (error) {
    console.error("Error in AI summarization:", error);
    throw new Error("Failed to summarize the content");
  }
};
