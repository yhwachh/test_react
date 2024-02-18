import React from 'react' 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render//on utilise createRoot pour activer le mode concurrent 
//de react et on utilise render pour afficher le composant App dans la div root  et getelementbyid pour cibler la div root qui est 
//dans le fichier index.html
(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
