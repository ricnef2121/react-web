import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import pbkdf from 'js-crypto-pbkdf';
import crypto from 'crypto';




const password = 'mi-secreta'; // string or Uint8Array
const salt = 'ehlLpe34O6Kbq0tzrswVWW7rJN5fIeFHSxS734MfCB0='; // Uint8Array
const iterationCount = 10000;
const derivedKeyLen = 32;
const hash = 'SHA-1'; // 'SHA-384', 'SHA-512', 'SHA-1', 'MD5', 'SHA3-512', 'SHA3-384', 'SHA3-256', or 'SHA3-224' // fc73a74d3fc79a33f375253943480b4541079687bba20301aad9bfeb83eee7f3
 const ToBase64 = function (u8) {
  return btoa(String.fromCharCode.apply(null, u8));
}
const FromBase64 = function (str) {
  return atob(str).split('').map(function (c) { return c.charCodeAt(0); });
}

//salt aleaotorio de 32 bytes = base 64
//resultado arreglo de 32 bytes = base64(salt+ hashdel password )

function App() {
  useEffect(()=>{
    console.log( FromBase64('ehlLpe34O6Kbq0tzrswVWW7rJN5fIeFHSxS734MfCB0='),'salt')

    crypto.pbkdf2('mi-secreta', 'ehlLpe34O6Kbq0tzrswVWW7rJN5fIeFHSxS734MfCB0=', 10000, 32, 'sha1', (err, derivedKey) => {
      if (err) throw err;
      console.log(derivedKey);  // '3745e48...08d59ae'
    });

    // console.log(FromBase64('fc73a74d3fc79a33f375253943480b4541079687bba20301aad9bfeb83eee7f3'))
    // pbkdf.pbkdf2(
    //   password,
    //   salt,
    //   iterationCount,
    //   derivedKeyLen,
    //   hash
    // ).then( (key) => {
    //   var b64 = ToBase64(key);
    //  console.log(key)
    // });
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
