/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ImageBackground
 * @flow
 */

import applyNativeMethods from '../../modules/applyNativeMethods';
import StyleSheet from '../../apis/StyleSheet';
import View from '../View';
import Image from '../Image';
import ImageStylePropTypes from '../Image/ImageStylePropTypes';
import ViewPropTypes from '../View/ViewPropTypes';
import ViewStylePropTypes from '../View/ViewStylePropTypes';
import StyleSheetPropType from '../../propTypes/StyleSheetPropType';
import { any } from 'prop-types';
import React, { Component } from 'react';

class ImageBackground extends Component {
  static displayName = 'ImageBackground';

  static propTypes = {
    ...ViewPropTypes,
    children: any,
    imageStyle: StyleSheetPropType(ImageStylePropTypes),
    style: StyleSheetPropType(ViewStylePropTypes),
  };

  render() {
    const { children, style, imageStyle, ...props } = this.props;

    return (
      <View style={style}>
        <Image
          {...props}
          style={[
            StyleSheet.absoluteFill,
            {
              width: style.width,
              height: style.height,
            },
            imageStyle,
          ]}
        />
        {children}
      </View>
    );
  }
}

export default applyNativeMethods(ImageBackground);
