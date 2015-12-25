import React, { Component } from 'react';
import objectAssign from 'object-assign';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: {},
            image: null,
        };
    }
    update() {
        var _this = this;
        setTimeout(() => {
            var { canvas, index } = this.props;
            if (!canvas) return;
            fabric.Image.fromURL(this.props.image, (image) => {
                var { parent, scale, top, left, bottom, align } = this.props;
                bottom = parseInt(bottom);

                if (this.state.image) image = this.state.image;

                image.scale(scale);
                // default use bottom
                var _top = (parent.height - (image.height * image.scaleY)) - bottom; 
                if (top) _top = parseInt(top);

                // add parent top
                _top += parent.top;

                // default use align
                switch (align) {
                    case 'center': 
                        var _left = (parent.width / 2 - (image.width * image.scaleX / 2));
                        break;
                    case 'right':
                        var _left = (parent.width - (image.width * image.scaleX));
                        break;
                    case 'left':
                    default:
                        var _left = 0;
                }

                if (left) _left = parseInt(left);
                // add parent left
                _left += parent.left;

                var currentProps = {
                    top: _top,
                    left: _left,
                    height: image.height,
                    width: image.width
                };

                image.set(currentProps);

                if (!this.state.image) {
                    this.setState({
                        props: currentProps,
                        image: image 
                    });
                    canvas.add(image);
                }
            }, {
                crossOrigin: 'anonymous'
            });
        });
    }
    componentDidMount() {
        this.update();
    }
    componentWillReceiveProps() {
        this.update();
    }
    render() {
        var _this = this;
        var parentProps = objectAssign({}, _this.props, _this.state.props);
        delete parentProps.children;
        
        var childProps = objectAssign({}, {canvas: _this.props.canvas, parent: parentProps, rootParent: _this.props.rootParent});
        var childrenWithProps = React.Children.map(this.props.children, function(child, id) {
            var currentProps = objectAssign({}, childProps, {index: id});
            return React.cloneElement(child, currentProps);
        });
        return (
            <div>{childrenWithProps}</div>
        );
    }
}

Character.defaultProps = {
    image: 'char1.png',
    scale: 1,
    top: null,
    left: null,
    bottom: 0,
    align: 'center',
}

export default Character;