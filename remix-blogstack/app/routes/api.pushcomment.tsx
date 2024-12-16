import { getAuth } from "@clerk/remix/ssr.server";
import { ActionFunction } from "@remix-run/node";
import { prisma } from "~/.server/db";

export const action: ActionFunction = async (args) => {
  const { userId } = await getAuth(args);
  const formData = await args.request.formData();
  const comment = formData.get("comment")?.toString();
  const res = await prisma.comment.create({
    data: {
      userId: userId ?? "",
      comment: comment ?? "",
    },
  });
  return {
    body: res,
    status: "success",
  };
};
