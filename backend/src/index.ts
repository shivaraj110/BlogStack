import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,jwt,sign,verify } from 'hono/jwt';


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	}
}>();



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

app.post('/api/v1/user/signup',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
const body = await c.req.json()
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
})


app.post('/api/v1/user/signin', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body = await c.req.json()

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
})


app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})


app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})


app.get('/api/v1/blog:id', (c) => {
  const id = c.req.param('id')
	return c.text('get blog route!')
})



app.get('/api/v1/blog/bulk', (c) => {
  return c.text('this is blog bulk!')
})


export default app
