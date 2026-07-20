(() => {
  class PortfolioCv extends HTMLElement {
    static observedAttributes = ['language'];

    constructor() {
      super();
      this.frame = null;
      this.pendingScrollX = 0;
      this.pendingScrollY = 0;
      this.scrollFrame = 0;
      this.handleMessage = this.handleMessage.bind(this);
    }

    connectedCallback() {
      if (this.frame) return;
      const language = this.getAttribute('language') === 'pt-BR' ? 'pt-BR' : 'en';
      const frame = document.createElement('iframe');
      frame.title = language === 'pt-BR' ? 'Renderizador isolado do currículo' : 'Isolated CV renderer';
      frame.src = `cv/index.html?lang=${encodeURIComponent(language)}`;
      frame.loading = 'lazy';
      frame.sandbox = 'allow-scripts';
      frame.addEventListener('load', () => {
        this.sendLanguage();
      });
      this.frame = frame;
      this.replaceChildren(frame);
      window.addEventListener('message', this.handleMessage);
    }

    disconnectedCallback() {
      window.removeEventListener('message', this.handleMessage);
      if (this.scrollFrame) window.cancelAnimationFrame(this.scrollFrame);
    }

    attributeChangedCallback() {
      this.sendLanguage();
    }

    handleMessage(event) {
      if (event.source !== this.frame?.contentWindow) return;
      if (event.data?.type === 'portfolio-cv:height') {
        const height = Number(event.data.height);
        if (!Number.isFinite(height) || height < 1) return;
        this.style.setProperty('--cv-frame-height', `${Math.ceil(height)}px`);
        this.classList.add('cv-ready');
        return;
      }
      if (event.data?.type === 'portfolio-cv:scroll') {
        const deltaX = Number(event.data.deltaX);
        const deltaY = Number(event.data.deltaY);
        if (!Number.isFinite(deltaX) || !Number.isFinite(deltaY)) return;
        const limit = window.innerHeight;
        this.pendingScrollX += Math.max(-limit, Math.min(limit, deltaX));
        this.pendingScrollY += Math.max(-limit, Math.min(limit, deltaY));
        if (this.scrollFrame) return;
        this.scrollFrame = window.requestAnimationFrame(() => {
          const scroller = document.scrollingElement;
          this.scrollFrame = 0;
          if (!scroller) return;
          const left = scroller.scrollLeft + this.pendingScrollX;
          const top = scroller.scrollTop + this.pendingScrollY;
          this.pendingScrollX = 0;
          this.pendingScrollY = 0;
          window.scrollTo({ left, top, behavior: 'instant' });
        });
      }
    }

    sendLanguage() {
      if (!this.frame?.contentWindow) return;
      this.frame.contentWindow.postMessage({
        type: 'portfolio-cv:language',
        language: this.getAttribute('language') === 'pt-BR' ? 'pt-BR' : 'en',
      }, '*');
    }
  }

  customElements.define('portfolio-cv', PortfolioCv);
})();
