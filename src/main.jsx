import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryContextProvider } from './context/CategoryContext.jsx'
import { TaskProvider } from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </TaskProvider>
  </StrictMode>,
)
