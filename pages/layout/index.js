
import '../../styles/style.scss';

import {connect} from 'react-redux';

import {Loading} from './components/loading';
import { AppReadyState } from '../../functions/app';
import Navbar from './components/navbar';

import {
  LANGUAGE_INIT
} from '../../actions/language';

class Layout extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      ready: false
    };

    this.Ready = this.Ready.bind(this);
    this.Check = this.Check.bind(this);
    this.PostCheck = this.PostCheck.bind(this);
    this.Set = this.Set.bind(this);
  }

  Ready(state = true){
      this.setState({
          ready: state,
          notReady: []
      })
  }

  PostCheck(){
      let _Check = this.Check();
      this.setState({
          notReady: _Check.invalids,
          ready: _Check.result
      })
  }

  Check(){ // Returns invalid Objects and result value
      return AppReadyState([
          {
              required: [
                'languages',
                'native',
                'keywords'
              ],
              in: {
                  name: 'Language',
                  obj: this.props.Language
              }
          }
      ]);
  }

  Set(invalids = this.state.notReady){ //Bundle of actions
      invalids.map(invalid => {
          switch(invalid){
              case 'Language': {
                  this.props.initLanguage();
                  break;
              }
              default: {
                  break;
              }
          }
      });
  }

  componentWillMount(){
      this.PostCheck();
  }

  componentDidMount(){
      if(!this.state.ready){
          this.Set();
      }
  }

  componentDidUpdate(prev){
      setImmediate(() => {
          if(!this.state.ready){
              if(this.state.notReady.length){
                  this.PostCheck();
              }else{
                  this.Ready();
              }
          }
      });
  }

  render(){
    return (
      <div
        className={`Application ${this.state.ready === false ? 'pending' : ''}`}>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

const States = state => {
  return {
    Language: state.Language
  }
};

const Actions = dispatch => {
  return {
    initLanguage: () => {
      dispatch(LANGUAGE_INIT());
    }
  }
};

export default connect(States, Actions)(Layout);
