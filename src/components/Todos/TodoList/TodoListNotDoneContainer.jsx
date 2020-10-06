import { connect } from 'react-redux';
import TodoList from './index';
import { getNotDoneItems } from './selectors';

const mapStateToProps = (state) => ({
  items: getNotDoneItems(state),
});

export default connect(mapStateToProps)(TodoList);
