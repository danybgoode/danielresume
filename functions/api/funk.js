// Cloudflare Pages adapter: the handler lives in api/funk.js, host-neutral.
import { GET, POST } from "../../api/funk.js";

export const onRequestGet = ({ request, env }) => GET(request, env);
export const onRequestPost = ({ request, env }) => POST(request, env);
