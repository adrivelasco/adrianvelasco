import { Component } from '@stencil/core';

@Component({
  tag: 'av-view-home',
  styleUrl: 'av-view-home.css'
})
export class ViewHome {
  render(): JSX.Element {
    return (
      <div class="av-view-home__header">
        <div class="av-view-home__header__center">
          <div class="av-view-home__header__picture" />
          <div class="av-view-home__header__text">
            <h1>Adrián Velasco</h1>
            <h2 class="color-primary">Front-End & UI/UX Developer.</h2>
            <h5>Based in <strong>Buenos Aires, Argentina</strong>.</h5>
            <br />
            <p>
              Hello! This is my personal website where you can know more about me and what I do. Currently available and
              open to hear new proposals, so if you have an interesting idea or some ambitious project,&nbsp;
              <a href="#"><strong>let's work together</strong></a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
