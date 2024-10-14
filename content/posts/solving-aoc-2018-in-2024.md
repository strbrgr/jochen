---
title: Solving AoC 2018 in 2024
date: 2024-10-11
tags:
  - code
  - performance
---

I'm currently working through [Advent of Code](https://adventofcode.com/) whenever I get the chance, alongside my day-to-day activities. I chose to start with the 2018 challenges because of the excellent repository by [BurntSushi](https://github.com/BurntSushi/advent-of-code/tree/master). When else do you get the opportunity to compare your solutions with some of the best?

[Day 1](#day-1)
[Day 2](#day-2)
[Day 3](#day-3)
[Day 4](#day-4)
[Day 5](#day-5)


## Day 1
My first AoC challenge ever. So far most coding challenges were either on Codewars, Leetcode, or Exercism. I think forcing yourself to do these every once in a while is important, but I have not been very happy with the format of the mentioned options. While I dreaded those, doing AoC challenges is a lot of fun.

```rust
use std::collections::HashSet;
use std::fs;

fn main() {
    let mut set = HashSet::new();
    let message: String = fs::read_to_string("input.txt")
        .expect("Could not read content of file.");
    let mut sum = 0;
    set.insert(0);

    loop {
        for l in message.lines() {
            sum += l.parse::<i32>().expect("Could not parse to type i32");

            if set.contains(&sum) {
                println!("{}", sum);
                return;
            }

            set.insert(sum);
        }
    }
}
```
---

## Day 2
I think the code is overall okay. Sort of imperative and not very idiomatic but at this stage, I am happy to get through the challenges. Idiomatic code will come with time. I could have definitely improved variable naming for my `HashMap` and `HashSet`.

```rust
use std::collections::{HashMap, HashSet};

fn main() {
    let input = std::fs::read_to_string("input/final.txt").expect("Could not read file");
    let result_1 = part_1(&input);
    let result_2 = part_2(&input);
    println!("Result for Part 1 is {}", result_1);
    println!("Result for Part 2 is {}", result_2);
}

fn part_1(input: &str) -> i32 {
    let mut two = 0;
    let mut three = 0;
    for line in input.lines() {
        let mut dic = HashMap::new();
        let mut set = HashSet::new();

        for ch in line.chars() {
            dic.entry(ch).and_modify(|ch| *ch += 1).or_insert(1);
        }

        for count in dic.values() {
            if *count == 2 {
                set.insert(2);
            }

            if *count == 3 {
                set.insert(3);
            }
        }

        for results in set.iter() {
            match *results {
                2 => two += 1,
                3 => three += 1,
                _ => println!("Don't care about the value."),
            }
        }
    }
    two * three
}

fn part_2(input: &str) -> String {
    let mut result = String::from("");
    let mut input_content = Vec::new();
    for line in input.lines() {
        input_content.push(line);
    }
    input_content.sort();

    for n in 0..input_content.len() - 1 {
        let a = input_content[n];
        let b = input_content[n + 1];
        let count = a.chars().zip(b.chars()).filter(|&(a, b)| a != b).count();

        if count == 1 {
            result = a
                .chars()
                .zip(b.chars())
                .filter(|&(a, b)| a == b)
                .map(|(char1, _)| char1)
                .collect();
        }
    }

    result
}
```
---

## Day 3
As you can see, I have a lot of todos left in this challenge that I want to address at some point. Looking at it a few days later, I should have not used index accessing with the vectors. Parsing could see some improvements as well. Ideally I want to make a call to some parsing function that then returns the necessary data for each `l in input.lines()` iteration. That would bring the iterations down from 1.3m to 50k.
```rust
use std::{collections::HashSet, fs::read_to_string};

// TODO: Create stryct for a Cell in the matrix
// TODO: Impl the new() and add_id() for struct
// TODO: Split_once()
// TODO: Proper error handling with split once and parse
// TODO: Change direct access via index values, use tuples and destructuring

fn main() {
    // TODO: Spread the logic into two parts and create matrix in here
    let input = read_to_string("input/final.txt").expect("Could not read file");
    let part_1 = part_1(&input);
    println!("Result for part 1: {}", part_1);
}

fn part_1(input: &str) -> i32 {
    let mut matrix: Vec<Vec<(i32, HashSet<&str>)>> = vec![vec![(0, HashSet::new()); 1000]; 1000];
    let mut count = 0;

    for l in input.lines() {
        let subset: Vec<&str> = l.split(" @ ").collect();
        let id = &subset[0][1..];
        let coordinates: Vec<&str> = subset[1].split(": ").collect();
        let distances: Vec<&str> = coordinates[0].split(',').collect();
        let sizes: Vec<&str> = coordinates[1].split('x').collect();

        let column_start = distances[0].parse::<usize>().expect("Could not convert");
        let row_start = distances[1].parse::<usize>().expect("Could not convert");
        let width = sizes[0].parse::<usize>().expect("Could not convert");
        let height = sizes[1].parse::<usize>().expect("Could not convert");
        let column_end = column_start + width;
        let row_end = row_start + height;

        (column_start..column_end).for_each(|i| {
            (row_start..row_end).for_each(|j| {
                matrix[i][j].0 += 1;
                matrix[i][j].1.insert(id);
            })
        });
    }

    let mut ones: HashSet<&str> = HashSet::new();
    let mut twos: HashSet<&str> = HashSet::new();

    for row in &matrix {
        for element in row {
            let count_matrix = element.0;
            if count_matrix >= 2 {
                count += 1;
                twos.extend(&element.1);
            }
            if count_matrix < 2 {
                ones.extend(&element.1);
            }
        }
    }

    let result: HashSet<_> = ones.difference(&twos).collect();

    println!("{:?}", result);
    count
}
```
---

## Day 4
This was a lot of code. Pretty sure the logic between part 1 and part 2 is sort of duplicated, so that should be improved. I'm also not happy about the parsing and splitting to extract the timestamps. I should probably look at regex or a library like [nom](https://docs.rs/nom/latest/nom/).
```rust
use std::error::Error;
use std::result;
use std::{collections::HashMap, fs};

type Result<T> = result::Result<T, Box<dyn Error>>;
type GuardSleepFrequency = HashMap<usize, [usize; 60]>;

fn main() -> Result<()> {
    let input = fs::read_to_string("input/final.txt")?;
    let mut lines: Vec<&str> = input.lines().collect();
    // TODO: Handle expect
    lines.sort_by_key(|line| extract_date(line).expect("Invalid format"));

    // Sleep stats keeps track of Guard Id and minutes sleeping and their count
    let mut sleep_stats: GuardSleepFrequency = HashMap::new();
    let mut sleep_start = 0usize;
    let mut id = 0usize;

    // Loops over each line and keeps track of a guard sleep in sleep_stats
    for line in &lines {
        // Action should be action Type, should have id or None
        let (current_minute, action) = parse_line(line)?;
        match action {
            _ if action.starts_with("Guard ") => {
                let (_, id_content) = action
                    .split_once(" #")
                    .ok_or("Could not split Guard info")?;
                let (guard_id, _) = id_content.split_once(' ').ok_or("Could not split id")?;
                id = guard_id.parse::<usize>()?;
            }

            _ if action.starts_with("falls asleep") => {
                sleep_start = current_minute;
            }

            _ if action.starts_with("wakes up") => {
                let minute_sleep_count = sleep_stats.entry(id).or_insert([0; 60]);

                if current_minute < sleep_start {
                    (sleep_start..60).for_each(|m| {
                        minute_sleep_count[m] += 1;
                    });

                    (0..current_minute).for_each(|m| {
                        minute_sleep_count[m] += 1;
                    });
                } else {
                    (sleep_start..current_minute).for_each(|m| {
                        minute_sleep_count[m] += 1;
                    })
                }
            }

            _ => {}
        }
    }

    match part_1(&sleep_stats) {
        Ok(result) => println!("Part 1 result: {}", result),
        Err(err) => println!("There was an error in Part 1: {}", err),
    };

    match part_2(&sleep_stats) {
        Ok(result) => println!("Part 2 result: {}", result),
        Err(err) => println!("There was an error in Part 2: {}", err),
    };
    Ok(())
}

fn part_1(frequency: &GuardSleepFrequency) -> Result<usize> {
    let mut max_guard_sleeping = 0usize;
    let mut sleep_sum = 0usize;

    for (k, v) in frequency.iter() {
        let current_sum: usize = v.iter().sum();
        if current_sum > sleep_sum {
            max_guard_sleeping = *k;
            sleep_sum = current_sum;
        }
    }

    let minute_frequency = match frequency.get(&max_guard_sleeping) {
        Some(freq) => freq,
        None => return Err(From::from("Could not retrieve frequency for a guard")),
    };

    let max_minute = minute_frequency
        .iter()
        .enumerate()
        .max_by_key(|(_, &value)| value)
        .map(|(idx, _)| idx)
        .ok_or("Could not get maximum minute asleep")?;

    Ok(max_guard_sleeping * max_minute)
}

// TODO: This is not very idiomatic. Use flatmap over guard and minutes, enumerate over minutes and
// map them into a tuple of guard, minute, count. Get the max by key of count, and map that into
// count * minute
fn part_2(frequency: &GuardSleepFrequency) -> Result<usize> {
    let mut current_max = usize::MIN;
    let mut guard = 0usize;
    let mut max_minute_idx = 0usize;

    for (k, v) in frequency.iter() {
        let max_idx = v
            .iter()
            .enumerate()
            .max_by_key(|(_, &value)| value)
            .map(|(idx, _)| idx)
            .ok_or("Could not get maximum minute asleep")?;

        if let Some(minute_count) = frequency.get(k) {
            if let Some(minute) = minute_count.get(max_idx) {
                if *minute > current_max {
                    current_max = *minute;
                    guard = *k;
                    max_minute_idx = max_idx;
                }
            }
        }
    }
    Ok(guard * max_minute_idx)
}

fn extract_date(line: &str) -> Result<&str> {
    let date = line
        .split_once('[')
        .and_then(|(_, rest)| rest.split_once(']'))
        .map(|(date, _)| date.trim())
        .ok_or("Invalid format: date not found in brackets")?;

    Ok(date)
}

fn parse_line(line: &str) -> Result<(usize, &str)> {
    let minute_hour = line
        .split_whitespace()
        .nth(1)
        .ok_or("Can't split on first whitespace")?;
    let minute_str = minute_hour
        .trim_end_matches(']')
        .split(':')
        .nth(1)
        .ok_or("Can't split on colon")?;
    let minute = minute_str
        .parse::<usize>()
        .map_err(|_| "Failed to parse into i32".to_string())?;
    let action = line
        .split("] ")
        .nth(1)
        .ok_or("Can't split on second whitespace")?;

    Ok((minute, action))
}
```
---

## Day 5
I got side-tracked by starting the implementation with a sliding window approach. Turns out that this was not the best idea. I simple stack approach was all I needed. Part 2 felt pretty straight forward. I solved it by looping over a range of 0..26 while grabbing the numerical value of a character via: 
```rust
let lower = (b'a' + i) as char;
let upper = (b'A' + i) as char;
```
Lower and upper were then used to compare against the current character.

Performance wise this is not an ideal approach with it's time complexity of O(m\*n), where m is the length of the alphabet and n the input size. In our example 26 * 50000. If anyone knows of a solution bringing the iterations down from 1.3m to 50k, please let me know!!

Also got into testing a bit, which was neat.

```rust
use std::{error, fs};

type Result<T> = std::result::Result<T, Box<dyn error::Error>>;

fn main() -> Result<()> {
    let input = fs::read_to_string("input/final.txt")?.trim().to_string();

    match part_1(&input) {
        Ok(result) => println!("Part 1 result: {}", result),
        Err(err) => return Err(err),
    }

    match part_2(&input) {
        Ok(result) => println!("Part 2 result: {}", result),
        Err(err) => return Err(err),
    }
    Ok(())
}

fn part_1(input: &str) -> Result<usize> {
    let cleaned_stack_length = react(input);
    Ok(cleaned_stack_length)
}

fn part_2(input: &str) -> Result<i32> {
    let mut result = i32::MAX;

    for i in 0..26 {
        let mut stack = String::from("");
        let lower = (b'a' + i) as char;
        let upper = (b'A' + i) as char;

        for char in input.chars() {
            if char != lower && char != upper {
                stack.push(char);
            }
        }

        let length = react(&stack);

        let length = i32::try_from(length).unwrap();
        if length < result {
            result = length;
        }
    }

    Ok(result)
}

fn react(input: &str) -> usize {
    let mut stack = String::from("");

    for char in input.chars() {
        if let Some(top) = stack.chars().last() {
            if will_units_react(char, top) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            stack.push(char);
        }
    }
    stack.len()
}

fn will_units_react(x: char, y: char) -> bool {
    (x.is_lowercase() && y.is_uppercase() && x.to_ascii_uppercase() == y)
        || (x.is_uppercase() && y.is_lowercase() && x == y.to_ascii_uppercase())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn will_units_react_test() {
        assert!(will_units_react('c', 'C'));
        assert!(will_units_react('C', 'c'));
        assert!(will_units_react('B', 'b'));
        assert!(will_units_react('b', 'B'));
    }

    #[test]
    fn will_units_not_react_test() {
        assert!(!will_units_react('a', 'a'));
        assert!(!will_units_react('B', 'B'));
        assert!(!will_units_react('a', 'B'));
        assert!(!will_units_react('A', 'b'));
    }
}

```
