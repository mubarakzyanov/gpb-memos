import { connect } from 'react-redux';
import IndexComponent from '../components/index';

const Index = connect(
  ({ activeMemoId }) => ({ activeMemoId }),
)(IndexComponent);

export default Index;
