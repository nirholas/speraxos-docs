const origin = process.argv[2] ?? 'https://chat.sperax.io';
const res = await fetch(`${origin}/.well-known/agent-card.json`);
if (!res.ok) throw new Error(`agent card failed: ${res.status}`);
const card = await res.json();
for (const i of card.additionalInterfaces ?? []) console.log(i.url);
