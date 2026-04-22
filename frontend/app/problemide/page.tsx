'use client'
import React from 'react'
import Editor from '@monaco-editor/react';
const page = () => {
  const [language, setLanguage] = React.useState("javascript");
  return (
    <div className='rounded-xl overflow-hidden border border-gray-800 shadow-lg'>
      <Editor width="50vw" height="80vh" language={language} defaultValue="// goodluck" theme="vs-dark" className='m-2' />
      <button onClick={() => setLanguage("csharp")} className='btn btn-active'>C#</button>
      <button onClick={() => setLanguage("cpp")} className='btn btn-active'>C++</button>
      <button onClick={() => setLanguage("java")} className='btn btn-active'>JAVA</button>
      <button onClick={() => setLanguage("python")} className='btn btn-active'>PYTHON</button>
      <button onClick={() => setLanguage("r")} className='btn btn-active'>R</button>
      <button onClick={() => setLanguage("javascript")} className='btn btn-active'>JavaScript</button>

    </div>
  )
}

export default page
