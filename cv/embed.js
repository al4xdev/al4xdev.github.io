(() => {
  class PortfolioCv extends HTMLElement {
    static observedAttributes = ['language'];

    constructor() {
      super();
      this.frame = null;
      this.pendingPrint = false;
      this.handleMessage = this.handleMessage.bind(this);
    }

    connectedCallback() {
      if (this.frame) return;
      const language = this.getAttribute('language') === 'pt-BR' ? 'pt-BR' : 'en';
      const frame = document.createElement('iframe');
      frame.title = language === 'pt-BR' ? 'Renderizador isolado do currículo' : 'Isolated CV renderer';
      frame.src = `cv/index.html?lang=${encodeURIComponent(language)}`;
      frame.loading = 'lazy';
      frame.sandbox = 'allow-scripts allow-modals';
      frame.addEventListener('load', () => {
        this.sendLanguage();
        if (this.pendingPrint) this.print();
      });
      this.frame = frame;
      this.replaceChildren(frame);
      window.addEventListener('message', this.handleMessage);
    }

    disconnectedCallback() {
      window.removeEventListener('message', this.handleMessage);
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
        const scroller = document.scrollingElement;
        if (!scroller) return;
        scroller.scrollLeft += Math.max(-limit, Math.min(limit, deltaX));
        scroller.scrollTop += Math.max(-limit, Math.min(limit, deltaY));
      }
    }

    sendLanguage() {
      if (!this.frame?.contentWindow) return;
      this.frame.contentWindow.postMessage({
        type: 'portfolio-cv:language',
        language: this.getAttribute('language') === 'pt-BR' ? 'pt-BR' : 'en',
      }, '*');
    }

    print() {
      if (!this.frame?.contentWindow) {
        this.pendingPrint = true;
        return;
      }
      this.pendingPrint = false;
      this.frame.contentWindow.postMessage({ type: 'portfolio-cv:print' }, '*');
    }
  }

  customElements.define('portfolio-cv', PortfolioCv);
})();
