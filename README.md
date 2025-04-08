# 💪 AI-Powered Fitness Assistant (RAG Flow using Langflow + DeepSeek + MongoDB + NVIDIA)

This project is a full-fledged **RAG (Retrieval-Augmented Generation)** pipeline built visually using **Langflow**. It leverages:

- **NVIDIA Embeddings** for vector representation [Model](https://build.nvidia.com/nvidia/nv-embedqa-mistral-7b-v2)
- **MongoDB Atlas** for semantic vector search
- **DeepSeek LLM** for smart natural language generation
- **Langflow** as the orchestration engine

---

## 🚀 Project Overview

This flow simulates an **AI Fitness Assistant**. Based on the user profile (e.g., weight, height, activity), fitness goals (e.g., muscle gain or weight loss), and a query (e.g., "Can you generate a workout plan?"), the system:

1. Embeds the query
2. Searches MongoDB for relevant documents
3. Parses + combines retrieved data with user context
4. Generates a final, detailed LLM-based reply using DeepSeek

---

## 🧩 Langflow Components Breakdown

### 🔹 Inputs

- **question**: The fitness-related question from the user
- **profile**: Structured data (e.g. `75kg, 180cm, male, active`)
- **goal**: User's goal (e.g. `muscle gain`)

### 🔹 NVIDIA Embeddings

- Model: `NV-Embed-QA`
- Embeds the user question into vector format
- Sent into MongoDB Atlas for semantic retrieval

### 🔹 MongoDB Atlas

- Database: `Muscle_data`
- Collection: `note`
- Index: `default`
- Performs vector similarity search and returns context

### 🔹 Parse DataFrame

- Converts retrieved search results into plain text using templates

### 🔹 Prompts

- 2 prompts: One for the MongoDB notes + profile, another combining everything
- Dynamically combine responses if multiple LLMs are used

### 🔹 DeepSeek

- Model: `deepseek-chat`
- Generates contextual replies based on the final prompt

### 🔹 Output

- Final reply shown via `Text Message` node in the Playground

---

## 🌐 API Usage (Examples)

### 📦 cURL

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "question": "Can I still lift if I have sore thighs?",
    "profile": "75kg, 180cm, male, active",
    "goal": "muscle gain"
  }' \
  https://your-langflow-deployment/api/v1/run/your-flow-id
```

### 🐍 Python

```python
import requests

payload = {
    "question": "Can I still lift if I have sore thighs?",
    "profile": "75kg, 180cm, male, active",
    "goal": "muscle gain"
}
response = requests.post("https://your-langflow-deployment/api/v1/run/your-flow-id", json=payload)
print(response.json())
```

### 🌐 JavaScript (Fetch)

```js
fetch("https://your-langflow-deployment/api/v1/run/your-flow-id", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    question: "Can I still lift if I have sore thighs?",
    profile: "75kg, 180cm, male, active",
    goal: "muscle gain"
  })
})
.then(res => res.json())
.then(console.log);
```

---

## 🖼️ Screenshots

- Flow diagram (Langflow canvas)
- Playground output view

(All images are located in the `/assets` folder)

---

## 🧠 What I Learned

- Prompt chaining and context management
- Using NVIDIA for embedding vectors
- Integrating MongoDB as a vector store
- DeepSeek chat model capabilities
- Building and testing a complete LLM app visually

---

## 📎 Tags

`#Langflow` `#MongoDBAtlas` `#NVIDIAEmbeddings` `#DeepSeek` `#RAG` `#AIpipeline` `#OpenSourceAI` `#PromptEngineering` `#GenAI` `#FitnessBot` `#SemanticSearch` `#VectorSearch` `#LLMapps` `#MLOps`

---

## 📬 Connect

If you liked this project or want to collaborate, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/sankar-sanjay-varma-thotakura-57844519a/) or drop a ⭐ on this repo!

