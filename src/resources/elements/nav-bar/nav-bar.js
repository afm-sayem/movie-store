import {customElement, bindable, containerless} from 'aurelia-framework';
import {CssAnimator} from 'aurelia-animator-css';
import {inject} from 'aurelia-framework';

@customElement('nav-bar')
@containerless()
@inject(CssAnimator)
export class NavBar {
  @bindable router;
  constructor(animator) {
    this.animator = animator;
  }

  menuClick() {
    // slide in if it's in view, else slide out
    if (this.menu.classList.contains('show')) {
      this.animator.removeClass(this.menu, 'show');
      this.animator.addClass(this.menu, 'hide');
    } else if (this.menu.classList.contains('hide')) {
      this.animator.removeClass(this.menu, 'hide');
      this.animator.addClass(this.menu, 'show');
    }
  }
}
