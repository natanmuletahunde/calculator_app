/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [input, setInput] = useState('')

  const handleInput = (value) => {
    setInput(input + value)
  }

  const calculate = () => {
    try {
      setResult(eval(input))
    } catch (error) {
      setResult('Error')
    }
  }

  const clear = () => {
    setInput('')
    setResult(0)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Calculator</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-gray-700 p-4 rounded-lg text-2xl focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => handleInput('7')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            7
          </button>
          <button
            onClick={() => handleInput('8')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            8
          </button>
          <button
            onClick={() => handleInput('9')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            9
          </button>
          <button
            onClick={() => handleInput('/')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            /
          </button>
          <button
            onClick={() => handleInput('4')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            4
          </button>
          <button
            onClick={() => handleInput('5')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            5
          </button>
          <button
            onClick={() => handleInput('6')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            6
          </button>
          <button
            onClick={() => handleInput('*')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            *
          </button>
          <button
            onClick={() => handleInput('1')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            1
          </button>
          <button
            onClick={() => handleInput('2')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            2
          </button>
          <button
            onClick={() => handleInput('3')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            3
          </button>
          <button
            onClick={() => handleInput('-')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            -
          </button>
          <button
            onClick={() => handleInput('0')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            0
          </button>
          <button
            onClick={() => handleInput('.')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            .
          </button>
          <button
            onClick={calculate}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            =
          </button>
          <button
            onClick={() => handleInput('+')}
            className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            +
          </button>
          <button
            onClick={clear}
            className="bg-red-500 p-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Clear
          </button>
        </div>
        <div className="mt-6 text-2xl font-bold">Result: {result}</div>
      </div>
    </div>
  )
}

export default App