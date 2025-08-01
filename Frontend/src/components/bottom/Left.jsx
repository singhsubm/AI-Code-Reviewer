import React from 'react'
import Prism from "prismjs";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-css.min.js";
import Editor from 'react-simple-code-editor';

import { useEffect } from 'react';

export default function Left({ code, setCode, fetchAIResponse }) {
    useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  return (
      <div className="md:w-1/2 p-4 rounded-lg shadow-lg backdrop-blur-md bg-zinc-800/30 border border-white/20 text-white flex flex-col ">
          {/* Highlighted code display */}
          <div className="relative w-full max-h-[400px] overflow-y-auto font-mono text-sm rounded leading-normal border border-white/10">
  <Editor
    value={code}
    onValueChange={setCode}
    highlight={(code) =>
      Prism.highlight(code, Prism.languages.javascript, 'javascript')
    }
    padding={10}
    className="w-full bg-transparent text-white caret-white"
    style={{
      fontFamily: '"Fira Code", monospace',
      fontSize: 14,
      lineHeight: '1.5',
      color: 'white',
      minHeight: '100vh', // ensure height is tall enough
    }}
  />
</div>


          {/* Button */}
          <button
            onClick={fetchAIResponse}
            className="mt-4 p-3 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold rounded"
          >
            Generate Review
          </button>
        </div>
  )
}
