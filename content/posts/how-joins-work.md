---
title: How joins work
eleventyExcludeFromCollections: true
tags: 
  - post
  - code
---

How do Joins in SQL work? Let's figure it out.

There are 4 possible JOIN Types:

1. INNER JOIN
2. LEFT JOIN
3. RIGHT JOIN
4. FULL JOIN

## INNER JOIN

This is the most common `JOIN` in SQL. Basically it combines content from two tables dependent on a specified `JOIN` condition.

Consider two tables: `orders` and `customers`.

**Table: orders**

| order_id | customer_id | total_amount |
|----------|-------------|--------------|
| 1        | 101         | 150.00       |
| 2        | 102         | 200.00       |
| 3        | 103         | 100.00       |

**Table: customers**

| customer_id | name      |
|-------------|-----------|
| 101         | John Doe  |
| 102         | Jane Smith|
| 103         | Alice Lee |

Suppose we want to retrieve the names of customers along with their order details. We can achieve this by using an `INNER JOIN`:

```sql
SELECT customers.name, orders.order_id, orders.total_amount
FROM customers
INNER JOIN orders
ON customers.customer_id = orders.customer_id;
```

This query will produce the following result:

| name       | order_id | total_amount |
|------------|----------|--------------|
| John Doe   | 1        | 150.00       |
| Jane Smith | 2        | 200.00       |
| Alice Lee  | 3        | 100.00       |



this is a list
- jkasdf
-as
