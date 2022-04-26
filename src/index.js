import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'

import App from './components/App'
import Skills from './components/skills/Skills';
import HtlmSkill from './components/skills/demoskills/htmlSkill/HtmlSkill';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={ <App/> }>
            <Route path='skills' element={ <Skills /> }>
                <Route index element={ <HtlmSkill/> } ></Route>
            </Route>
        </Route>
    </Routes>
</BrowserRouter>
);