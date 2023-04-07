const appScale = {
  centerX: window.innerWidth / 2,
  centerY: window.innerHeight / 2,
  defaultWidth: 1920,
  defaultHeight: 1080,
  update() {
    const windowHeight = Math.max(window.innerHeight, 400);
    this.zoom = windowHeight / (this.defaultHeight / 100) / 100;
    this.width = window.innerWidth / this.zoom;
    this.height = windowHeight / this.zoom;
    this.left = this.centerX - this.width / 2;
    this.top = this.centerY - this.height / 2;
    this.right = this.centerX + this.width / 2;
    this.bottom = this.centerY + this.height / 2;
  },
};

appScale.update();

export { appScale };
