import React from 'react'
import Koshalandra from './Koshalandra'
import Linkss from './Linkss'
import Classes from './Classes';

const Principal = () => {
  return (
    <>
    <article className='w-100 h-100 flex flex-col items-center ' >
<Koshalandra/>

<div className="w-11/12 h-fit flex flex-col md:items-start lg:flex-row  mt-3  items-center gap-5 border-2 ">
  <Classes/>
<Linkss/>

</div>
    </article>
    </>
  )
}

export default Principal