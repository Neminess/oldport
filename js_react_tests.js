var profile_move=document.querySelector("#profile-picture")
profile_move.addEventListener("click",showContent())
function showContent(){
    var posit=0;
    function frame(){
        
            posit++
            profile_move.style.top=posit+"px";
    }
}

/*
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#butto');
ReactDOM.render(e(LikeButton), domContainer);
<!--
     <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script> 
     <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
     <script src="js_react_tests.js"></script>-->*/