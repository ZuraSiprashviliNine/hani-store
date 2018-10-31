
import {connect} from 'react-redux';

class Navbar extends React.Component{
  constructor(props){
    super(props);

    this.getLangs = this.getLangs.bind(this);
  }

  getLangs(){
    if(this.props.Language.languages){
      return this.props.Language.languages.map(language => (
        <li>
          {language}
        </li>
      ))
    }
  }

  render(){
    return (
      <div>
        <h1>
          navbar
        </h1>
        <ul>
          {this.getLangs()}
        </ul>
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
  }
};

export default connect(States, Actions)(Navbar);
