'use client'
import React from 'react'
import Editor from '@monaco-editor/react';
const page = () => {
  const [language, setLanguage] = React.useState("javascript");
  return (
    <div className='rounded-xl overflow-hidden border border-gray-800 shadow-lg'>
      <Editor width="50vw" height="80vh" language={language} defaultValue="// goodluck" theme="vs-dark" className='m-2' />
      <button onClick={() => setLanguage("csharp")} className='btn-active glow idebtns'>C#</button>
      <button onClick={() => setLanguage("cpp")} className='btn-active glow idebtns'>C++</button>
      <button onClick={() => setLanguage("java")} className='btn-active glow idebtns'>JAVA</button>
      <button onClick={() => setLanguage("python")} className='btn-active glow idebtns'>PYTHON</button>
      <button onClick={() => setLanguage("r")} className='btn-active glow idebtns'>R</button>
      <button onClick={() => setLanguage("javascript")} className='btn-active glow idebtns'>JavaScript</button>

    </div>
  )
}

export default page
