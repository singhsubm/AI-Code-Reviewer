It looks like there's a **typo** in the `sum` function you provided!

Here's the corrected version:

```python
def sum(a, b, c):
    # The original line was: return a + b + z        
    # 'z' was not defined as an input parameter.     
    # It should be 'c' if you intend to sum the three parameters.
    return a + b + c

# Example usage:
result = sum(1, 2, 3)
print(result) # Output: 6

result2 = sum(10, 20, 5)
print(result2) # Output: 35
```

**Explanation of the fix:**

Your original `return` statement was `return a + b + z`. However, `z` was not one of the parameters (`a`, `b`, `c`) passed into the `sum` function. To correctly sum the three input numbers, you should use `c` instead of `z`.