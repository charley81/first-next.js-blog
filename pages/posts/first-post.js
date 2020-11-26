import React from 'react'
import Link from 'next/link'

const firstPost = () => {
  return (
    <div>
      <h3>First Post</h3>
      <p>
        <Link href="/"><a>Back Home</a></Link>
      </p>
    </div>
  )
}

export default firstPost
