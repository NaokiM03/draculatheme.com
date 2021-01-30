import { Component } from 'react';

class Updates extends Component {
  render() {
    const description = this.props.type === 'theme' ? 'Receive updates about this theme and more about Dracula.' : 'Get updates about code editors and terminal themes.';
    return <div style={{ marginBottom: '2em' }}>
      <h3>Stay up to date</h3>
      <p>{description}</p>

      <form action="https://draculatheme.us4.list-manage.com/subscribe/post?u=91b5113403e18d357704e4b08&amp;id=05d188e2db" method="post" className="form">
        <input style={{ display: 'none' }} type="checkbox" value="1" name="group[66939][1]" id="mce-group[66939]-66939-0" defaultChecked />
        <input style={{ display: 'none' }} type="checkbox" value="2" name="group[66939][2]" id="mce-group[66939]-66939-1" />
        <input name="EMAIL" placeholder="Your email address" id="mce-EMAIL" type="email" required />
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
      </form>
    </div>
  }
}

export default Updates;

