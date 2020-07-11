import React from 'react';
import TagManager from './components/TagManager';
import AppContextProvider from './contexts/AppContext';

const App = () => {
    return (
        <div className="App" style={{ width: '400px', maxHeight: '800px', overflowY: 'scroll' }}>
            <AppContextProvider>
                <TagManager />
            </AppContextProvider>
        </div>
    );
};

export default App;
