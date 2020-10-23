/* global document, ReactDOM, styled */
const handleHoverIn = (event) => {
    const path = event.target.getAttribute('data-secondary');
    event.target.setAttribute('src', path);
  };

  const handleHoverOut = (event) => {
    const path = event.target.getAttribute('data-primary');
    event.target.setAttribute('src', path);
  };

  const handleClick = (event) => {
    const path = event.target.getAttribute('data-tertiary');
    event.target.setAttribute('src', path);
  }

  // Homework: Add a click event to the rollover effect to reveal a third image source

  const Rollover = ({ alt, primary, secondary, tertiary }) => (
    <SmallImage
      onMouseOver={handleHoverIn}
      onFocus={handleHoverIn}
      onMouseOut={handleHoverOut}
      onBlur={handleHoverOut}
      onClick={handleClick}
      alt={alt}
      src={primary}
      data-primary={primary}
      data-secondary={secondary}
      data-tertiary={tertiary}
    />
  );

  // styled-component v4
  const SmallImage = styled.img`
    width: 400px;
    height: 350px;
  `;

  ReactDOM.render(
    <>
      <Rollover
        alt="Gastown, Vancouver"
        secondary="images/gastown-umbrellas.jpg"
        primary="images/gastown-empty.png"
        tertiary="images/seabus.jpg"
      />
      <Rollover
        alt="Seabus, Vancouver"
        secondary="images/seabus.jpg"
        primary="images/seabus-walkway.jpg"
        tertiary="images/gastown-umbrellas.jpg"
      />
    </>,
    document.getElementById('root'),
  );
