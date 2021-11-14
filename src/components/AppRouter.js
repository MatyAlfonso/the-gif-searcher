import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { SearchPage } from '../routes/SearchPage';
import { MainPage } from '../routes/MainPage';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </Router>
    )
}
