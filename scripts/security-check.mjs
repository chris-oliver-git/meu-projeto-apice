import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const source = fs.readFileSync('next.config.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { default: config } = await import('data:text/javascript,' + encodeURIComponent(compiled));
const [{ headers }] = await config.headers();
const values = new Map(headers.map(h => [h.key.toLowerCase(), h.value]));
const csp = values.get('content-security-policy');
for (const directive of ["base-uri 'none'", "object-src 'none'", "frame-ancestors 'none'", "script-src-attr 'none'", "upgrade-insecure-requests"]) assert(csp.includes(directive), directive);
assert(!csp.includes("'unsafe-eval'"));
const scripts = csp.split(';').find(d => d.trim().startsWith('script-src '));
assert(scripts.includes('https://ezchatbot.ai/webchat/index.umd.js'));
assert(!scripts.includes('https://*.'));
assert.equal(values.get('x-content-type-options'),'nosniff');
assert.equal(values.get('x-frame-options'),'DENY');
assert.equal(config.poweredByHeader,false);
for (const p of ['app/page.tsx','app/[slug]/page.tsx']) {
  const text=fs.readFileSync(p,'utf8');
  assert(!text.includes('rel="noreferrer"'));
  assert(!text.includes('dangerouslySetInnerHTML'));
}
assert(!fs.readFileSync('app/[slug]/page.tsx','utf8').includes('no-referrer-when-downgrade'));
const hosting=JSON.parse(fs.readFileSync('.openai/hosting.json'));
assert.equal(hosting.d1,null); assert.equal(hosting.r2,null);
console.log('PASS: CSP, security headers, external links, map referrer, inactive data bindings.');
