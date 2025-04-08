from langflow.load import run_flow_from_json
TWEAKS = {
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

result = run_flow_from_json(flow="Ask AI V2.json",
                            input_value="message",
                            session_id="", # provide a session id if you want to use session state
                            fallback_to_env_vars=True, # False by default
                            tweaks=TWEAKS)