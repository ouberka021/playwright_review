import { test, expect } from "@playwright/test";
import { describe } from "node:test";
const newData = require("../testData/newOrder.json");

var orderId;
test.describe("global testing", () => {
  // get alll orders
  test("get all orders", async ({ request }) => {
    const getResponse = await request.get("/orders");
    // validate status code

    expect(getResponse.status()).toEqual(200);
    console.log(getResponse.status());
    // get all data
    const getResponseBody = await getResponse.json();
    console.log(getResponseBody);
  });

  // send new order to the client
  test("post request create order", async ({ request }) => {
    const postResponse = await request.post("/orders", {
      data: newData,
    });
    expect(postResponse.ok()).toBeTruthy();
    expect(postResponse.status()).toBe(201);
    const postResponseBody = await postResponse.json();
orderId = postResponseBody.id;
    console.log(postResponseBody);
    expect(postResponseBody.shippingAddress.city).toBe("New York");
    expect(postResponseBody.status).toBe("delivered");
    expect(postResponseBody.paymentStatus).toBe("paid");
    expect(postResponseBody.orderDate).toBe("2026-10-20");
// retrieve  new data by id 


  });
});
