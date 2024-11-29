function grow(x) {
  if (x.length === 0) return 0
  return x.reduce((acc, cur) => (acc *= cur), 1)
}
