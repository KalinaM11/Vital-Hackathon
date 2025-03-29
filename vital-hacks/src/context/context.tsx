import React, { createContext, useState, ReactNode, useContext } from 'react';

interface StatusState {
    mood: string;
    happiness: number;
    energy: number;
    hydration: number;
    nutrients: number;
}

interface StatusContextType extends StatusState {
    setStatus: (key: keyof StatusState, value: number) => void;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusProvider = ({ children }: { children: ReactNode }) => {
    const [status, setStatusState] = useState<StatusState>({
        mood: 'Happy',
        happiness: 50,
        energy: 50,
        hydration: 50,
        nutrients: 50,
    });

    const setStatus = (key: keyof StatusState, value: number) => {
        setStatusState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <StatusContext.Provider value={{ ...status, setStatus }}>
            {children}
        </StatusContext.Provider>
    );
};

export const useStatus = (): StatusContextType => {
    const context = useContext(StatusContext);
    if (!context) {
        throw new Error('useStatus must be used within a StatusProvider');
    }
    return context;
};
