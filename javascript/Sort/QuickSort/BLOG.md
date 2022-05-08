# quick Sort

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot

# Pseudo Code


    ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

      ALGORITHM Partition(arr, left, right)

    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

     ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp


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
