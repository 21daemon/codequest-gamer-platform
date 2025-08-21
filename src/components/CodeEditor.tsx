import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Play, Check, X, RotateCcw, Lightbulb } from "lucide-react";
import { executeCode } from "@/utils/codeExecutor";
import { toast } from "@/hooks/use-toast";

interface TestCase {
  input: any[];
  expected: any;
}

interface CodeEditorProps {
  initialCode: string;
  language: string;
  onRun: (code: string) => void;
  testCases?: TestCase[];
  challenge?: any;
}

const CodeEditor = ({ initialCode, language, onRun, testCases = [], challenge }: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<Array<{passed: boolean, input: any[], expected: any, actual: any}>>([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const runTests = () => {
    if (!testCases.length) return [];
    
    const results: Array<{passed: boolean, input: any[], expected: any, actual: any}> = [];
    
    try {
      // Create a function from the code
      const func = new Function(`
        ${code}
        return typeof ${getFunctionName(code)} !== 'undefined' ? ${getFunctionName(code)} : null;
      `)();
      
      if (!func) {
        throw new Error("Function not found");
      }
      
      testCases.forEach((testCase) => {
        try {
          const actual = func(...testCase.input);
          const passed = JSON.stringify(actual) === JSON.stringify(testCase.expected);
          results.push({
            passed,
            input: testCase.input,
            expected: testCase.expected,
            actual
          });
        } catch (err) {
          results.push({
            passed: false,
            input: testCase.input,
            expected: testCase.expected,
            actual: err instanceof Error ? err.message : 'Error'
          });
        }
      });
    } catch (err) {
      // If we can't create the function, all tests fail
      testCases.forEach((testCase) => {
        results.push({
          passed: false,
          input: testCase.input,
          expected: testCase.expected,
          actual: 'Code execution error'
        });
      });
    }
    
    return results;
  };

  const getFunctionName = (code: string): string => {
    const match = code.match(/function\s+(\w+)/);
    return match ? match[1] : 'main';
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput([]);
    setError("");
    setTestResults([]);

    try {
      // Run basic code execution
      const result = executeCode(code);
      if (result.error) {
        setError(result.error);
      } else {
        setOutput(result.output);
      }

      // Run tests if available
      if (testCases.length > 0) {
        const results = runTests();
        setTestResults(results);
        
        const allPassed = results.every(r => r.passed);
        if (allPassed && results.length > 0) {
          toast({
            title: "All tests passed! 🎉",
            description: "Great job! Your solution works correctly.",
          });
          onRun(code);
        } else {
          toast({
            variant: "destructive",
            title: "Some tests failed",
            description: "Check the test results below and try again.",
          });
        }
      } else {
        onRun(code);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    }

    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
    setError("");
    setTestResults([]);
  };

  return (
    <Card className="w-full quest-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            Code Editor
            <Badge variant="secondary">{language}</Badge>
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2"
            >
              <Lightbulb className="h-4 w-4" />
              Hint
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={resetCode}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
            <Button onClick={handleRun} disabled={isRunning} className="quest-button">
              <Play className="mr-2 h-4 w-4" />
              {isRunning ? "Running..." : "Run Code"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {showHint && challenge?.description && (
          <Card className="bg-quest-accent/10 border-quest-accent/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Hint:</strong> {challenge.description}
              </p>
            </CardContent>
          </Card>
        )}

        <div className="bg-muted/50 p-4 rounded-lg border">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full min-h-[300px] bg-transparent border-none outline-none font-mono text-sm resize-none"
            placeholder="Write your code here..."
          />
        </div>
        
        {/* Test Results */}
        {testResults.length > 0 && (
          <Card className="border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                Test Results
                <Badge variant={testResults.every(r => r.passed) ? "default" : "destructive"}>
                  {testResults.filter(r => r.passed).length}/{testResults.length} Passed
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {testResults.map((result, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      result.passed 
                        ? 'bg-quest-success/10 border-quest-success/20' 
                        : 'bg-destructive/10 border-destructive/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Test {index + 1}</span>
                      {result.passed ? (
                        <Check className="h-4 w-4 text-quest-success" />
                      ) : (
                        <X className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                    <div className="text-xs space-y-1">
                      <div><strong>Input:</strong> {JSON.stringify(result.input)}</div>
                      <div><strong>Expected:</strong> {JSON.stringify(result.expected)}</div>
                      <div><strong>Got:</strong> {JSON.stringify(result.actual)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Console Output */}
        {output.length > 0 && (
          <Card className="bg-quest-success/10 border-quest-success/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-quest-success flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Console Output
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm font-mono">
                {output.join('\n')}
              </pre>
            </CardContent>
          </Card>
        )}
        
        {/* Error Display */}
        {error && (
          <Card className="bg-destructive/10 border-destructive/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-destructive flex items-center">
                <X className="mr-2 h-4 w-4" />
                Error
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm font-mono text-destructive">{error}</pre>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default CodeEditor;