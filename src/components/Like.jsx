import React from 'react'
import { useRecoilState } from 'recoil'
import { likeAtom } from '../store/Atom'
// import projectData from './Data'
function Like() {
    const [likeCount, setlikeCount] = useRecoilState(likeAtom)

  return (
    <div>
      <button className='shadow-lg p-6  border-5 text-white rounded-full bg-amber-700 hover:shadow-iconsha '
   

onClick={() => {
    setlikeCount(likeCount == false ? likeCount + 1 : likeCount - 1)
}}
>Like {likeCount}</button>

    </div>
  )
}

export default Like
