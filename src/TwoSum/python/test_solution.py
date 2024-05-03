import pytest
from solution import Solution

def test_two_sum():
    sol = Solution()
    assert sol.two_sum([2, 7, 11, 15], 9) == [0, 1], "Should return indices [0, 1]"
    assert sol.two_sum([3, 2, 4], 6) == [1, 2], "Should return indices [1, 2]"
    assert sol.two_sum([3, 3], 6) == [0,1], "Should return indices [0, 2]"
