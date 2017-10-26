import AbstractView from '../../view.js';

class IntroView extends AbstractView {
  get template() {
    return `<div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`;
  }

  bind() {
    const controlElementIntro = this.element.querySelector(`.intro__asterisk`);
    controlElementIntro.addEventListener(`click`, () => {
      this.nextView();
    });
  }

  nextView() {

  }
}

export default IntroView;
