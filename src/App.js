
import './App.css';
import { animalslist, birds } from './animalsbirds';
import { Component } from 'react';
import { Route, Routes, } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Animals from './Animals';
import Birds from './Birds';
import Home from './Home';
import Searchbar from './Searchbar';
import NotFound from './NotFound.js';

class App extends Component {
  state = {
    animals: animalslist,
    birds: birds,
    search: '',
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value.toLowerCase() });
  }

  removeHandler = (name) => {
    const updatedList = this.state.animals.filter((item) => item.name !== name);
    this.setState({ animals: updatedList });
  }

  removeHandlerBirds = (name) => {
    const updatedList = this.state.birds.filter((item) => item.name !== name);
    this.setState({ birds: updatedList });
  }


  addLikeHandler = (name) => {

    const updatedList = this.state.animals.map((item) => {
      if (item.name === name) {
        return { ...item, likes: item.likes + 1 }
      }
      else { return item }
    })
    this.setState({ animals: updatedList });

  };

  addLikeHandlerBirds = (name) => {
    this.setState((birds) => {
      const updatedBirds = this.state.birds.map((item) => {
        if (item.name === name) {
          return { ...item, likes: item.likes + 1 }
        }
        else { return item }
      })
      this.setState({ birds: updatedBirds });
    }
    )
  };


  removeLikeHandler = (name) => {
    this.setState((animals) => {
      const updatedList = this.state.animals.map((item) => {
        if (item.name === name.toLowerCase()) {
          if (item.likes === 0) {
            return { ...item, likes: 0 }
          }
          else { return { ...item, likes: item.likes - 1 } }
        }

        else { return item }
      })
      this.setState({ animals: updatedList });
    })
  }

  removeLikeHandlerBirds = (name) => {
    this.setState((birds) => {
      const updatedList = this.state.birds.map((item) => {
        if (item.name.toLowerCase() === name.toLowerCase()) {
          if (item.likes === 0) {
            return { ...item, likes: 0 }
          }
          else { return { ...item, likes: item.likes - 1 } }
        }
        else { return item }
      })
      this.setState({ birds: updatedList });
    })
  }

  render() {

    return (
      <div className="App" >
        <header>
          <NavBar /></header>
        <div className="main-content-container">
          <div className='searchbar'> <Searchbar searchHandler={(e) => this.searchHandler(e)} /></div>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/animals" element={<Animals
                animals={this.state.animals}
                search={this.state.search}
                removeAnimal={this.removeHandler}
                addLike={this.addLikeHandler}
                removeLike={this.removeLikeHandler}
              />}>
              </Route>
              <Route path="/birds" element={<Birds
                birds={this.state.birds}
                search={this.state.search}
                removeBird={this.removeHandlerBirds}
                addLikeHandler={this.addLikeHandlerBirds}
                removeLikeHandler={this.removeLikeHandlerBirds}
              />}>
              </Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </div >
    );
  }
}

export default App;





