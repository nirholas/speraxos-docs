const origin = process.argv[2] ?? 'https://chat.sperax.io';
const res = await fetch(`${origin}/.well-known/x402`);
if (!res.ok) throw new Error(`x402 discovery failed: ${res.status}`);
const { resources } = await res.json();
for (const url of resources) console.log(url);
