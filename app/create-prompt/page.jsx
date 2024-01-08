"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'
import { POST } from '@app/api/auth/[...nextauth]/route'

const CreatePrompt = () => {
  const [submitting, setsubmitting] = useState(false);

  const [post, setPost] = useState({
    promot: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDefault();

    setsubmitting(true);

    try{
      const response = await fetch('/api/prompt/new', {
        method: POST,
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag
        })
      })
      if(response.ok){
        RouterContext.push('/');
      }

    }catch(error){
      console.log(error);
    }finally{
      setsubmitting(false);
    }
  }

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
      />
  )
}

export default CreatePrompt