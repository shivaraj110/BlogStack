import { LoaderFunction } from "@remix-run/node";
import { prisma } from "~/.server/db";

export const loader: LoaderFunction = async (args) => {
  const formData = await args.request.formData();
  const postId = Number(formData.get("postId"));
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId,
      },
    });
    return {
      body: comments,
    };
  } catch (e) {
    throw new Error("Error fetching comments!");
  }
};
