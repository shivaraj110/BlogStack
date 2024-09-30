import z from 'zod'

export const signupInput = z.object({
    email : z.string().email(),
    password : z.string().min(8),
    name : z.string().optional()
  })

  export type SignupInput = z.infer<typeof signupInput>



  export const signinInput = z.object({
    email : z.string().email(),
    password : z.string().min(8),
    name : z.string().optional()
  })

  export type SigninInput = z.infer<typeof signinInput>

  export const createBlogPost = z.object({
    title : z.string(),
    content : z.string(),
  })

  export type CreateBlogPost = z.infer<typeof createBlogPost>

  export const updateBlogPost = z.object({
    title : z.string(),
    content : z.string(),
    id : z.number()
  })

  export type UpdateBlogPost = z.infer<typeof updateBlogPost>
