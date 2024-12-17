import { BASE_URL } from "@/common/Api";
import axios from "axios";

export const Axios = axios.create({ baseURL: BASE_URL, withCredentials: true });
