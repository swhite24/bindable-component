/**
 * src/bindable-component.jsx
 * Base react component class
 */

import React from 'react/addons';
import ReactMixin from 'react-mixin';

/**
 * Extension of React.Component to provide _bind method.
 */
export class BindableComponent extends React.Component {

  /**
   * Binds provided prototype methods to the instance
   */
  _bind(...methods) {
    methods.forEach(method => {
      if(this[method] && typeof this[method] === 'function') this[method] = this[method].bind(this);
    });
  }

}


/**
 * Extension of React.Component to provide _bind with PureRenderMixin method.
 */
@ReactMixin.decorate(React.addons.PureRenderMixin)
export class BaseComponent extends BindableComponent {}
