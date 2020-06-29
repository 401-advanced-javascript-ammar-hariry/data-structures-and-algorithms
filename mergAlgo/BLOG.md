### Challenge Summary
merge Sort ``MergeSort`` is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves .

### Challenge Description
based on the Pseudo-code create a working code , add tests to it and create a visual step of ``merge sort`` algorithm  


### Approach & Efficiency
- create ``mergeSort()`` function that take an array as input and sort it using merge method .

### Big O notation
the BigO for the time is : O(nlogn) since we devided the hole algorthim to simple phases.

### Pseudo-code

````
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
  ````

### tracing:
![tracing](https://i.ibb.co/StjgP4L/20200630-005125.jpg)
