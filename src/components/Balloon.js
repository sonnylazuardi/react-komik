import React, { Component } from 'react';

class Balloon extends Component {
    createBalloon() {
        var _this = this;
        var { canvas, index } = this.props;
        return new Promise((resolve, reject) => {
            if (!canvas) reject(false);
            fabric.loadSVGFromURL(this.props.image, (objects, options) => {
                var { parent, top, left, bottom, align, scale, height } = _this.props;
                var image = fabric.util.groupSVGElements(objects, options);
                bottom = parseInt(bottom);

                image.scaleToHeight(height);

                // default use bottom
                var _top = -(image.height * image.scaleY) - bottom;
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

                image.set({
                    top: _top,
                    left: _left
                });
                // canvas.add(image);
                resolve(image);   
            });
        });
    }
    createText(_this, image) {
        var { canvas, index } = _this.props;
        var { parent, top, left, bottom, align, scale, fontFamily, textAlign, padding } = _this.props;

        if (!canvas) return;

        var text = new fabric.Textbox(_this.props.text, {
            top: image.top + padding,
            left: image.left + padding,
            width: image.width * image.scaleX - 2 * padding - 5,
            height: image.height * image.scaleY - 2 * padding - 5,
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: textAlign,
            fontFamily: fontFamily || _this.props.rootParent.fontFamily
        });

        var balloonGroup = new fabric.Group([image, text], {

        });

        canvas.add(balloonGroup);
    }
    componentDidMount() {
        var _this = this;
        setTimeout(() => {
            _this.createBalloon().then((image) => {
                _this.createText(_this, image);
            }, () => {});
        });
    }
    render() {
        return (<div />);
    }
};

Balloon.defaultProps = {
    text: 'Hi Bro!',
    image: 'chat_right.svg',
    top: null,
    left: null,
    bottom: -25,
    scale: 0.8,
    align: 'left',
    padding: 12,
    height: 150,
    textAlign: 'center',
    fontFamily: null
};

export default Balloon;