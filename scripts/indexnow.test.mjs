import { test } from 'node:test';
import assert from 'node:assert/strict';
import { submission } from './indexnow.mjs';
const config = {host:'www.pfdno.com',key:'a'.repeat(32)};
test('IndexNow restricts notifications to public production canonical URLs', () => {
  assert.equal(submission(config,['https://www.pfdno.com/facts/','https://www.pfdno.com/facts/']).urlList.length,1);
  for (const url of ['https://preview.example.com/facts/','https://www.pfdno.com/credits/','https://www.pfdno.com/print/faq/','https://www.pfdno.com/?utm_source=x','https://www.pfdno.com/#faq','http://www.pfdno.com/','https://user:pass@www.pfdno.com/']) assert.throws(() => submission(config,[url]));
  assert.throws(() => submission(config,[]));
  assert.throws(() => submission({...config,key:'invalid'},['https://www.pfdno.com/']));
});
