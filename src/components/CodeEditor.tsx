
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PlayIcon, RefreshCw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { executeCode } from '@/utils/codeExecutor';
import { toast } from '@/hooks/use-toast';

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  onRun?: (code: string) => void;
  onReset?: () => void;
  className?: string;
  testCases?: any[];
}

const CodeEditor = ({
  initialCode = '// Write your code here\nconsole.log("Hello, CodeQuest!");',
  language = 'javascript',
  onRun,
  onReset,
  className,
  testCases,
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  
  const handleRunCode = () => {
    try {
      const result = executeCode(code);
      
      setOutput([
        '> Running code...',
        ...(result.output || []),
        result.error ? `> Error: ${result.error}` : '> Execution completed successfully'
      ]);
      
      if (!result.error && onRun) {
        onRun(code);
      }
    } catch (error) {
      setOutput([
        '> Error executing code:',
        `> ${error instanceof Error ? error.message : 'Unknown error occurred'}`
      ]);
      
      toast({
        variant: "destructive",
        title: "Code execution failed",
        description: error instanceof Error ? error.message : "An error occurred while running your code",
      });
    }
  };
  
  const handleResetCode = () => {
    setCode(initialCode);
    setOutput([]);
    
    if (onReset) {
      onReset();
    }
  };
  
  return (
    <div className={`quest-card h-full flex flex-col ${className}`}>
      <Tabs defaultValue="code" className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-quest-card">
            <TabsTrigger value="code">Code Editor</TabsTrigger>
            <TabsTrigger value="output">Output</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className="text-quest-light"
              onClick={handleResetCode}
            >
              <RefreshCw size={16} className="mr-1" /> Reset
            </Button>
            <Button 
              className="bg-quest-success hover:bg-quest-success/80"
              size="sm"
              onClick={handleRunCode}
            >
              <PlayIcon size={16} className="mr-1" /> Run
            </Button>
          </div>
        </div>
        
        <TabsContent value="code" className="flex-1 flex flex-col space-y-4 mt-0">
          <div className="bg-quest-dark rounded-md flex-1 overflow-hidden">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full p-4 bg-transparent text-white font-mono text-sm resize-none focus:outline-none"
              spellCheck="false"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="output" className="flex-1 flex flex-col space-y-4 mt-0">
          <div className="bg-quest-dark rounded-md p-4 flex-1 overflow-auto font-mono text-sm">
            {output.length > 0 ? (
              output.map((line, index) => (
                <div key={index} className="mb-1">
                  <span className={line.startsWith('> Error') ? 'text-quest-error' : 'text-green-400'}>
                    {line}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-quest-light italic">Run your code to see output here</div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodeEditor;
