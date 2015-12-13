import React, { Component } from 'react';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: {}
        };
    }
    componentDidMount() {
    	var _this = this;
        setTimeout(() => {
            var { canvas, index } = this.props;
            var { parent, height, padding, fill, stroke, strokeWidth, background } = this.props;

            if (!canvas) return;

            let _top = (index * height) + (index * padding / 2);
            let _left = 0;
            let _width = parent.width - (2 * parent.padding) - (2 * padding);
            let _height = height;

            if (parent.column > 1) {
                _top = (Math.floor(index / parent.column) * height) + (Math.floor(index / parent.column) * padding);
                _width = Math.floor(parent.width / parent.column) - (parent.padding) - (2 * padding);
                _left = ((index % parent.column) * _width) + ((index % parent.column) * padding);
            }

            // add padding
            _top += parent.padding + padding;
            _left += parent.padding + padding;

            // add title padding
            _top += 40;

            var currentProps = {
                top: _top,
                left: _left,
                width: _width,
                height: _height,
                fill : fill,
                stroke: stroke,
                strokeWidth: strokeWidth,
                selectable: false
            };

            var rect = new fabric.Rect(currentProps);
            this.setState({
                props: currentProps
            });

            if (background) {
            	fabric.Image.fromURL(background, (image) => {
            		image.set(currentProps);
            		canvas.add(image);
            	});
            }

            canvas.add(rect);
        });
    }
    render() {
        var _this = this;
        var parentProps = Object.assign({}, _this.props, _this.state.props);
        delete parentProps.children;
        var childProps = Object.assign({}, {canvas: _this.props.canvas, parent: parentProps, rootParent: _this.props.rootParent});
        var childrenWithProps = React.Children.map(this.props.children, function(child, id) {
            var currentProps = Object.assign({}, childProps, {index: id});
            return React.cloneElement(child, currentProps);
        });
        return (<div>{childrenWithProps}</div>);
    }
};

Panel.defaultProps = {
    height: 180,
    padding: 20,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 3,
    background: null,
};

export default Panel;