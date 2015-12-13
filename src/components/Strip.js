import React, { Component } from 'react';

class Strip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canvas: null
        };
    }
    componentDidMount() {
        var canvas = new fabric.Canvas('canvas');
        var {padding, width, height, fill, stroke, fontFamily, strokeWidth} = this.props;
        var rect = new fabric.Rect({
            top: padding,
            left: padding,
            width : width - 2 * padding,
            height : height - 2 * padding,
            fill : fill,
            stroke: stroke,
            selectable: false,
            strokeWidth: strokeWidth
        });
        canvas.add(rect);

        var text = new fabric.Text(this.props.title, {
            top: padding + 20,
            left: width / 2,
            originX: 'center',
            textAlign: 'center',
            fontSize: 26,
            fontWeight: 'bold',
            fontFamily: fontFamily
        });
        canvas.add(text);

        this.setState({canvas});
    }
    render() {
        var _this = this;
        var parentProps = Object.assign({}, _this.props);
        delete parentProps.children;
        var childProps = Object.assign({}, {canvas: _this.state.canvas, parent: parentProps, rootParent: parentProps});
        var childrenWithProps = React.Children.map(this.props.children, function(child, id) {
            var currentProps = Object.assign({}, childProps, {index: id});
            return React.cloneElement(child, currentProps);
        });
        return (
            <div>
                <canvas id="canvas" {...this.props}></canvas>
                {childrenWithProps}
            </div>
        );
    }
};

Strip.defaultProps = {
    width: 500,
    height: 500,
    padding: 0,
    title: 'Comic Title',
    column: 2,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 0,
    fontFamily: 'Arial'
};

export default Strip;