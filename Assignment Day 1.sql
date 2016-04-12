# Assignment 1 day 1

SELECT Orders.OrderID, Orders.EmployeeID, OrderDetails.Quantity, Products.ProductName, Employees.LastName
FROM Orders
JOIN OrderDetails
ON Orders.OrderID = OrderDetails.OrderID
JOIN Products
ON OrderDetails.ProductID = Products.ProductID
JOIN Employees
On Orders.EmployeeID = Employees.EmployeeID

# assignment 2 day 1

CREATE TABLE Mutations
(
  Chromosome character(2),
  Genomic_position character(15),
  Sample_ID character(255),
  Reference_allele character(255),
  Alternative_allele character(255),
  GT character(3),
  type_of_variant character (255)
  );
  

CREATE TABLE Samples
(
  Sample_ID character (255),
  Etnicity character (255),
  Gender character (255),
  BMI float(3),
  Smoking_status character (255), 
  Age integer (3),
  Height_in_cm integer (3),
  Sequencing_platform character (255),
  Original_Study character (255),
  Number_of_variants integer (255),
  Mutation_ID character (15)
  );
  
