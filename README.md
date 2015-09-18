# bindable-component

Exposes `BindableComponent` to easily bind component methods for use as handlers within react.

Also provides `BaseComponent`, with the only difference being the inclusion of the `PureRenderMixin`.

## Installation

```bash
npm install --save bindable-component
```

## Usage

```jsx
import { BindableComponent } from 'bindable-component';

// Aternatively
// import { BaseComponent } from 'bindable-component';

class MyComponent extends BindableComponent {
  constructor() {
    super();

    this._bind('onClick', 'onChange');
  }

  onClick() {
    // Will have proper this scope
  }

  onChange() {
    // Will have proper this scope
  }

  render() {
    return (
      <form>
        <input onChange={this.onChange} />
        <button onClick={this.onClick}}>submit</button>
      </form>
    );
  }
}
```

## License

See [LICENSE](LICENSE).
