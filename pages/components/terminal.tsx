import React, { useEffect, useState } from 'react';
import ProcessTerminalInput from '../../Util/terminal';

interface TerminalCmd {
    cmd: any;
    output: any;
}

const Terminal = ({ displayed, setDisplayed }: { displayed: boolean; setDisplayed: any }) => {
    const [maximized, setMaximized] = useState(false);
    const [logs, setLogs] = useState<TerminalCmd[]>([]);
    const [terminalInput, setTerminalInput] = useState('');
    useEffect(() => {
        if (displayed) {
            document.body.addEventListener('click', (e) => {
                if (e.target === document.querySelector('.modal')) setDisplayed(false);
                else document.querySelector<HTMLInputElement>('.terminal-input-command')!.focus();
            });
            document.querySelector<HTMLInputElement>('.terminal-input-command')!.focus();
        }
    }, [displayed]);
    useEffect(() => {
        if (!displayed) {
            setLogs([]);
        }
    }, [displayed]);

    const InputTerminalHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && terminalInput.length) {
            setTerminalInput('');
            if (terminalInput === 'clear') {
                setLogs([]);
                return;
            }
            setLogs((prev) => [...prev, { cmd: terminalInput, output: ProcessTerminalInput(terminalInput) }]);
        }
    };

    const TERMINAL_USER = <span className="terminal-user">ask@justin:~$</span>;
    return (
        <div className="modal" style={{ display: displayed ? 'block' : 'none' }}>
            <div
                className="terminal"
                style={maximized ? { height: 'calc(100% - 4.1rem)', margin: '0px', padding: '2rem', width: '-webkit-fill-available' } : {}}
            >
                <div className="window-manager">
                    <span className="modal-maximize-btn" onClick={() => setMaximized(!maximized)}></span>
                    <span className="modal-close-btn" onClick={() => setDisplayed(false)}></span>
                </div>
                <h3 className="terminal-user">Welcome to my terminal tour!</h3>
                <ul>
                    <li>
                        Type {'"'}help{'"'} to see list of commands available!
                    </li>
                    <li>
                        Type {'"'}exit{'"'} to exit!
                    </li>
                </ul>
                {logs.map((log) => {
                    return (
                        <>
                            <p className="terminal-log terminal-row">
                                {TERMINAL_USER}
                                {log.cmd}
                            </p>
                            <p className="terminal-row">{log.output}</p>
                        </>
                    );
                })}
                <div className="terminal-row" style={{ flexDirection: 'row' }}>
                    {TERMINAL_USER}
                    <input
                        type="text"
                        className="terminal-input-command"
                        autoComplete="off"
                        spellCheck="false"
                        autoCorrect="off"
                        onKeyPress={InputTerminalHandler}
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
