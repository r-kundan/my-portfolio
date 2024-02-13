import React from 'react'

function CV() {
  return (
    <div className='flex items-center flex-col justify-center p-6'>
        <div>
            <img  src="https://drive.google.com/file/d/1dbdK5rszbh9WT9QP6f5gylE7BQR1pJgE/view?usp=sharing" alt="" />
        </div>
      <a href="https://drive.google.com/file/d/1Y3pCcKxk_37RsP8m-VkaftWUp8F0FkHv/view?usp=sharing" download target='_blank'><button className='shadow-lg p-4  border-2 text-white rounded-xl  bg-amber-700 hover:shadow-lg hover:bg-amber-600'>VIEW CV</button></a>
    </div>
  )
}

export default CV
