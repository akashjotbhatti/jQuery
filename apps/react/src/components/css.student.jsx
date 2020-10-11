/* global document, ReactDOM, styled */

const Bullet = styled.li`
  ${(props) => (props.colour === 'red' ? 'color: red;' : 'black')}
  font-weight: bold;
`;

// const BlueParagraph = styled.p`
//   padding: 4em;
//   background: blue;
// `;

const Underline = {
  fontSize: "20px",
  fontWeight: "lighter",
  borderBottom: "1px dotted red"
}

const PrettyHello = () => (
  <>
    <ol>
      <Bullet style={{'font-weight': 'bold'}}>This first bullet should be bold/strong</Bullet>
      <Bullet colour="red" style={Underline}>Red 20pt font with a dotted underline</Bullet>
      <Bullet style={{'color': 'blue', 'font-size': '20px'}}>Blue 20pt font</Bullet>
      <Bullet style={{'font-size': '20px'}}>Normal 20pt font</Bullet>
      <Bullet colour="red" style={Underline}>Red 20pt font with a dotted underline</Bullet>
      <Bullet colour="red" style={{'font-weight': 'lighter'}}>Red text</Bullet>
    </ol>
  </>
);

ReactDOM.render(
  <PrettyHello />,
  document.querySelector('#root'),
);
