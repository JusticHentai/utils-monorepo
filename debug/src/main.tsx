import Surveillance from '@justichentai/surveillance'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const surveillance = new Surveillance()
console.log('=== main.ts ===', surveillance)

createRoot(document.getElementById('root')!).render(<App />)
