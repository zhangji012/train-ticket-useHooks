import React from 'react';
import styles from './index.css';
// Normalize.css只是一个很小的css文件，但它在磨人的HTML元素样式上提供了跨浏览器的高度一致性。相比于传统的CSS reset,Normalize.css是一种现代的、为HTML5准备的优质替代方案。总之，Normalize.css是一种CSS reset的替代方案
import 'normalize.css/normalize.css'

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
