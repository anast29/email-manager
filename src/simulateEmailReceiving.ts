export function simulateEmailReceiving() {
  setInterval(() => {
    fetch('/emails/new', { method: 'POST' });
  }, 60000);
}