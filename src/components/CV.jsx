import React from 'react'

function CV() {
  return (
    <div className='flex items-center flex-col justify-center p-6'>
        <div>
            <img src=".//src/assets/Resume1.jpg" alt="" />
        </div>
      <a href="../src/assets/Resume1.jpg" download><button className='shadow-lg p-4  border-5 text-white rounded-full bg-amber-700 hover:shadow-lg hover:bg-amber-600'>DOWNLOAD</button></a>
    </div>
  )
}

export default CV
