#!/usr/bin/env node
import { format } from 'sql-formatter';
import fs from "fs";


if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

let language = 'sql';
for (var i = 2; i < process.argv.length; i++) {
  if (process.argv[i].startsWith('--language')) {
    language = process.argv[i].split('=')[1].trim()
  }
}

const filename = process.argv[process.argv.length - 1];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  };

  const formatted = format(data, {
    language: language,
    tabWidth: 2,
    keywordCase: 'upper',
    linesBetweenQueries: 2,
  });

  if (data != formatted) {
    console.log(`Fixing ${filename}`);
    fs.writeFile(filename, formatted, err => {
      if (err) {
        console.error(err);
      }
      process.exit(1);
    });
  }
});
