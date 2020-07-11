import React, { createContext, ReactNode, useContext, useState } from 'react';
import { axiosGet } from '../api/base';
import { TagCategory } from '../models/Tags';

export const AppContext = createContext({});
export const useAppContext = () => useContext<any>(AppContext);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [tagCategories, setTagCategories] = useState<TagCategory[]>([]);

    const updateTagCategories = async () => {
        try {
            axiosGet('./mockData/tagsByCategory.json').then((tagsByCategory: TagCategory[]) => {
                setTagCategories(tagsByCategory);
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <AppContext.Provider
            value={{
                tagCategories,
                updateTagCategories,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
