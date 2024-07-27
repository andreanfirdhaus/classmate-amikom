import { createContext, useState } from 'react';

interface FormDataValues {
    tahunAngkatan: string;
    programStudi: string;
    nimAwal: string;
    nimAkhir: string;
}

export const DataContext = createContext<({
    data: FormDataValues;
    setData: React.Dispatch<React.SetStateAction<FormDataValues>>;
})>({
    data: {} as FormDataValues,
    setData: () => { },
});

export const DataProvider: React.FC = ({ children }: any) => {
    const [formData, setFormData] = useState<FormDataValues>(null);

    return (
        <DataContext.Provider value={{ data: formData, setData: setFormData }}>
            {children}
        </DataContext.Provider>
    );
};


