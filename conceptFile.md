1. The primitive types like boolean, number, string can be either primitive or an object depending on the way they were created.
   ex:  
   a. let number = 23;
   b. let number1 =Number(100);
   -- The number and number1 are primitives i.e numbers. Their "typeof" is "number"
   c.let number2 = new Number(100);
   d.let number3 = new Object(90);
   e. let number4 =Object(45);
   -- The number2, number3 and number4 are objects. Their "typeof" is "object".

2. a. let name="mahesh";
   b. let name1 = String("jim halpert");
   -- name and name1 are primitives i.e strings i.e. string literals. Their "typeof" is "string".
   c. let name2 = new String("kevin malone");
   d. let name3 = Object("pam halpert");
   e. let name4 = new Object("dwight shrute");
   -- name2,name3 and name4 are objects i.e. string objects. Thier "typeof" is object.
