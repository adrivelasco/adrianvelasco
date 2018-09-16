import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'av-button',
  styleUrl: 'av-button.css'
})
export class Button {
  /**
   * Reference to the host element
   */
  @Element() host: HTMLElement;

  /**
   * Allows the button to render for different tags.
   */
  @Prop()
  public tag: 'button' | 'submit' | 'link' | 'span' = 'button';

  /**
   * Sets the button or link to render at full width to the parent.
   */
  @Prop({ reflectToAttr: true })
  public block: boolean = false;

  /**
   * Sets the button or link as disabled and not-interactable.
   */
  @Prop({ reflectToAttr: true })
  public disabled: boolean = false;

  /**
   * onClick handler
   * @param {UIEvent} event - Event Object
   */
  private click(event: UIEvent): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    return null;
  }

  private _renderButton(): JSX.Element {
    return (
      <button
        type="button"
        class="av-button__root"
        disabled={this.disabled}
        onClick={this.click}
      >
        <div class="content">
          <slot>Submit</slot>
        </div>
      </button>
    );
  }

  protected render(): JSX.Element {
    return [
      this.tag === 'button' && this._renderButton(),
    ];
  }
}
