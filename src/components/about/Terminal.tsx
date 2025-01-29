import { useState, useRef, useEffect } from 'react';

const Terminal = () => {
  // State for managing command input and output history
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([
    {
      type: 'system',
      content: 'Type help to see available commands.',
    },
  ]);

  // Reference for auto-scrolling
  const terminalRef = useRef<HTMLDivElement>(null);

  // Available commands
  const commands = {
    help: () => 'Available commands: about, contact, clear',
    clear: () => {
      setCommandHistory([]);
      console.log('Terminal cleared');
      return null;
    },
    about: () =>
      'Huge sport & tech enthusiast. I love to build things and learn new stuf, constantly improving myself and exploring new tools and frameworks.',
    contact: () => {
      return `📧 Email: arttu.henriksson01@gmail.com`;
    },
    
  };

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const command = commands[trimmedCmd as keyof typeof commands];

    if (command) {
      const output = command();
      if (output !== null) {
        setCommandHistory((prev) => [
          ...prev,
          { type: 'command', content: `> ${cmd}` },
          { type: 'output', content: output },
        ]);
      }
    } else {
      setCommandHistory((prev) => [
        ...prev,
        { type: 'command', content: `> ${cmd}` },
        {
          type: 'error',
          content: `${cmd} is invalid command. Try to type "help" to see available commands.`,
        },
      ]);
    }
  };

  // Handle input submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      executeCommand(inputValue.trim().toLowerCase());
      setInputValue('');
    }
  };

  // Auto-scroll to bottom when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);
  return (
    <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-lg overflow-hidden shadow-lg border border-zinc-700">
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 px-4 py-3 flex items-center border-b border-zinc-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></div>
        </div>
        <div className="ml-4 text-zinc-400 text-xs sm:text-sm font-mono">
          Terminal
        </div>
      </div>
      <div
        ref={terminalRef}
        className="h-60 sm:h-80 lg:h-96 overflow-y-auto p-4 font-mono text-xs sm:text-sm "
      >
        {commandHistory.map((entry, index) => (
          <div
            key={index}
            className={`mb-2 ${
              entry.type === 'error'
                ? 'text-red-400'
                : entry.type === 'system'
                ? 'text-white'
                : entry.type === 'command'
                ? 'text-blue-500'
                : 'text-zinc-300'
            }`}
          >
            <p className="whitespace-pre-wrap font-mono leading-relaxed">
              {entry.content}
            </p>
          </div>
        ))}
        <form
          onSubmit={handleSubmit}
          className="flex items-center space-x-3 mt-4"
        >
          <span className="text-blue-500">guest@:/$ ❯</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent text-zinc-200 placeholder-zinc-700 focus:outline-none focus:placeholder-zinc-400"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
