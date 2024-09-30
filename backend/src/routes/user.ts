import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,jwt,sign,verify } from 'hono/jwt';
import { signinInput, signupInput } from "@shivaraj0110/medium-common"

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	}
}>();


userRouter.post('/signup',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  try{
    const {success} = signupInput.safeParse(body)
    if(success){
       const user = await prisma.user.findFirst({
      where : {
        email : body.email
      }
    })
    if(user){
    c.json({
      msg : "user already exists! try signing in directly..."
    })
    }
    const response = await prisma.user.create({
      data : {
        email : body.email,
        password : body.password
      },
      select : {
        email : true,
        id : true
      }
    })
      const token = await sign({id : response.id },c.env.JWT_SECRET)
      return c.json({
        jwt : token
      })
    }
   else{
    c.status(400)
    return c.json({
      msg : "invalid inputs!"
    })
   }
  }
  catch(e){
    c.status(413)
    return c.json({
      msg : "something went wrong! try again!"
    })
  }
  })



  userRouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json()
  try{
    const {success} = signinInput.safeParse(body)
    if(success){
    const user = await prisma.user.findFirst({
    where : {
      email : body.email,
      password : body.password
    },
    select : {
      id  : true
    }
  })
  if(!user?.id){
    return c.json({
      msg  : "user not found, try signing up!"
    })
  }
    const jwt = await sign({id : user.id},c.env.JWT_SECRET)
    return c.json({
      jwt : jwt
    })
    }
    else{
      return c.json({
        msg  : "user not found, try signing up!"
      })
    }
  }
  catch(e){
    c.status(411)
    return c.json({
      msg : "error while signing in!"
    })
  }
  
  })
  

  userRouter.delete('/',async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   await prisma.user.deleteMany()
    return c.json({
        msg : "deleted all the users"
    })
})