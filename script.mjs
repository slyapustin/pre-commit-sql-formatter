#!/usr/bin/env node
import { format } from 'sql-formatter';
import fs from "fs";


if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}
const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  };

  const formatted = format(data, {
    language: 'snowflake',
    tabWidth: 2,
    keywordCase: 'upper',
    linesBetweenQueries: 2,
  });

  if (data != formatted) {
    console.log(`Fixing ${filename}`)
    fs.writeFile(filename, formatted, err => {
      if (err) {
        console.error(err);
      }
    });
    process.exit(1);
  }
});
