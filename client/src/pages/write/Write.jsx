import React from 'react'
import './write.css';

export default function Write() {
    return (
        <div className='write'>
        <img  className='writeImg' src='bg4.jpg' alt=''></img><br/><br/>
            <form className='writeForm'>
                <div className='writeformGroup'>

                    <label htmlFor='fileInput' >
                        <i className='writeIcon fa-solid fa-plus'></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display: 'none' }} />
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />

                </div><br/><br/>



<div className='writeformGroup'>
    <textarea placeholder='Tell your story.....' type='text' className='writeText'></textarea>
</div>
 <button className='writeSubmit'>Publish</button>



            </form>
        </div>
    )
}
