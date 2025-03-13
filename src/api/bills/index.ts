import { httpClient } from "../httpClient";
import { IBill, IBillApiResponse, IBillSortParams } from "../../types/Bill";

/**
 * Api call to fetch bills
 * @param params - API Request params
 */
async function getLegislations(params: Partial<IBillSortParams>) {
  const repsonse = await httpClient.get<IBillApiResponse>("/legislation", {
    params,
  });
  return repsonse.data;
}

/**
 * Mock API call which represents marking bill as favorite
 * @param bill
 * @returns marked Bill
 */
async function favoriteBill(bill: IBill): Promise<IBill> {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`API: Bill - ${bill.billNo} is marked as favorite`);
      resolve(bill);
    }, 1000)
  );
}

/**
 * Mock API call which represents marking bill as favorite
 * @param bill
 * @returns unmarked Bill
 */
async function unFavoriteBill(bill: IBill): Promise<IBill> {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`API: Bill - ${bill.billNo} is no longer marked as favorite`);
      resolve(bill);
    }, 1000)
  );
}
export default {
  getLegislations,
  favoriteBill,
  unFavoriteBill,
};
