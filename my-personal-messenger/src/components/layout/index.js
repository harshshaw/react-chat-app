import React from 'react'

/**
* @author
* @function layout
**/

const layout = (props) => {
  return(
<div>
<header>Header</header> 
{props.children}
</div>
)

 }

export default layout