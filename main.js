class LottoDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
            display: flex;
            gap: 10px;
        }
        .lotto-number {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #333;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2em;
            font-weight: bold;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.1);
            transition: all 0.5s ease;
        }
      </style>
    `;
  }

  connectedCallback() {
    this.updateNumbers(this.generateLottoNumbers());
  }

  generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  updateNumbers(numbers) {
    this.shadowRoot.querySelectorAll('.lotto-number').forEach(el => el.remove());

    numbers.forEach(number => {
      const numberEl = document.createElement('div');
      numberEl.classList.add('lotto-number');
      numberEl.textContent = number;
      numberEl.style.backgroundColor = this.getColor(number);
      this.shadowRoot.appendChild(numberEl);
    });
  }

  getColor(number) {
    if (number <= 10) return '#f44336';
    if (number <= 20) return '#ff9800';
    if (number <= 30) return '#ffeb3b';
    if (number <= 40) return '#4caf50';
    return '#2196f3';
  }
}

customElements.define('lotto-display', LottoDisplay);

const generateButton = document.getElementById('generate-button');
const lottoDisplays = document.querySelectorAll('lotto-display');
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Initialize theme
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  document.body.classList.add('light-theme');
  sunIcon.style.display = 'block';
  moonIcon.style.display = 'none';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  
  if (isLight) {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
});

generateButton.addEventListener('click', () => {
  lottoDisplays.forEach(display => {
    display.updateNumbers(display.generateLottoNumbers());
  });
});
