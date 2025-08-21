-- Create challenges table to store coding challenges
CREATE TABLE public.challenges (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  category TEXT NOT NULL,
  points INTEGER NOT NULL DEFAULT 10,
  starter_code TEXT,
  solution_code TEXT,
  test_cases JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create profiles table to store user information and stats
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  username TEXT,
  xp INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  streak_days INTEGER NOT NULL DEFAULT 0,
  last_challenge_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create completed_challenges to track user progress
CREATE TABLE public.completed_challenges (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  challenge_id INTEGER REFERENCES public.challenges NOT NULL,
  code TEXT NOT NULL,
  xp_earned INTEGER NOT NULL DEFAULT 0,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, challenge_id)
);

-- Function to increment XP and handle level-ups
CREATE OR REPLACE FUNCTION public.increment_user_xp(
  user_id_param UUID,
  xp_amount INTEGER
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_xp INTEGER;
  current_level INTEGER;
  xp_to_level_up INTEGER;
BEGIN
  -- Get current user stats
  SELECT xp, level INTO current_xp, current_level
  FROM profiles
  WHERE id = user_id_param;
  
  -- Calculate XP needed for next level (100 * level^1.5)
  xp_to_level_up := FLOOR(100 * POWER(current_level, 1.5));
  
  -- Add XP
  current_xp := current_xp + xp_amount;
  
  -- Check for level ups
  WHILE current_xp >= xp_to_level_up LOOP
    current_level := current_level + 1;
    current_xp := current_xp - xp_to_level_up;
    xp_to_level_up := FLOOR(100 * POWER(current_level, 1.5));
  END LOOP;
  
  -- Update profile
  UPDATE profiles
  SET 
    xp = current_xp,
    level = current_level,
    updated_at = NOW()
  WHERE id = user_id_param;
END;
$$;

-- Create trigger function to create profiles for new users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$;

-- Create trigger to call the function when a user is created
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Add comprehensive set of coding challenges
INSERT INTO public.challenges (title, description, difficulty, category, points, starter_code, solution_code, test_cases)
VALUES 
  ('Hello World', 'Write a function that returns "Hello, World!"', 'Beginner', 'JavaScript', 5, 
   'function helloWorld() {\n  // Write your code here\n}',
   'function helloWorld() {\n  return "Hello, World!";\n}',
   '[{"input": [], "expected": "Hello, World!"}]'::jsonb),
   
  ('Sum Two Numbers', 'Create a function that adds two numbers and returns the result.', 'Beginner', 'JavaScript', 10, 
   'function sum(a, b) {\n  // Write your code here\n}',
   'function sum(a, b) {\n  return a + b;\n}',
   '[{"input": [2, 3], "expected": 5}, {"input": [10, -5], "expected": 5}]'::jsonb),
   
  ('Reverse a String', 'Write a function that reverses a string.', 'Beginner', 'JavaScript', 15, 
   'function reverseString(str) {\n  // Write your code here\n}',
   'function reverseString(str) {\n  return str.split("").reverse().join("");\n}',
   '[{"input": ["hello"], "expected": "olleh"}, {"input": ["JavaScript"], "expected": "tpircSavaJ"}]'::jsonb),
   
  ('FizzBuzz', 'Write a function that returns "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.', 'Intermediate', 'JavaScript', 20, 
   'function fizzBuzz(n) {\n  // Write your code here\n}',
   'function fizzBuzz(n) {\n  if (n % 15 === 0) return "FizzBuzz";\n  if (n % 3 === 0) return "Fizz";\n  if (n % 5 === 0) return "Buzz";\n  return n;\n}',
   '[{"input": [3], "expected": "Fizz"}, {"input": [5], "expected": "Buzz"}, {"input": [15], "expected": "FizzBuzz"}, {"input": [7], "expected": 7}]'::jsonb),
   
  ('Find Maximum', 'Write a function to find the maximum number in an array.', 'Intermediate', 'JavaScript', 20, 
   'function findMax(arr) {\n  // Write your code here\n}',
   'function findMax(arr) {\n  return Math.max(...arr);\n}',
   '[{"input": [[1, 3, 2]], "expected": 3}, {"input": [[-1, -5, -2]], "expected": -1}]'::jsonb),
   
  ('Two Sum', 'Given an array of integers and a target sum, return indices of two numbers that add up to target.', 'Advanced', 'JavaScript', 30, 
   'function twoSum(nums, target) {\n  // Write your code here\n}',
   'function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}',
   '[{"input": [[2, 7, 11, 15], 9], "expected": [0, 1]}, {"input": [[3, 2, 4], 6], "expected": [1, 2]}]'::jsonb),
   
  ('Palindrome Check', 'Write a function to check if a string is a palindrome.', 'Beginner', 'JavaScript', 15, 
   'function isPalindrome(s) {\n  // Write your code here\n}',
   'function isPalindrome(s) {\n  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return cleaned === cleaned.split("").reverse().join("");\n}',
   '[{"input": ["racecar"], "expected": true}, {"input": ["hello"], "expected": false}]'::jsonb),
   
  ('Valid Parentheses', 'Given a string containing parentheses, determine if the input string is valid.', 'Advanced', 'JavaScript', 35, 
   'function isValid(s) {\n  // Write your code here\n}',
   'function isValid(s) {\n  const stack = [];\n  const map = { "(": ")", "{": "}", "[": "]" };\n  for (let char of s) {\n    if (map[char]) {\n      stack.push(char);\n    } else {\n      const last = stack.pop();\n      if (map[last] !== char) return false;\n    }\n  }\n  return stack.length === 0;\n}',
   '[{"input": ["()"], "expected": true}, {"input": ["()[]{}"], "expected": true}, {"input": ["(]"], "expected": false}]'::jsonb),
   
  ('Longest Common Prefix', 'Write a function to find the longest common prefix string amongst an array of strings.', 'Intermediate', 'JavaScript', 25, 
   'function longestCommonPrefix(strs) {\n  // Write your code here\n}',
   'function longestCommonPrefix(strs) {\n  if (strs.length === 0) return "";\n  let prefix = strs[0];\n  for (let i = 1; i < strs.length; i++) {\n    while (strs[i].indexOf(prefix) !== 0) {\n      prefix = prefix.substring(0, prefix.length - 1);\n      if (prefix === "") return "";\n    }\n  }\n  return prefix;\n}',
   '[{"input": [["flower", "flow", "flight"]], "expected": "fl"}, {"input": [["dog", "racecar", "car"]], "expected": ""}]'::jsonb),
   
  ('Binary Search', 'Implement binary search algorithm to find target in sorted array.', 'Advanced', 'JavaScript', 40, 
   'function binarySearch(nums, target) {\n  // Write your code here\n}',
   'function binarySearch(nums, target) {\n  let left = 0, right = nums.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (nums[mid] === target) return mid;\n    else if (nums[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}',
   '[{"input": [[1, 3, 5, 7, 9], 5], "expected": 2}, {"input": [[1, 3, 5, 7, 9], 6], "expected": -1}]'::jsonb);

-- Set up Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.completed_challenges ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
  
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Challenges are public
CREATE POLICY "Challenges are viewable by everyone" ON public.challenges
  FOR SELECT USING (true);

-- Completed challenges policies
CREATE POLICY "Users can view their own completed challenges" ON public.completed_challenges
  FOR SELECT USING (auth.uid() = user_id);
  
CREATE POLICY "Users can insert their own completed challenges" ON public.completed_challenges
  FOR INSERT WITH CHECK (auth.uid() = user_id);