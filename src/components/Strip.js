import React, { Component } from 'react';
import objectAssign from 'object-assign';
import ReactDOM from 'react-dom';

class Strip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canvas: null
        };
    }
    onDownload() {
        var link = this.downloadLink;
        link.setAttribute('href', canvas.toDataURL());
        link.setAttribute('download', this.props.title+'-react-komik.png');
        link.click();
    }
    onEffect(effect) {
        var {canvas} = this.state;
        canvas.deactivateAll();
        var overlayImageUrl = canvas.toDataURL('png');
        var imageDOM = ReactDOM.findDOMNode(this.imageBuffer);
        imageDOM.setAttribute('src', overlayImageUrl)
        var filterImageUrl = imageDOM.getAttribute('src');
        fabric.Image.fromURL(filterImageUrl, function(img) {
            switch (effect) {
                case 'grayscale':
                    img.filters.push(new fabric.Image.filters.Grayscale());
                    break;
                case 'sepia':
                    img.filters.push(new fabric.Image.filters.Sepia());
                    break;
                case 'sepia2':
                    img.filters.push(new fabric.Image.filters.Sepia2());
                    break;
                case 'invert':
                    img.filters.push(new fabric.Image.filters.Invert());
                    break;
            }
            img.applyFilters(canvas.renderAll.bind(canvas));
            canvas.add(img);
        });
        canvas.deactivateAll().renderAll();
    }
    componentDidMount() {
        var canvas = new fabric.Canvas('canvas');
        var {padding, width, height, fill, stroke, fontFamily, strokeWidth, fontSize} = this.props;
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

        var title = this.props.title;
        if (this.props.upperCase) title = title.toUpperCase();

        var text = new fabric.Text(title, {
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
        var parentProps = objectAssign({}, _this.props);
        delete parentProps.children;
        var childProps = objectAssign({}, {canvas: _this.state.canvas, parent: parentProps, rootParent: parentProps});
        var childrenWithProps = React.Children.map(this.props.children, function(child, id) {
            var currentProps = objectAssign({}, childProps, {index: id});
            return React.cloneElement(child, currentProps);
        });
        return (
            <div>
                <canvas id="canvas" {...this.props}></canvas>
                {childrenWithProps}
                <div>
                    <button onClick={this.onEffect.bind(this, 'grayscale')}>Grayscale</button> 
                    <button onClick={this.onEffect.bind(this, 'sepia')}>Sepia</button> 
                    <button onClick={this.onEffect.bind(this, 'sepia2')}>Sepia 2</button> 
                    <button onClick={this.onEffect.bind(this, 'invert')}>Invert</button> 
                    <button onClick={this.onDownload.bind(this)}>Download</button>
                    <img ref={(ref) => this.imageBuffer = ref} crossOrigin="anonymous" src=""  style={{display:'none'}} />
                    <a ref={(ref) => this.downloadLink = ref} style={{display: 'none'}}>Download</a>
                </div>
            </div>
        );
    }
};

Strip.defaultProps = {
    width: 500,
    height: 500,
    top: 0,
    left: 0,
    padding: 0,
    title: 'Comic Title',
    column: 2,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 0,
    fontFamily: 'Arial',
    fontSize: 13,
    upperCase: false
};

export default Strip;