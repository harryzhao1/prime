const isPrime = (input) => {
  if (isNaN(input)) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      return false
    }
  }
  return true
}

export { isPrime }
