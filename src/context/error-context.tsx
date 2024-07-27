import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface ImageContextType {
    errorCount: number;
    setErrorCount: React.Dispatch<React.SetStateAction<number>>;
    validUrls: string[];
    errorUrls: string[];
    setUrls: (valid: string[], error: string[]) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useErrorImageContext = () => {
    const context = useContext(ImageContext);
    if (!context) {
        throw new Error('useErrorImageContext must be used within an ErrorImageProvider');
    }
    return context;
};

export const ErrorImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [errorCount, setErrorCount] = useState(0);
    const [validUrls, setValidUrls] = useState<string[]>([]);
    const [errorUrls, setErrorUrls] = useState<string[]>([]);

    const setUrls = useCallback((valid: string[], error: string[]) => {
        setValidUrls(valid);
        setErrorUrls(error);
    }, []);

    return (
        <ImageContext.Provider value={{ errorCount, setErrorCount, validUrls, errorUrls, setUrls }}>
            {children}
        </ImageContext.Provider>
    );
};