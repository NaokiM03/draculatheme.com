import { Component } from 'react';
import malarkey from 'malarkey';
import Topbar from './Topbar';
import paths from '../lib/paths';
import styles from './Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.malarkey = React.createRef();
  }

  componentDidMount() {
    this.startTypewriter();
  }

  componentDidUpdate() {
    this.startTypewriter();
  }

  startTypewriter() {
    if (!this.malarkey.current) return;

    malarkey(this.malarkey.current, {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 2000,
      loop: true,
      postfix: ''
    })
    .type('Vim').pause().delete()
    .type('Atom').pause().delete()
    .type('Sublime').pause().delete()
    .type('Visual Studio Code').pause().delete()
    .type('JetBrains').pause().delete()
    .type('iTerm').pause().delete()
    .type('Terminal.app').pause().delete()
    .type('Zsh').pause().delete()
    .type('Alfred').pause().delete()
    .type('Slack').pause().delete()
    .type('CodeMirror').pause().delete()
    .type('Xcode').pause().delete()
    .type('Coda').pause().delete()
    .type('Visual Studio').pause().delete()
    .type('TextMate').pause().delete()
    .type('Emacs').pause().delete()
    .type('Sequel Pro').pause().delete()
  }

  renderDescription() {
    if (this.props.query.repo) {
      return <h2 className="subtitle">A dark theme for {this.props.query.title} <a href="/">and {paths.length}+ apps</a></h2>
    }

    if (this.props.query.title === 'About Dracula') {
      return <h2 className="subtitle">A dark theme for {paths.length}+ apps</h2>
    }

    return <h2 className="subtitle">A dark theme for <span ref={this.malarkey} className="rotating"></span></h2>
  }

  renderGithubButtons() {
    if (this.props.query.title !== 'About Dracula') {
      return <p className={styles.ghButtons}>
        <iframe className={styles.ghButton} src="https://ghbtns.com/github-btn.html?user=dracula&amp;repo=dracula-theme&amp;type=watch&amp;count=true&amp;size=large" title="GitHub Stars" allowtransparency="true" frameBorder="0" scrolling="0" width="152" height="30"></iframe>
        <iframe className={styles.ghButton} src="https://ghbtns.com/github-btn.html?user=dracula&amp;repo=dracula-theme&amp;type=fork&amp;count=true&amp;size=large" title="GitHub Forks" allowtransparency="true" frameBorder="0" scrolling="0" width="156" height="30"></iframe>
      </p>
    }
  }

  render() {
    return <div>
      <Topbar />
      <header className="header">
        <img className="icon" src={`/static/icons/${this.props.query.icon}`} width={220} height={220} alt={this.props.query.title} />
        <h1 className="title">Dracula</h1>
        {this.renderDescription()}
        {this.renderGithubButtons()}
      </header>
    </div>
  }
}

export default Header;