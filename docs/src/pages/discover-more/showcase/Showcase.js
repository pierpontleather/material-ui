import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from 'docs/src/modules/components/Link';
import GithubIcon from '@material-ui/docs/svgIcons/GitHub';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // Hide the demo container padding
    margin: -theme.spacing.unit * 3,
    // Maintain alignment with the markdown text
    [theme.breakpoints.down('xs')]: {
      padding: 30,
    },
  },
  title: {
    marginBottom: theme.spacing.unit * 2,
  },
  card: {
    marginBottom: theme.spacing.unit,
    maxWidth: 600,
  },
  description: {
    marginBottom: theme.spacing.unit * 6,
  },
  cardMedia: {
    paddingTop: '75%', // 4:3
  },
});

const appList = [
  {
    title: 'Onepixel',
    description: 'Beautiful Stock Photos for $1.',
    image: '/static/images/showcase/onepixel.jpg',
    link: 'https://www.onepixel.com/',
  },
  {
    title: 'SFR Presse',
    description:
      '"SFR Presse" provides the best access to the french newspapers, ' +
      'magazines and real time streams, personalized for you.',
    image: '/static/images/showcase/sfrpresse.jpg',
    link: 'https://magazine-presse.sfr.fr/',
  },
  {
    title: 'react-admin',
    description:
      'The admin of an imaginary poster shop, used as a demo for the react-admin framework. ' +
      'Uses many material-ui components, including tables, forms, snackbars, buttons, and ' +
      'theming. The UI is responsive. The code is open-source!',
    image: '/static/images/showcase/posters-galore.jpg',
    link: 'https://marmelab.com/react-admin-demo/',
    source:
      'https://github.com/marmelab/react-admin/tree/be23a1a8ebc4e2293b57898adcb2f359e836f0fd/examples/demo',
  },
  {
    title: 'Hijup',
    description: 'A pioneering Muslim Fashion e-commerce site.',
    image: '/static/images/showcase/hijup.jpg',
    link: 'https://www.hijup.com/',
  },
  {
    title: 'AospExtended Download center',
    description:
      'A download center that hosts all the official builds of AospExtended ROM, ' +
      'for supported devices for different android versions.',
    image: '/static/images/showcase/aexdownloadcenter.jpg',
    link: 'https://downloads.aospextended.com',
  },
  {
    title: 'Venumob',
    description:
      'A platform for individuals and businesses to find and book the perfect venue for any event.',
    image: '/static/images/showcase/venuemob.jpg',
    link: 'https://venuemob.com.au/',
  },
  {
    title: 'Builder Book',
    description:
      'Open source web app to write and host documentation or sell books. ' +
      'Built with React, Material-UI, Next, Express, Mongoose, MongoDB.',
    image: '/static/images/showcase/builderbook.jpg',
    link: 'https://builderbook.org/',
    source: 'https://github.com/builderbook/builderbook',
  },
  {
    title: 'SlidesUp',
    description: 'SlidesUp is a platform to help conference organizers plan their events.',
    image: '/static/images/showcase/slidesup.jpg',
    link: 'https://slidesup.com/',
  },
  {
    title: 'npm registry browser',
    description: 'A web app that lets you search the npm registry and browse packages details.',
    image: '/static/images/showcase/npm-registry-browser.jpg',
    link: 'https://topheman.github.io/npm-registry-browser/',
    source: 'https://github.com/topheman/npm-registry-browser',
  },
  {
    title: 'Insights',
    description:
      '"Insights" by Just Ask Users helps user experience research teams ' +
      "make sense of their user study findings. Teams can see their users' pains and needs " +
      'easily so that they can enhance the product that they are designing. ' +
      'Material-UI is used both on the website (with server-side rendering) and ' +
      'within the interactive app itself.',
    image: '/static/images/showcase/justaskusers.jpg',
    link: 'https://justaskusers.com/',
  },
  {
    title: 'Trafikito',
    description:
      'Free servers monitoring solution which can track any output of any command and do ' +
      'automated action. By default it tracks average load, CPU, HDD, RAM and sends email when ' +
      'something is going wrong.',
    image: '/static/images/showcase/trafikito-monitoring.jpg',
    link: 'https://trafikito.com/',
  },
  {
    title: 'Local Insights',
    description:
      'A real estate data provider that aggregates and analyzes property records, ' +
      'permits, and tax documents.',
    image: '/static/images/showcase/localinsights.jpg',
    link: 'https://localinsights.io',
  },
  {
    title: 'Johnny Metrics',
    description: 'Upload your trades, and analyze your crypto portfolio.',
    link: 'https://app.johnnymetrics.com/demo',
    image: '/static/images/showcase/johnnymetrics.jpg',
  },
  {
    title: 'Team SC',
    description:
      'The site of a cognitive neuroscience research group, ' +
      'with a carefully designed interface and animation.',
    image: '/static/images/showcase/sc.bnu.edu.cn.jpg',
    link: 'http://sc.bnu.edu.cn',
  },
  {
    title: 'LocalMonero',
    description:
      'A safe and easy-to-use person-to-person platform to allow anyone ' +
      'to trade their local currency for Monero, anywhere.',
    image: '/static/images/showcase/localmonero.jpg',
    link: 'https://localmonero.co/?rc=ogps',
  },
  {
    title: 'Cryptoverview: A friendly Dashboard for your cryptocurrency portfolio',
    description:
      "Cryptoverview is a responsive webapp that displays a user's Bittrex portfolio, " +
      'trending currencies and market caps. It provides some fancy charts, ' +
      'news related to cryptocurrencies, and more. (demo:demo)',
    image: '/static/images/showcase/cryptoverview.jpg',
    link: 'https://cryptoverview.com',
  },
  {
    title: 'Mantic Transparence',
    description:
      'An Open Data tool showing financial and demographic data for all the towns in France ' +
      '(in French).',
    image: '/static/images/showcase/manty.jpg',
    link: 'https://app.manty.eu/',
  },
  {
    title: 'Modole Language Exchange',
    description:
      "Web app that allows users to write in the language they're learning " +
      'and have it corrected by native speakers.',
    image: '/static/images/showcase/modole.jpg',
    link: 'https://en.modole.io',
  },
  {
    title: 'AudioNodes',
    description:
      'Modular audio production suite with multi-track audio mixing, audio effects, ' +
      'parameter automation, MIDI editing, synthesis, cloud production, and more.',
    image: '/static/images/showcase/audionodes.jpg',
    link: 'https://audionodes.com',
  },
  {
    title: 'Rung - Exceptionality Management',
    description:
      'Rung alerts you about the exceptionalities of your personal and professional life.',
    image: '/static/images/showcase/rung.jpg',
    link: 'https://app.rung.com.br',
  },
  {
    title: 'Pilcro',
    description: 'A free brand management software for the Google Suite.',
    image: '/static/images/showcase/pilcro.jpg',
    link: 'https://www.pilcro.com',
  },
  {
    title: 'Snippets Chrome Extension',
    description:
      'A Chrome extension allowing you to import and execute JavaScript code snippets from GitHub.',
    image: '/static/images/showcase/snippets.jpg',
    link: 'https://chrome.google.com/webstore/detail/snippets/dcibnkkafifbanoclgjbkmkbogijndin',
    source: 'https://github.com/richardscarrott/snippets',
  },
  {
    title: 'SelfEducation.app',
    description: 'Watch short videos and develop your skills',
    image: '/static/images/showcase/selfeducationapp.jpg',
    link: 'https://selfeducation.app/',
  },
  {
    title: 'Swimmy',
    description: 'An open source forum PWA.',
    image: '/static/images/showcase/swimmy.jpg',
    link: 'https://swimmy.io/',
    source: 'https://github.com/uufish/swimmy.io',
  },
  {
    title: 'Componofy: Spotify Playlist Combination',
    description:
      'A web app that allows a Spotify user to combine private and public playlists ' +
      'and either create a new one or merge with existing playlist. ' +
      'You can also reorder your playlist tracks and upload new playlist cover images.',
    image: '/static/images/showcase/componofy.jpg',
    link: 'https://componofy.herokuapp.com',
    source: 'https://github.com/DalerAsrorov/componofy',
  },
  {
    title: 'Planalyze',
    description:
      'Planalyze is a real-time daily planning & task tracking tool that keeps teams connected ' +
      "& ahead of each day's workload.",
    image: '/static/images/showcase/planalyze.jpg',
    link: 'https://www.planalyze.io',
  },
  {
    title: 'Material Blog',
    description:
      'A blog with a UI built entirely using material-ui v1. ' +
      'Check out the theming page, which leverages `MuiThemeProvider` ' +
      'to allow for live theme changes.',
    link: 'https://jdupont.github.io/',
    image: '/static/images/showcase/jdupont.jpg',
    source: 'https://github.com/jdupont/jdupont.github.io',
  },
  {
    title: 'Tentu',
    description:
      'A web app built with Material-UI v1 and Firebase that offers the ' +
      'user news and events of his interest.',
    link: 'https://tentu.eus/',
    image: '/static/images/showcase/tentu.jpg',
  },
  {
    title: 'Typekev',
    description:
      'The personal website of a React and Blockchain developer. The code is open-source.',
    image: '/static/images/showcase/typekev.jpg',
    link: 'https://typekev.com/',
    source: 'https://github.com/typekev/typekev-site',
  },
];

function Showcase(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {appList.map(app => (
        <div key={app.image}>
          <Typography component="h2" variant="h4" gutterBottom className={classes.title}>
            <span>{app.title}</span>
            {app.source ? (
              <IconButton href={app.source} target="_blank" aria-label={`${app.title} source code`}>
                <GithubIcon />
              </IconButton>
            ) : null}
          </Typography>
          <Card className={classes.card}>
            <Link href={app.link} target="_blank" rel="noopener">
              <CardMedia image={app.image} title={app.title} className={classes.cardMedia} />
            </Link>
          </Card>
          <Typography className={classes.description}>{app.description}</Typography>
        </div>
      ))}
    </div>
  );
}

Showcase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Showcase);
