// Simple FAQ component for embedding
// Usage: <div data-component="faq" data-questions='[{"q":"Question?","a":"Answer."}]'></div>

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('[data-component="faq"]');
  containers.forEach(container => {
    const data = container.getAttribute('data-questions');
    if (!data) return;
    let items;
    try {
      items = JSON.parse(data);
    } catch (err) {
      console.error('Invalid JSON for FAQ component', err);
      return;
    }
    items.forEach(item => {
      const question = document.createElement('div');
      question.className = 'faq-question';
      question.textContent = item.q;
      const answer = document.createElement('div');
      answer.className = 'faq-answer';
      answer.textContent = item.a;
      answer.style.display = 'none';
      question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
      });
      container.appendChild(question);
      container.appendChild(answer);
    });
  });
});
