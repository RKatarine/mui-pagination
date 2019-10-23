import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from '@material-ui/core/styles';

/**
 * @ignore - internal component.
 */
const PaginationActions = React.forwardRef(function TablePaginationActions(props, ref) {
  const {
    backIconButtonProps,
    count,
    nextIconButtonProps,
    onChangePage,
    page,
    itemsPerPage,
    ...other
  } = props;

  const theme = useTheme();

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  return (
    <div ref={ref} {...other}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        color="inherit"
        {...backIconButtonProps}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
      </IconButton>
      {page + 1}
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / itemsPerPage) - 1}
        color="inherit"
        {...nextIconButtonProps}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
      </IconButton>
    </div>
  );
});

PaginationActions.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) element.
   */
  backIconButtonProps: PropTypes.object,
  /**
   * The total number of rows.
   */
  count: PropTypes.number.isRequired,
  /**
   * Props applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: PropTypes.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChangePage: PropTypes.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,
  /**
   * The number of rows per page.
   */
  itemsPerPage: PropTypes.number.isRequired,
};

export default PaginationActions;