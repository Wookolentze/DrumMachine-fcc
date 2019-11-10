import React, {Component, Fragment} from 'react';
import DrumPad from './DrumPad';
import {storage} from './firebase/firestore';

class App extends Component{
  constructor(prop){
    super(prop);
    this.state = {
        keying : [{buttonId : 'Q', sound : 'Floor Tom', url: "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Floor%20Tom.mp3?alt=media&token=683c3f91-8e98-461e-879e-7f40e81cabf2"},
                  {buttonId : 'W', sound : 'Kick A', url : "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Kick%20A.mp3?alt=media&token=f84ab5ec-fbc4-49ba-9289-a7c45b2b1206"}, 
                  {buttonId : 'E', sound : 'Kick B', url : "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Rack%20Tom%20B.mp3?alt=media&token=57399cdb-b875-45e3-b008-0b12f7dd93df"},
                  {buttonId : 'A', sound : 'Rack Tom A', url : "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Snare%20Hard%20A.mp3?alt=media&token=84cfb3c8-7b27-4a7a-b069-c98151f31a01"},
                  {buttonId : 'S', sound : 'Rack Tom B', url : "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Rack%20Tom%20A.mp3?alt=media&token=25ed4214-fe02-40a0-b91e-a02af606af6a"},
                  {buttonId : 'D', sound : 'Snare Hard A', url : "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Snare%20Medium%20A.mp3?alt=media&token=98019642-bf2e-4998-8958-99926a18fbb7"},
                  {buttonId : 'Z', sound : 'Snare Hard B', url : "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Snare%20Medium%20B.mp3?alt=media&token=acd74134-7de3-48dc-9562-2ee177137870"},
                  {buttonId : 'X', sound : 'Snare Medium A', url : "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Snare%20Hard%20B.mp3?alt=media&token=ea54b6fa-a70c-4d30-b647-fe581801332b"},
                  {buttonId : 'C', sound : 'Snare Medium B', url : "https://firebasestorage.googleapis.com/v0/b/fcc-drummachine.appspot.com/o/Kick%20B.mp3?alt=media&token=f9aa4c44-c479-4b03-a481-b95d8b5bc3eb"}],
        display : 'Ola!'
    };
    this.updateDisplay=this.updateDisplay.bind(this);
  }
  soundConcat() {
    return this.state.keying.map(item => item.sound +".mp3");
  }
  componentDidMount(){
    this.soundConcat()
               .forEach( item => storage.ref(item).getDownloadURL()
                .then(result => {
                    console.log(result)
                    })
               );
  }
  updateDisplay(beat){
    this.setState({ display : beat});

  }
  //^^^^^it pains me that I could not send this data to state from here :( ^^^^ and from here to local storage :(
    render(){

    const padList = this.state.keying.map((item) =>
      <DrumPad id={item.buttonId} key={item.buttonId} src={item.url} sound={item.sound} triggDisplay={this.updateDisplay}/>
    );

    return (
      <Fragment>
        <div id="drum-machine">
          <div id="display">{this.state.display}</div>
          <div id="pad-container">
            {padList}
          </div>
        </div>
        <footer>All sounds are courtesy of <a href="https://badracket.com/">badracket.com</a>. Thanks!</footer>
      </Fragment>
    );
  }

} export default App;
