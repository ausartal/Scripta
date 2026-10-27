import '@/styles/main.scss';
import { App } from '@/app/App';

const app = new App();
app.mount(document.getElementById('stage')!);

window.addEventListener('beforeunload', () => app.destroy());
