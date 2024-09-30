import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,jwt,sign,verify } from 'hono/jwt';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	}
}>();


app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)

app.use('/api/v1/blog/*',async(c,next)=> {
  const header = c.req.header("authorization") || ""
  const token = header.split(" ")[1]
  const value  = await verify(token,c.env.JWT_SECRET)
  if(value.id){ 
    await next() 
  }
  else{
  c.status(403)
   return c.json({
    msg : "invalid token"
  })
}
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})







export default app
