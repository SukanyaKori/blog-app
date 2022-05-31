import React from 'react'
import './post.css';

export default function Post() {
  return (
    <div className='post' >
    <img  
    className='postImg'
    src='bg4.jpg'
    alt=''>
    </img>


<div className='postInfo'>
    <div className='postCats'>
        <span className='postCat'>Life</span>
        <span className='postCat'>journey</span>
    </div>
    <span className='postTitle'>
        hskaaaaaaaaaaddddd
    </span>
    <hr/>
    <span className='postDate'> 1 hour ago</span>
</div>
<p className='postDesc'>
Your life purpose consists of the central motivating
 aims of your life—the reasons you get up in the morning. 
Purpose can guide life decisions, influence behavior, 
shape goals, offer a sense of direction, and create meaning.
</p>

    </div>
  )
}
