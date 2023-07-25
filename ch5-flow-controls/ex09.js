// Without running this code, what will it print?

console.log(false ?? null);
console.log(true ?? (1 + 2));
console.log((1 + 2) ?? true);
console.log(null ?? false);
console.log(undefined ?? (1 + 2));
console.log((1 + 2) ?? null);
console.log(null ?? undefined);
console.log(undefined ?? null);

// Remember that ?? returns the second operand if the first operand is either
//  null or undefined. In all other situations, it returns the first operand.