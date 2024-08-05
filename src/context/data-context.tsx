import { createContext, ReactNode, useState } from 'react';

interface FormDataValues {
    tahunAngkatan: string;
    programStudi: string;
    nimAwal: string;
    nimAkhir: string;
}

interface DataContextType {
    data: FormDataValues | null;
    setData: React.Dispatch<React.SetStateAction<FormDataValues | null>>;
}

export const DataContext = createContext<DataContextType>({
    data: null,
    setData: () => { },
});

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [formData, setFormData] = useState<FormDataValues | null>(null);

    return (
        <DataContext.Provider value={{ data: formData, setData: setFormData }}>
            {children}
        </DataContext.Provider>
    );
};
