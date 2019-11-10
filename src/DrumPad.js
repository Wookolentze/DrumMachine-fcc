import React, {Component, Fragment} from 'react';


class DrumPad extends Component {  
    constructor(prop){
        super(prop);
        //variable
        this.state = {

         };
        this.handleClick=this.handleClick.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
    }
 
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown);

    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyDown);
      }
    
    reportDisplay(){
    this.props.triggDisplay(this.props.sound);
    }

    handleKeyDown(e){
        console.log(e.keyCode);
        if(e.keyCode === this.props.id.charCodeAt()){
          this.audio.play();
          this.audio.currentTime = 0;
          this.reportDisplay();
        }
    }

   handleClick(e){
       console.log(e.target.id, e.target.key, "HEY YO!")
        this.audio.play();
        this.audio.currentTime = 0;
        this.reportDisplay();
   }
    render(){
        return(
            <Fragment>
                <button className="drum-pad" id={this.props.id} key={this.props.id} onClick={this.handleClick}>{this.props.id}
                    <audio id={this.props.id} ref={ref=> this.audio = ref} src={this.props.src}></audio>
                </button>
            </Fragment>
        )
    }
//credit https://badracket.com/ for sound
}
export  default DrumPad;