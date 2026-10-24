import { cp, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, '../public');
const output = resolve(here, '../dist');

await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true, force: true });
console.log(`Portfolio built at ${output}`);
