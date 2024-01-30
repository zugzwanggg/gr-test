import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './Context/Context.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ContextProvider>
      <App />
    </ContextProvider>

  </BrowserRouter>,
)
