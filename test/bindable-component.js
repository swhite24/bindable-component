
import { BindableComponent } from '../src/bindable-component';
import { expect } from 'chai';

class BindableChild extends BindableComponent {
  constructor() {
    super();
    this.test = 'test';
  }
  foo () { return this.test; }
  bar () { return this.test; }
}

describe('BindableComponent', () => {

  it('should exist', () => {
    expect(BindableComponent).to.exist;
  });

  it('should provide a _bind method', () => {
    let comp = new BindableComponent();
    expect(comp._bind).to.exist;
    expect(comp._bind).to.be.a('function');
  });

  describe('._bind', () => {
    it('should bind if single function provided', () => {
      let comp = new BindableChild();

      let foo = comp.foo;
      expect(foo).to.throw();

      comp._bind('foo');
      foo = comp.foo;
      expect(foo()).to.equal('test');
    });

    it('should bind multiple functions', () => {
      let comp = new BindableChild();

      comp._bind('foo', 'bar');
      let { foo, bar } = comp;

      expect(foo()).to.equal('test');
      expect(bar()).to.equal('test');
    });
  });
});
