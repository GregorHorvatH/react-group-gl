import { connect } from 'react-redux';
import TodoList from './index';
import { getDoneItems } from './selectors';

const mapStateToProps = (state) => ({
  items: getDoneItems(state),
});

export default connect(mapStateToProps)(TodoList);
