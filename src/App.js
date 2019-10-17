import React, { Component } from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import SharedButton from './components/Button';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { fetchPosts} from './actions';
import './app.scss';


const tempArr = [{
  fName : 'John',
  lName : 'Doe',
  email : 'johndoe@gmail.com',
  age : 22,
  onlineStatus: true
}];

const initialState = {
  hideBtn : false
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts()
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  exampleMethod_returnsAVAlue(number) {
    return number + 1;
  }

  render() {

    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test='appComponent'>
        <Header />
        <section className='main'>
          <Headline  header='Posts' desc='Click the button to render post!' tempArr={tempArr} />
          { !hideBtn && 
             <SharedButton {...configButton} />
          }
          { posts.length > 0 &&
          <div>
            { posts.map((post, index) => {
              const { title, body } = post;
              const configListITem = {
                title,
                desc: body
              };
              return (
                <ListItem {...configListITem} key={index} />
              )
            })}

          </div>
        }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
