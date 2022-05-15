# code challenge 30 

# hashtable

**Assignment**

***Implement a Hashtable Class with the following methods:***

- set
    - Arguments: key, value
    - Returns: nothing
    - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
    - Should a given key already exist, replace its value from the value argument given to this method.
- get
    - Arguments: key
    - Returns: Value associated with that key in the table
- contain
    - Arguments: key
    - Returns: Boolean, indicating if the key exists in the table already.
- keys
    - Returns: Collection of keys
- hash
    - Arguments: key
    - Returns: Index in the collection for that key


# Approach & Efficiency

- set: 
    - space O(1)
    - time O(1)
- get: 
    - space O(1)
    - time O(1) - time O(n) if there is a collision
- contains:   
    - space O(1)
    - time O(1)
- hash:
    - space O(1)
    - time O(1)

# API

- set (key , value) as arguments : This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
- get (key) as arguments : should Returns: Value associated with that key in the table
- contains (key) as arguments : should Returns: Boolean, indicating if the key exists in the table already
- hash key) as arguments : should Returns: Index in the collection for that key



# whiteboard  

![hashtables](./images/codechallenge30.PNG)

# tests

![hashtables](./images/test30.PNG)