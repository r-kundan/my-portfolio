import React from 'react'

function CV() {
  return (
    <div className='flex items-center flex-col justify-center p-6'>
        <div>
            <img src="https://www.canva.com/design/DAF5rrIxc3k/FkrWU2bUwWcW5JMe4N7i7Q/edit" alt="" />
        </div>
      <a href="https://www.canva.com/design/DAF5rrIxc3k/FkrWU2bUwWcW5JMe4N7i7Q/edit?utm_content=DAF5rrIxc3k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" download target='_blank'><button className='shadow-lg p-4  border-5 text-white rounded-full bg-amber-700 hover:shadow-lg hover:bg-amber-600'>VIEW CV</button></a>
    </div>
  )
}

export default CV
