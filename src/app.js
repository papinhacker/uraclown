import { initAR } from './ar.js';

window.addEventListener('load', async () => {
  try {
    await initAR();
  } catch (e) {
    console.error('AR init error:', e);
    alert('Ошибка запуска AR. Проверьте HTTPS и доступ к камере.');
  }
});