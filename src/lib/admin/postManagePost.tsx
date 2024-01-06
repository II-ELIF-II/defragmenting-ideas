import { getEnvironment } from "@/app/utilities";
import managePostPayload from "@/types/payload/managePostPayload";

export const managePost = async(payload: managePostPayload) => {
  await fetch(getEnvironment().concat("/api/admin/managePost"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};