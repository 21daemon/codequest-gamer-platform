
interface ExecutionResult {
  output: string[];
  error?: string;
}

export const executeCode = (code: string): ExecutionResult => {
  try {
    // Create a safe context for code execution
    const output: string[] = [];
    const consoleLog = console.log;
    console.log = (...args) => {
      output.push(args.join(' '));
    };

    // Execute the code
    const result = new Function(code)();
    
    // Restore console.log
    console.log = consoleLog;

    return { output };
  } catch (error) {
    return {
      output: [],
      error: error instanceof Error ? error.message : 'An error occurred'
    };
  }
};
