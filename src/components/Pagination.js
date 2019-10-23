import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography"
import { withStyles } from '@material-ui/core/styles';
import ActionsComponent from './Actions';

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(14),
    // Increase the specificity to override TableCell.
    '&:last-child': {
      padding: 0,
    },
  },
  /* Styles applied to the Toolbar component. */
  toolbar: {
    minHeight: 52,
    paddingRight: 2,
  },
  /* Styles applied to the spacer element. */
  spacer: {
    flex: '1 1 100%',
  },
  /* Styles applied to the caption Typography components if `variant="caption"`. */
  caption: {
    flexShrink: 0,
  },
  /* Styles applied to the Select component root element. */
  selectRoot: {
    // `.selectRoot` should be merged with `.input` in v5.
    marginRight: 32,
    marginLeft: 8,
  },
  /* Styles applied to the Select component `select` class. */
  select: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: 'right',
    textAlignLast: 'right', // Align <select> on Chrome.
  },
  /* Styles applied to the Select component `icon` class. */
  selectIcon: {
    top: 1,
  },
  /* Styles applied to the `InputBase` component. */
  input: {
    color: 'inherit',
    fontSize: 'inherit',
    flexShrink: 0,
  },
  /* Styles applied to the MenuItem component. */
  menuItem: {},
  /* Styles applied to the internal `TablePaginationActions` component. */
  actions: {
    flexShrink: 0,
    marginLeft: 20,
  },
});

class Pagination extends React.Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
    backIconButtonProps: PropTypes.object,
    nextIconButtonProps: PropTypes.object,
  };

  static defaultProps = {
    backIconButtonProps: {},
    nextIconButtonProps: {}
  }

  labelDisplayedRows = ({ from, to, count }) =>
    `${from}-${to === -1 ? count : to} из ${count}`;

  render() {
    const { count, page, itemsPerPage, onChangePage, backIconButtonProps, nextIconButtonProps, classes } = this.props;
    return (<div className={classes.root}>
      <Typography color="inherit" variant="body2" className={classes.caption}>
        {this.labelDisplayedRows({
          from: count === 0 ? 0 : page * itemsPerPage + 1,
          to: Math.min(count, (page + 1) * itemsPerPage),
          count,
          page,
        })}
      </Typography>
      <ActionsComponent
        className={classes.actions}
        backIconButtonProps={backIconButtonProps}
        count={count}
        nextIconButtonProps={nextIconButtonProps}
        onChangePage={onChangePage}
        page={page}
        itemsPerPage={itemsPerPage}
      />
    </div>)
  }
}

export default withStyles(styles)(Pagination)