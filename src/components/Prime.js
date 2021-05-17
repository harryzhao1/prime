import React, { useState } from 'react'
import { Box, TextField, Typography } from '@material-ui/core'
import { isPrime } from '../util/isPrime'

const Prime = () => {
  const [primeNumbers, setPrimeNumbers] = useState([])
  const [inputPrime, setInputPrime] = useState()
  const [isInvalidInput, setIsInvalidInput] = useState(false)
  const MAX_NUMBER = 100000

  const calculatePrimes = (e) => {
    const input = e.target.value
    setInputPrime(input)

    if (Number.isNaN(input) || input > MAX_NUMBER) {
      setIsInvalidInput(true)
      return
    } else {
      setIsInvalidInput(false)
    }

    const primes = []
    let curNumber = 2
    while (curNumber < input) {
      if (isPrime(curNumber)) {
        primes.push(curNumber)
      }
      curNumber += 1
    }

    setIsInvalidInput(false)
    setPrimeNumbers(primes)
  }

  return (
    <Box
      border={1}
      position="absolute"
      width="50%"
      height="50%"
      left="25%"
      top="25%"
      p="0.5rem"
    >
      <Box mb="0.5rem">
        <Typography>
          Print a list of prime smaller than the input below (less than {MAX_NUMBER}):
        </Typography>
      </Box>

      <TextField placeholder="Enter a Number" onChange={calculatePrimes} />

      <Box
        overflow="auto"
        maxHeight="75%"
      >
        {isInvalidInput
          ? (
          <Typography>
            Please enter a number or try something smaller.
          </Typography>
            )
          : (
          <Typography>
            {inputPrime ? `Primes less than ${inputPrime} are: ${primeNumbers.join(', ')}` : ''}
          </Typography>
            )}
      </Box>
    </Box>
  )
}

export default Prime
