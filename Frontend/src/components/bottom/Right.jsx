import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-css.min.js";
import "prismjs/themes/prism-tomorrow.css";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Highlight theme

export default function Right({ output }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [output]);

  return (
    <div className="md:w-1/2 p-6 rounded-lg shadow-lg backdrop-blur-md bg-white/10 border border-white/30 text-white max-h-full">
      <h2 className="text-xl font-bold mb-4 text-orange-400">AI Response:</h2>

      <div className="prose prose-invert prose-headings:text-orange-300 prose-strong:text-white prose-pre:bg-[#1e1e1e] prose-pre:text-white prose-pre:p-4 prose-code:text-green-400 prose-li:marker:text-orange-400 max-w-none overflow-y-auto max-h-[50vh]">
        <ReactMarkdown
          children={(
            output || "Your AI-reviewed code output will appear here."
          ).replace(/\\n/g, "\n")}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
      </div>
    </div>
  );
}
