import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,jwt,sign,verify } from 'hono/jwt';
import { createBlogPost, CreateBlogPost, signinInput, signupInput } from "@shivaraj0110/medium-common"
import { ArrowDownAZ } from "lucide-react";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	},
  Variables:{
    userId : string,
    bookmarkId : string
}
}>();


const verifyUser = async(c : any,next : any)=> {
  const header = c.req.header("authorization") || ""
  const token = header.split(" ")[1]
  const value  = await verify(token,c.env.JWT_SECRET)
  if(value.id){ 
      c.set("userId",String(value.id))
      await next() 
  }
  else{
  c.status(403)
   return c.json({
    msg : " you are not logged in! "
  })
}
}

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
        name : body.name,
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
    console.log(e);
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
    console.log(e);
  
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
userRouter.get("/details",verifyUser,async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
const res = await prisma.user.findFirst({
  where : {
    id : Number(c.get("userId"))
  }
  ,
  select : {
    name : true,
    email : true,
    id : true,
    bookmarks : true
  }
})
return c.json({
  details : res
})
})

userRouter.post("/bookmark",verifyUser,async (c)=> {
  const body = await c.req.json() 
  const userId = Number(c.get("userId"))
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
try{
  const {success} = createBlogPost.safeParse(body)
  if(!success){
    c.status(413)
    c.json({
      msg : "invalid inputs!"
    })
  }
  const res = await prisma.bookmark.create({
    data : {
      userId,
      postId : body.postId,
    }
  }
)
c.status(200)
return c.json({
  msg : "added to the bookmarks",
  res
})
}
catch(e){
  c.status(413)
 return c.json({
    msg : "error while adding a bookmark!"
  })
}
})

userRouter.get("/bookmarks",verifyUser,async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate()) 
const userId = Number(c.get("userId"))
try{
  const res = await prisma.bookmark.findMany({
    where :{ 
      userId
    },
    select : {
      post : {
        select : {
          author : {
            select : {
              name : true
            }
          },
          id : true,
          tags : true,
          title : true,
          content : true,
          publishDate :true
        }
      },
      createdAt : true,
    }
  })
  c.status(200)
  return c.json({
    posts : res
  })
}
catch(e){
c.status(413)
return c.json({
  msg: "error while fetching the bookmarks!"
})
}
})

const getBookmarkId = async (c:any,next:any) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  const body = await c.req.json()
  const postId = Number(body.id)
  try{
    const bookmarkId = await prisma.bookmark.findFirst({
      where : {
        postId
      },
      select : {
        id : true
      }
     })
     c.set("bookmarkId",String(bookmarkId?.id))
    await next()
  }
  catch(e){
    c.status(411)
    return c.json({
      msg : "no bookmark found!"
    })
  }
}

userRouter.delete("/bookmark",verifyUser,getBookmarkId,async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
try{
  await prisma.bookmark.deleteMany({
  where : {
    id : Number(c.get("bookmarkId"))
  }
 })
 return c.json({
  msg : "deleted the bookmark"
 })
}
catch(e){
  c.status(413)
  return c.json({
    msg : "error while deleting the bookmark!"
  })
}
})