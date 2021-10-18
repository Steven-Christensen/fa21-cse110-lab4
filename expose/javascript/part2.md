1. it will print out the value of i. which is 3. This is beacuse it was made with var. therefore, even though it was made in the for loop. itll still exist outside the code block it was made.
2. It will print out its value and not throw and error because it was made using var. this means that it can exist outside of its code block. it was made in the for-loop but can exist outside of it.
3. itll print out its value for the same reasons as number 2
4. the function returns an array that is the new discounted prices. the orignals were 100, 200, 300 and then they were each dicounted by 50% and therefore the array of discounted prices is 50, 100, 150.
5. It will error because i was made using the let keyword. unlike var, let does now allow the variables it makes to cut through code blocks. therefore it was made in the for-loop so it ceases to exist oncse the the for-loop ends.
6.  it wont work for the same reasons above.
7.  it will work because finalPrice was made in the same scope as the console.log call. 
8.  it returns an array of the discounted prices just like the last time this question was asked. since the return call is not happening outside of the code block that discounted was made, it works just fine
9.  Error because let does not cut through code blocks. therefore, since we made i with let in the for-loop its only useful there
10. it prints out the value of length which is 3. 
11. it will return discounted but since it was made with const it will not be altered by the push function and therefore it will return all 0's.
12. 
    a.  student.name will access the name
    b.  student["Grad Year"]
    c.  student.greeting();
    d.  student["Favorite Teacher"].name
    e.
13. 
    a. '32'. since integers map to their exact string represention and you are concacneating a string with +
    b. 1. you cannont preform - on strings so a string - an integer will result in an integer - an integer.
    c. 3 + null. because null is essentially 0
    d. '3null'. because its concacneating the string.
    e. 4. true maps to 1 so its 1 + 3
    f. 0. becaues false maps to 0 and so does null so it is 0 + 0
    g. '3undefined'. because we are adding (concacneating) to the string '3'
    h. NaN. The subrtraction operator has no relationship with strings or the undefined type so there is no application answer
14. 
    a. true. the string '2' becomes a number so it compares 2 and 1
    b. true. because its comparing it the way it compares strings. since 2 has a great value '1' it returns true. very similar to aphabetcal order
    c. true. it turns '2' into the integer 2.
    d. true. This is because === checks for strict equality. They would need to be the same type and value for it to return true.
    e. false. because true maps to 1 and 1 does not equal 2
    f. true. Boolean true evals to true. so true === true returns.
15. == checks for equality not type. === checks for both type and value
17. the array called newArr would be retunred [2, 4, 6]. it is simply calling the call back (multiplying the numbers) and then pushing the result to the newArr
19. 1 4 3 2. the reeason why is because 1 and 4 are not being delayed. 4 and 3 must wait until the next event cycle and even tho 3 has a delay of 0. there is a delay anyway, even tho its extremly small. 2 gets printed last because its has the biggest cycle.
