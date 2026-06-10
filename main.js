class LottoDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 40px;
        }
        .lotto-number {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #333;
            color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.8em;
            font-weight: bold;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
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
const lottoDisplay = document.querySelector('lotto-display');

generateButton.addEventListener('click', () => {
  lottoDisplay.updateNumbers(lottoDisplay.generateLottoNumbers());
});
