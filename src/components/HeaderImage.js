import React from 'react';
import _ from 'lodash';

import { classNames, withPrefix } from '../utils';

export default class HeaderImage extends React.Component {
    componentDidMount() {
        console.log('HeaderImage componentDidMount');
    }
    componentDidUpdate() {
        console.log('HeaderImage componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('HeaderImage componentWillUnmount');
    }

    render() {
        const image = _.get(this.props, 'image');
        return (
            <div className="site-header-bg">
                <img
                    ref={this.imageRef}
                    src={withPrefix(image)}
                    onLoad={this.handleImageLoad}
                    className={classNames('site-header-bg-img')}
                    alt=""
                />
                <div className="site-header-bg-gradient" />
            </div>
        );
    }
}
