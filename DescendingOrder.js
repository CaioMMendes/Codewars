function descendingOrder(n) {
  const string = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("")
  return Number(string)
}
