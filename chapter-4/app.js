// Q:1 declare 3 variables in one statement.

var name = "yusra khan" , age = 100 , subject = "web development";

// Q:2 declare 5 legal ,5 illigal variables names.
 (LEGAL variables)
1. myVar 
// letter se start ho skta ha 
2. _myVar
// underscore se bhi start ho skta ha
3. $myVar
// dollor sign se bhi hojaega start
4. var123
// num last me askty hen start me nahi 
5. user_name
// ye symbol ya underscore use karskti hun

(ILLIGAL variables)

1. 123var
// num se start nhi hoga
2. my var
// space nahi ayega
3. my-var
// dash ya or koi symbol nahi ayega
4. var
// JS ka apna koi keyword jese var ya koi or variable name nahi ban skta
5. user@name
// special charectors  nahi karskty use


// Q:3 display in browser
// a.
document.write(" “Rules for naming JS variables”  ")

// b.
variable name can only contain letters, numbers, dollor sign and underscore.
//  c.
variables must begin with a letter, underscore or dollor sign.

// d.
variables names are case sensetive

// e.
variable names should not be JS keywords .


// 

document.write("<h1>Rules for naming JS variables");
document.write("Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, _ or $. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords");