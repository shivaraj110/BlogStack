import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,jwt,sign,verify } from 'hono/jwt';
import { createBlogPost, CreateBlogPost, updateBlogPost, UpdateBlogPost } from "@shivaraj0110/medium-common";
import { Turtle } from "lucide-react";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	},
    Variables:{
        authorId : string
    }
}>();

blogRouter.use('/*',async(c,next)=> {
    const header = c.req.header("authorization") || ""
    const token = header.split(" ")[1]
    const value  = await verify(token,c.env.JWT_SECRET)
    if(value.id){ 
        c.set("authorId",String(value.id))
        await next() 
    }
    else{
    c.status(403)
     return c.json({
      msg : " you are not logged in! "
    })
  }
  })


blogRouter.post('/', async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{

        const {success} = createBlogPost.safeParse(body)
        if(success){
            const blog = await prisma.post.create({
                data : {
                    title : body.title,
                    content : body.content,
                    authorId : Number(c.get("authorId")),
                    tags : body.tags
                }
            })
            return c.json({
                blogId : blog.id
            })
        }
        else{
           return c.json({
                msg : "invalid inputs!"
            })
        }

    }
    catch(e){
        c.status(413)
       return c.json({
            msg  : "error while posting the blog!"
        })
    }
    

})
  
  
blogRouter.put('/', async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const {success} = updateBlogPost.safeParse(body)
        if(success){
            const blog = await prisma.post.update({
                where :{
                    id : body.id
                },
                data : {
                    title : body.title,
                    content : body.content,
                }
            })
            return c.json({
                blogId : blog.id
            })
        }
    }
catch(e){
c.status(411);
return c.json({
    msg : "error while updating the blog!"
})  
}    
  })
  
  blogRouter.get('/bulk', async(c) => {
      const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
      try{
          const blogs = await prisma.post.findMany({
            select: {
                title : true,
                content : true,
                publishDate : true,
                id : true,
                tags : true,
                author :{
                    select : {
                        name : true
                    }
                }
            }
          })
          return c.json({
              blogs : blogs
          })
      }
      catch(e){
          c.status(400);
         return c.json({
              message : " error while fetching blog posts! "
          })
      }
  
  })
  
  blogRouter.get('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blogs = await prisma.post.findMany({
            where : {
                authorId : Number(c.get("authorId"))
            },
          select: {
              title : true,
              content : true,
              publishDate : true,
              id : true,
              tags : true,
              author :{
                  select : {
                      name : true
                  }
              }
          }
        })
        return c.json({
            blogs : blogs
        })
    }
    catch(e){
        c.status(400);
       return c.json({
            message : " error while fetching blog posts! "
        })
    }

})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   try { const blog = await prisma.post.findFirst({
        where : {
           id : Number(id)
        },
        select: {
            title : true,
            content : true,
            publishDate : true,
            id : true,
            tags : true,
            author :{
                select : {
                    name : true
                }
            }
        }
    })
    return c.json({
        blog
    })}
    catch(e){
        c.status(400);
       return c.json({
            message : "error while fetching the blog post"
        })
    }
  })
  



blogRouter.delete('/',async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   await prisma.post.deleteMany()
    return c.json({
        msg : "deleted all the posts"
    })
})
blogRouter.put('/publish',async(c)=>{
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        await prisma.post.update({
            where:{
                id : body.id
            },
            data:{
                published:true
            }
        })
        return c.json({
            msg : "published the blog!"
        })
    }
    catch(e){
        c.status(411)
       return c.json({
            msg : "error while publishing the blog!"
        })
    }
})