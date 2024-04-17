/**
 * Generate summary from text using OpenAI's summarization model
 * @param text The input text to be summarized
 * @returns A summary of the input text
 */
async function summarize(text: string): Promise<string> {
  const response = await openai.createSummarization({
    model: "text-davinci-003",
    text: text,
    max_tokens: 150,
  });
  let summary = "";
  try {
    if (response.status === 200) {
      summary = response.data.choices[0].text.trim();
    } else {
      console.log(`Something went wrong, Code: ${response.status}, ${response.statusText}`);
    }
  } catch (e) {
    console.log("Error:", e);
  }
  return summary;
}
