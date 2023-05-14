import Test from "../types/Test";

const baseURL = "http://localhost:3000/tests";

export const testsApi = {
  getTests: async () => {
    return await fetch(baseURL).then((res) => res.json());
  },
  addTest: async (test: Test) => {
    return await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(test),
    });
  },
};
