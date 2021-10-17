import axios from "axios";

import { API_KEY } from "@env";

export const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3/lists/',
  params: { "api-key": API_KEY }
});