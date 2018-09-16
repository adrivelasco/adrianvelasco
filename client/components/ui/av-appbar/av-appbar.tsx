import { Component, Prop } from '@stencil/core';
import { HostMeta } from '@stencil/core/dist/declarations';

@Component({
  tag: 'av-appbar',
  styleUrl: 'av-appbar.css'
})
export class Appbar {
  /**
   * Position the element absolutely
   */
  @Prop()
  public absolute: boolean = false;

  /**
   * Position the element fixed
   */
  @Prop()
  public fixed: boolean = false;

  protected hostData(): HostMeta {
    return {
      class: {
        'av-appbar': true,
        'av-appbar--fixed': this.fixed,
        'av-appbar--absolute': this.absolute,
      }
    };
  }

  protected render(): JSX.Element {
    return (
      <header class="av-appbar__root">
        <div class="av-appbar__content">
          <slot />
        </div>
      </header>
    );
  }
}
