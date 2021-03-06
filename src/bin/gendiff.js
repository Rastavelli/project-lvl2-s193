#!/usr/bin/env node
import program from 'commander';
import genDiff from '..';

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format[type]', 'tree')
  .arguments('<firstConfig> <secondConfig>')
  .action((path1, path2, option) => console.log(genDiff(path1, path2, option.format)))
  .parse(process.argv);
