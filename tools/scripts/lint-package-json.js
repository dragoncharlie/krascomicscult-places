/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync, writeFileSync } = require('fs');
const { EOL } = require('os');

const pkgStr = readFileSync('package.json', { encoding: 'utf8' });
const pkg = JSON.parse(pkgStr);
const devDeps = [/^@types\/.*/, /^@babel\/.*/, /^eslint-.*/, /eslint/];

ensureDevDependencies(pkg.dependencies, pkg.devDependencies);
pkg.dependencies = sortDependencies(pkg.dependencies);
pkg.devDependencies = sortDependencies(pkg.devDependencies);

writeFileSync('package.json', JSON.stringify(pkg, undefined, 2) + EOL);

function ensureDevDependencies(dependencies, devDependencies) {
  Object.keys(dependencies)
    .filter(d => devDeps.some(dd => d.match(dd) != null))
    .forEach(d => {
      devDependencies[d] = pkg.dependencies[d];
      delete dependencies[d];
    });
}

function sortDependencies(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((res, d) => ({ ...res, [d]: obj[d] }), {});
}
