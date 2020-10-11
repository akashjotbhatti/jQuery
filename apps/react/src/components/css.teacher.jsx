/* global document, ReactDOM, styled */

const Bullet = styled.li`
  ${(props) => (props.colour === 'red' ? 'color: red;' : 'black')}
  font-weight: bold;
`;

// const BlueParagraph = styled.p`
//   padding: 4em;
//   background: blue;
// `;

const PrettyHello = () => (
  <ol>
    <Bullet>This first bullet should be bold/strong</Bullet>
    <Bullet colour="red">Red 20pt font with a dotted underline</Bullet>
  </ol>
);

ReactDOM.render(
  <PrettyHello />,
  document.querySelector('#root'),
);
