import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, settext] = useState('Enter Text Here');

  const handleOnChange = (event) => {
    console.log('On change');
    settext(event.target.value);
  };

  const handleUpClick = () => {
    console.log('UpperCase Button Clicked!');
    let newText = text.toUpperCase();
    settext(newText);
  };

  const handleLoClick = () => {
    console.log('LowerCase Button Clicked!');
    let newText = text.toLowerCase();
    settext(newText);
  };

  const handleClearClick = () => {
    console.log('Clear Text Button Clicked!');
    settext('');
  };

  const handleUpgradeClick = () => {
    console.log('Upgrade Button Clicked!');

    let RemoveSpace = text.split(/[ ]+/);
    let newText = RemoveSpace.join(" ")
      .split('. ')
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join('. ');

    settext(newText);
  };

  const handleCopyClick = () => {
    console.log('Copy Text Button Clicked!');
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className='container'>
      <div id='buttonContainer' style={{border: `1px solid ${props.darkMode ? 'black' : 'white'}`}}>
          <button className={`btn mx-1 ${props.darkMode ? 'btn-dark' : 'btn-edit'}`} onClick={handleUpClick}>
            <i className="fa-solid fa-u"></i>
          </button>
          <button className={`btn mx-1 ${props.darkMode ? 'btn-dark' : 'btn-edit'}`} onClick={handleLoClick}>
            <i className="fa-solid fa-l"></i>
          </button>
          <button className={`btn mx-1 ${props.darkMode ? 'btn-dark' : 'btn-edit'}`} onClick={handleUpgradeClick}>
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          </button>
          <button className={`btn mx-1 ${props.darkMode ? 'btn-dark' : 'btn-edit'}`} onClick={handleCopyClick}>
            <i className="fa-solid fa-copy"></i>
          </button>
          <button className={`btn mx-1 ${props.darkMode ? 'btn-dark' : 'btn-edit'}`} onClick={handleClearClick}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
        <div className='mb-2'>
          <textarea
            name='myBox'
            value={text}
            className="form-control"
            style={{backgroundColor: `${props.darkMode ? 'black' : 'white'}`, color: `${props.darkMode ? 'white' : 'black'}`,border: `1px solid ${props.darkMode ? 'black' : 'white'}`}}
            onChange={handleOnChange}
            id=''
            cols='25'
            rows='10'
          ></textarea>
        </div>
      </div>
      <div className='container my-2' style={{color: props.darkMode ? 'white' : 'black'}}>
        <h3>Text Summary</h3>
        <p>{text.split(/\s+/).filter((word) => word !== '').length} words</p>
        <p>{text.replace(/\s/g, '').length} characters (excluding spaces)</p>
        <p>{text.length} characters (including spaces)</p>
        <p>{0.008 * text.split(' ').length} min to read.</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
