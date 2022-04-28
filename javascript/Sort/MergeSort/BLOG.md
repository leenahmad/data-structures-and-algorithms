
# Merge Sort

 merge sort  is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.

# Pseudo Code


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


# step by step

array = [8,4,23,42,16,15]

step 1

so for first step merge sort will divide the array into to two equal array so this array =[8,4,23,42,16,15] will be like this 

[8,4,23] [42,16,15]

step 2 

this step will no effect on the array so will just divide in two arrays so this array =[8,4,23,42,16,15] will be like this 

[8,4,23] [42,16,15]

step 3

here in this step will divide all elements like this 


[8][4][23] [42][16][15]

step 4

here in this step we will sort the array first compare each elemets and merge the sort arrays 


step 5 

the array should like be this when do the merge 

[4,8,15,16,23,42]


# Efficiency 

- time complexity O(n * log n) because we use loops and while loop 
- spacie complexity O(n)
