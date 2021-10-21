import React from 'react'

export default function About() {
  
   let mode={
    color:'black',
    backgroundColor:'white'

   }
   
    return (
        <>
        <blockquote className="blockquote">
<div class="container" style={mode}>
  <div class="card-body">
   <b> <h1 class="card-title display-3">About TextUtils</h1></b>
    <h3 class="card-text blockquote-footer">TextUtils is simply a set of utility functions to do operations on String objects.
I usually have gone through many projects & I have seen many times in the code there is no use of TextUtils, I am not saying that it’s necessary to use it but if we can reduce some extra work so then why not?
</h3>
  </div>
</div>
</blockquote>
        </>
    )
}
