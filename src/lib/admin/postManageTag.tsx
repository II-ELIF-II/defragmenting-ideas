import { getEnvironment } from "@/app/utilities";
import manageTagPayload from "@/types/payload/manageTagPayload";

export const manangeTag = async(payload: manageTagPayload) => {
  await fetch(getEnvironment().concat("/api/admin/manageTag"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};