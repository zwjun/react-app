/*
 * @Author: JUN 
 * @Date: 2017-07-06 23:30:02 
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import img from '../images/avatar.png';

const AVATAR_COLORS = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#2196F3',
    '#29B6F6',
    '#4CAF50',
    '#FFC107',
    '#FF3D00',
    '#BDBDBD',
    '#F9A825',
    '#26C6DA',
    '#FF5722'
];

export default class Avatar extends Component {
    static propTypes = {
        size: PropTypes.number,
        userName: PropTypes.string,
        avatar: PropTypes.string
    };

    static defaultProps = {
        size: 1,
        avatar: img,
        userName: 'WHO'
    };

    getRandomColor(key) {
        if (!key) {
            return AVATAR_COLORS[Math.random() % AVATAR_COLORS.length];
        } else {
            let code = 0;
            for (let i = 0; i < key.length; i++) {
                code += key.charCodeAt(i);
            }
            return AVATAR_COLORS[code % AVATAR_COLORS.length];
        }
    }
    getColor() {
        const {userName} = this.props;
        if (!userName) {
            return '#fff';
        } else {
            return this.getRandomColor(userName);
        }
    }

    renderUserName() {
        const {userName, size} = this.props;
        if (userName) {
            var text = userName;
            if (userName.length >= 2) {
                text = userName.slice(userName.length - 2);
            }

            const style = {
                display: 'flex',
                width: `${size}rem`,
                height: `${size}rem`,
                borderRadius: `${size / 2}rem`,
                backgroundColor: this.getColor(),
                justifyContent: 'center',
                alignItems: 'center'
            };

            const textStyle = {
                flex: 1,
                fontSize: `${size / 3}rem`,
                color: '#fff',
                textAlign: 'center'
            };

            return (
                <div style={style}>
                    <span style={textStyle}>{text}</span>
                </div>
            )
        }
    }

    renderAvatar() {
        const {avatar, size} = this.props;
        const style = {
            width: `${size}rem`,
            height: `${size}rem`,
            borderRadius: `${size / 2}rem`,
            alignSelf: 'center'
        };

        if (avatar) {
            return (
                <img src={avatar} alt="pic" style={style} />
            );
        }
    }

    render() {
        const {avatar, size, userName, ...props} = this.props;

        return (
            <div style={{ display: 'inline-block' }} {...props}>
                {this.props.avatar ? this.renderAvatar() : this.renderUserName()}
            </div>
        );
    }
}
