import { httpClient } from "../../modules/httpClient";
import { IBillApiResponse } from "../../types/Bill";

async function getLegislations() {
  const repsonse = await httpClient.get<IBillApiResponse>("/legislation");
  return repsonse.data;
}

export default {
  getLegislations,
};
