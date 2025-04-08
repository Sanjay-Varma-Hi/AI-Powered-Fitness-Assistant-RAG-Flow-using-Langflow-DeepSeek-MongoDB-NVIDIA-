let inputValue = ""; // Insert input value here

fetch(
  "https://astra.datastax.com/api/v1/run/ask-ai-v2?stream=false",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer <TOKEN>",
      "Content-Type": "application/json",
			"x-api-key": <your api key>
    },
    body: JSON.stringify({
			input_value: inputValue, 
      output_type: "text",
      input_type: "text",
      tweaks: {
        "TextInput-OldCF": {},
        "Prompt-owPgZ": {},
        "DeepSeekModelComponent-008hi": {},
        "ConditionalRouter-b1gS2": {},
        "ToolCallingAgent-Fur9E": {},
        "CalculatorTool-i0QMl": {},
        "DeepSeekModelComponent-ZfnIl": {},
        "TextOutput-FQ4dO": {},
        "Prompt-7kQvD": {},
        "TextInput-kmdit": {},
        "ParseDataFrame-hUBBR": {},
        "Prompt-3pYrT": {},
        "DeepSeekModelComponent-MQXpb": {},
        "TextOutput-VUGCW": {},
        "MongoDBAtlasVector-f6BzZ": {},
        "NVIDIAEmbeddingsComponent-T3gyw": {}
}
    }),
  },
)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
