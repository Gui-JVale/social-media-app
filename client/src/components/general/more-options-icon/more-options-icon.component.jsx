import React from 'react';

import MoreHoriz from '@material-ui/icons/MoreHoriz';

const MoreOptionsIcon = ({ onClick, iconWrapperClassName, ...iconProps }) => (
  <div className={`more-options-icon ${iconWrapperClassName ? iconWrapperClassName : ""}`}>
    <MoreHoriz onClick={onClick} {...iconProps} />
  </div>
);

export default MoreOptionsIcon;