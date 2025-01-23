import { createRoot} from 'react-dom/client';

document.addEventListener('onload', => {
    const root = createRoot(document.getElementById('add-rect-button-here"'));
    root.render('<button>Hello Button</button>')
})
