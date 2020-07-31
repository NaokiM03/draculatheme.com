import React from 'react';
import Head from 'next/head';
import marked from 'marked';
import paths from '../lib/paths';
import ThemeLayout from '../layouts/Theme';
import Contributors from '../components/Contributors';
import Updates from '../components/Updates';
import download from 'download';
import probe from 'probe-image-size';

export async function getStaticPaths() {
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const header = {
    headers: {
      'Authorization': `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
  };

  const query = paths.find(path => path.params.theme === params.theme).params;

  const installReq = await fetch(`https://api.github.com/repos/dracula/${query.repo}/contents/INSTALL.md`, header);
  const installRes = await installReq.json();
  const installBuffer = Buffer.from(installRes.content, 'base64');
  query.install = marked(installBuffer.toString('ascii'));

  const contributorsReq = await fetch(`https://api.github.com/repos/dracula/${query.repo}/contributors`, header);
  const contributors = await contributorsReq.json();
  query.contributors = contributors;

  const image = `https://raw.githubusercontent.com/dracula/${query.repo}/master/screenshot.png`;
  await download(image, 'public/static/img/screenshots', { filename: `${query.theme}.png` });

  const metadata = await probe(image);
  query.imageWidth = metadata.width;
  query.imageHeight = metadata.height;

  return { props: { query } };
}

class Theme extends React.Component {
  state = {
    views: ''
  };

  componentDidMount() {
    this.getViews();
  }

  async getViews() {
    const viewsReq = await fetch(`/api/views/${this.props.query.theme}`);
    const viewsRes = await viewsReq.json();
    const views = new Intl.NumberFormat().format(viewsRes.views || 0);

    this.setState({ views });
  }

  renderViews() {
    if (this.state.views) {
      return <p className="views">{this.state.views} views</p>
    }

    return <p className="views loading" />
  }

  render() {
    const title = `Dark theme for ${this.props.query.title} and ${paths.length}+ apps — Dracula`;
    const description = `Dracula is a color scheme for code editors and terminal emulators, including ${this.props.query.title} and ${paths.length}+ other apps. Check the instructions to learn how to install it.`;

    return <div>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={`https://draculatheme.com/${this.props.query.theme}`} property="og:url" />
        <meta content="https://draculatheme.com/static/img/facebook.png" property="og:image" />
      </Head>

      <div className="theme">
        <img className="preview" src={`/static/img/screenshots/${this.props.query.theme}.png`} alt={`${this.props.query.title} Theme Preview`} width={this.props.query.imageWidth} height={this.props.query.imageHeight}/>
        {this.renderViews()}
        <div className="instructions" dangerouslySetInnerHTML={{ __html: this.props.query.install }} />
        <Updates />
        <Contributors repo={this.props.query.repo} data={this.props.query.contributors} />
      </div>
    </div>
  }
}

Theme.Layout = ThemeLayout;

export default Theme;
