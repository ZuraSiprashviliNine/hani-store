
import store from '../../store';
import withRedux from 'next-redux-wrapper';

import Layout from '../layout';

class Index extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Layout>
        <div>
          <h1>
            hello world
          </h1>
        </div>
      </Layout>
    )
  }
}

const States = state => {
  return {
  }
};

const Actions = dispatch => {
  return {
  }
};
export default withRedux(store, States, Actions)(Index);
