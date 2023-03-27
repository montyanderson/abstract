import {
	readAll,
	writeAll,
} from "https://deno.land/std@0.181.0/streams/mod.ts";

const input = new TextDecoder().decode(await readAll(Deno.stdin));

const files = input
	.split("\n")
	.filter((line) => line.length);

const paths = files.map((file) => file.split("/"));

let result = "";

for (let i = 0;; i++) {
	const chunks = paths.map((path) => path[i]);

	if (chunks.every((chunk) => chunk === chunks[0])) {
		if (chunks[0] === undefined) {
			break;
		}

		result += chunks[0] + "/";
	} else {
		result += "*/";
		break;
	}
}

result = result.slice(0, -1);

await writeAll(Deno.stdout, new TextEncoder().encode(result));
