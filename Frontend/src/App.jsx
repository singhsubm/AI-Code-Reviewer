import { useState } from "react";


import axios from "axios";

import Top from "./components/Top";
import Left from "./components/bottom/Left";
import Right from "./components/bottom/Right";

export default function App() {
  const [code, setCode] = useState(`
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log("Sum:", sum);
    `);
  const [output, setOutput] = useState("Your AI-reviewed code output will appear here.");

  


  async function fetchAIResponse() {
    setTimeout(() => {
      setOutput("🔍 AI Reviewing... ")
    }, 1000);
    setTimeout(() => {
      setOutput("🐞 Finding Critial Bugs...")
    }, 2000);
    setTimeout(() => {
      setOutput("🚀 Improving Code...")
    }, 3000);
    setTimeout(() => {
      setOutput("✅ Finalizing Review...")
    }, 4000);

    setTimeout(() => {
      axios.post("https://ai-code-reviewer-a2rj.onrender.com/ai/post-response", { code })
        .then(response => {
          console.log("AI Response:", response.data);
          setOutput(JSON.stringify(response.data, null, 2));
        })
        .catch(error => {
          console.error("Error fetching AI response:", error);
          setOutput("❌ Error fetching AI response. Please try again.");
        });
    }, 5000); 

  }

  return (
    <main className="h-screen w-screen bg-black flex flex-col">
      {/* Top Section */}
      <Top />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-40 py-6 bg-[linear-gradient(180deg,_rgba(0,0,0,1)_40%,_rgba(68,07,117,0.8)_100%)]">
        {/* Left Side: Code Editor + Button */}
        <Left code={code} setCode={setCode} fetchAIResponse={fetchAIResponse} />

        {/* Right Side: Output */}
        <Right output={output} />
      </div>
    </main>
  );
}
