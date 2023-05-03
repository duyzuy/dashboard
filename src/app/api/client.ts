import { StorageKey } from "../../models/common";
import { isEmpty } from "../../utils";
export interface OptionType {
  body?: object | undefined;
  headers?: object;
  method?: string;
}

const client = async (input: string, { body, headers, method }: OptionType) => {
  const apiUrl = process.env.REACT_APP_BASE_API_URL;
  const token = localStorage.getItem(StorageKey.token) || "";

  let configs: RequestInit = {
    method: method ? method : "POST",
    cache: "no-cache",
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "access-token": token,
    },
  };

  if (headers) {
    configs.headers = {
      ...configs.headers,
      ...headers,
    };
  }
  if (body && !isEmpty(body) && method === "POST") {
    configs.body = JSON.stringify({ ...body });
  }
  let baseUrl = `${apiUrl}/${input}`;

  const response = await fetch(baseUrl, { ...configs });

  return {
    status: response.status,
    data: await response.json(),
    headers: response.headers,
  };
};

client.get = async (
  input: string,
  { headers = {}, body = {}, method = "GET" }: OptionType
) => {
  return await client(input, { method, headers, body });
};
client.post = (
  input: string,
  { body = {}, headers = {}, method = "POST" }: OptionType
) => {
  return client(input, { body, headers, method });
};
export default client;
