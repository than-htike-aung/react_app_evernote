import React from 'react'
import useInput from '../../customhook/useInput';
const Form = () => {
 
    const[title, bindTitle, resetTitle] = useInput()
    const[content, bindContent, resetContent] = useInput()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({title, content})
        resetTitle()
        resetContent()
    }

    return (
        <div className="secton" className="white">
            <form action>
                <h5 className = "grey-text">New Note</h5>
            
 
            
        <div className="input-field ">
          
          <input type="text" id="note-title" class="autocomplete" {...bindTitle}/>
          <label for="note-title">Note Title</label>
        </div>

   <div className="input-field">
        <textarea id="note-content" class="materialize-textarea" {...bindContent}></textarea>
          <label for="note-content">Note Content</label>
    </div>   

     <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default Form
