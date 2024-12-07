import { prisma } from "./db"

export const setCollabTrue = async (id : string) => {
    try {
        await prisma.user.update({
            where : {
                identifier : id
            },
            data : {
            openToCollab : true
            },
        })
        return {
            msg : "open to collab"
        }
    }
    catch(e){
        console.error(e);
    }
}
export const setCollabFalse = async (id : string) => {
    try {
        await prisma.user.update({
            where : {
                identifier : id
            },
            data : {
            openToCollab : false
            },
        })
        return {
            
        }
    }
    catch(e){
        console.error(e);
    }
}