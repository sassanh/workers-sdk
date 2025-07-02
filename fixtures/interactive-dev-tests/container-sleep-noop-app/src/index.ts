import { DurableObject } from "cloudflare:workers";

export class FixtureTestContainer extends DurableObject<Env> {}

export default {
	async fetch(request, env): Promise<Response> {
		return new Response("You'll never get to this point");
	},
} satisfies ExportedHandler<Env>;
