import React from 'react'
import Header from '../layout/Header/index'
/**
* @author
* @function layout
**/

const layout = (props) => {
  return(
<div>
<Header/>
{props.children}
</div>
)

 }

export default layout