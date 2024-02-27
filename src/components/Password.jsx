import React, { useState, useCallback, useEffect, useRef } from 'react';

const Password = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false); // State to track whether password is copied

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*{[~";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,copied]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, passwordRef.current.value.length);
      navigator.clipboard.writeText(passwordRef.current.value)
        .then(() => {
          console.log('Password copied to clipboard');
          setCopied(true); // Set copied state to true after copying
        })
        .catch((error) => console.error('Failed to copy password: ', error));
    }
  }, [password]);

  const handleCopyReset = () => {
    setCopied(false); // Reset copied state when the user checks the "Numbers" or "Characters" checkboxes again
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-800 text-white">

        <div className='w-full  h-52 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-black'>
          <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button
              className={`outline-none bg-${copied ? 'green' : 'blue'}-700 text-white px-3 py-0.5 shrink-0`}
              onClick={copyPassword}
              disabled={copied} // Disable button after copying
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
            
          </div>
          <div className='flex text-md gap-x-2 mt-6'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setLength(parseInt(e.target.value))
                  handleCopyReset()}
                }
              />
              <label htmlFor="">Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                  handleCopyReset(); // Reset copied state if the user checks the "Numbers" checkbox again
                }}
              />
              <label htmlFor="">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                  handleCopyReset(); // Reset copied state if the user checks the "Characters" checkbox again
                }}
              />
              <label htmlFor="">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
