import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* เอา Context มาครอบ App เอาไว้ */}
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    </BrowserRouter>
)