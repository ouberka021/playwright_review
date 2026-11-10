import { test, expect } from "@playwright/test";
import { request } from "node:http";
import { describe } from "node:test";
const newData = require("../testData/newOrder.json");
const UpdateNewData = require("../testData/updateOrder.json");


test.describe("global testing ", () => {
  var orderId;
  // get alll orders
  test("get all orders", async ({ request }) => {
    const getResponse = await request.get("/orders");
    // validate status code

    expect(getResponse.status()).toEqual(200);
    console.log(getResponse.status());
    // get all data
    const getResponseBody = await getResponse.json();
    //console.log(getResponseBody);
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
    //console.log(postResponseBody);
    expect(postResponseBody.shippingAddress.city).toBe("New York");
    expect(postResponseBody.status).toBe("delivered");
    expect(postResponseBody.paymentStatus).toBe("paid");
    expect(postResponseBody.orderDate).toBe("2026-10-20");
  });

  test("retrieve new data by", async ({ request }) => {
    // retrieve  new data by id
    const getNewResponse = await request.get(`/orders/${orderId}`);
    //Validate status code
    expect(getNewResponse.status()).toBe(200);
    expect(getNewResponse.ok()).toBeTruthy();
    //Validate response body
    const getNewResponseBody =await getNewResponse.json();
   expect(getNewResponseBody.status).toBe("delivered");
   expect(getNewResponseBody.paymentStatus).toBe("paid");
   expect(getNewResponseBody.orderDate).toBe("2026-10-20");
    //console.log(getNewResponseBody);
  });
// update data 
test("put request update new order", async ({ request }) => {
  const putResponse = await request.put(`/orders/${orderId}`, {
    data: UpdateNewData
  });
  expect(putResponse.ok()).toBeTruthy();
  expect(putResponse.status()).toBe(200);
  //get the body
  const putResponseBody = await putResponse.json();
  //console.log(postResponseBody);
 const getUpdatedResponse = await request.get(`/orders/${orderId}`);
 expect(getUpdatedResponse.status()).toBe(200);
 const getUpdatedResponseBody =  await getUpdatedResponse.json();
expect(getUpdatedResponseBody.shippingAddress).toHaveProperty("city", "Canada")
expect(getUpdatedResponseBody.shippingAddress).toHaveProperty("state", "Can")
console.log(getUpdatedResponseBody);
});
test("Delete request new order", async({ request }) =>{
const deleteResponse = await request.delete(`/orders/${orderId}`);
expect(deleteResponse.status()).toBe(200);

const getDeletedResponse = await request.get(`/orders/${orderId}`);
expect(getDeletedResponse.status()).toBe(404);

})

});
