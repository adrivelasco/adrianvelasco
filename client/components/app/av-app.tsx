import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
  tag: 'av-app',
  styleUrl: 'av-app.css'
})
export class App {
  render(): JSX.Element {
    return (
      <div>
        <av-appbar fixed={true}>
          <div class="asd">
            <div class="left">
              <div class="logo">
                <h3>
                  AV
                </h3>
              </div>
              <div class="menu">
                <ul>
                  <li>
                    <a href="#">About Me</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Resume</a>
                  </li>
                </ul>
              </div>
            </div>
            <av-button>
              Hire me
            </av-button>
          </div>
        </av-appbar>
        <stencil-router scrollTopOffset={0}>
          <stencil-route-switch>
            <stencil-route
              url="/"
              component="av-view-home"
              exact={true}
            />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
