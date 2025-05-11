'use server'

import { db } from '@/db'
import { redirect } from 'next/navigation'
import { ActionStateType } from './type'
import { revalidatePath } from 'next/cache'


export async function createSnippet(prevState: ActionStateType, formData: FormData) {

    const title = formData.get('title') as string
    const code = formData.get('code') as string

    const errors = {
      titleError: title.length < 3 ? 'The title length cannot be less than 3' : '',
      codeError: code.length < 6 ? 'The code length cannot be less than 6' : '',
    }

    if (Object.values(errors).some(error => error)) {
      return { errors }
    }

    const snippet =  await db.snippet.create({
      data: {
          title: title,
          code: code,
      }
  })
    console.log(snippet)
    revalidatePath('/')
    redirect('/')
  }