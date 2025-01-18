# TypeScript Function Overloading and Optional Parameter Error Handling

This repository demonstrates a subtle bug in TypeScript related to function overloading and optional parameters. The challenge lies in providing clear and informative error messages when parameters are omitted or misused.

## Bug Description
The `greet` function is designed to take a person's name and a date.  If you call the function without any parameters, or with parameters of incorrect type, the compiler might not provide immediately obvious messages for the user. 

## How to Reproduce
1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the resulting JavaScript code.
4. Observe the behavior of the function with different inputs. 

## Solution
The solution file (`bugSolution.ts`) demonstrates how to effectively improve the error handling in TypeScript functions by utilizing optional parameters, type guards, and assertions to provide more specific error information when necessary. It improves the code by giving more descriptive messages for the user. 