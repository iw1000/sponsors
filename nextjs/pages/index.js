import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

const messages = [
  {
    id: 1,
    primary: 'Leroy Sanchez',
    secondary: 'Spanish-born singer-​songwriter currently based in Los Angeles, California',
    person: '/static/images/leroysanchez.jpeg',
    claimed: 53,
    unclaimed: 5,
    isNew: false,
    isHot: true,
  },
  {
    id: 2,
    primary: '재주소년',
    secondary: `2003년 데뷔한 대한민국의 포크 밴드`,
    person: '/static/images/jejuboy.jpeg',
    claimed: 9,
    unclaimed: 4,
    isNew: false,
    isHot: false,
  },
  {
    id: 3,
    primary: '임연',
    secondary: 'Mnet M2 ‘불토엔 혼코노’에서 뛰어난 가창력으로 눈길을 끌던 2대 우승자',
    person: '/static/images/limyeon.jpeg',
    claimed: 29,
    unclaimed: 39,
    isNew: false,
    isHot: true,
  },
  {
    id: 4,
    primary: '정효빈',
    secondary: '2019년 4월, 이별 후 쓸쓸하고 공허한 심정을 담아낸 싱글 \'처음이라서\'로 호소력 짙은 보컬을 선보임',
    person: '/static/images/hyobin.jpeg',
    claimed: 5,
    unclaimed: 12,
    isNew: false,
    isHot: false,
  },
  {
    id: 5,
    primary: 'Etham',
    secondary: 'UK musical artist famous for 12:45',
    person: '/static/images/etham.jpeg',
    claimed: 12,
    unclaimed: 0,
    isNew: false,
    isHot: false,
  },
  {
    id: 6,
    primary: '이사호',
    secondary: `유튜버 창현 스트리머 노래대전 2회 우승자`,
    person: '/static/images/saho.jpeg',
    claimed: 98,
    unclaimed: 2,
    isNew: true,
    isHot: false,
  },
  {
    id: 7,
    primary: 'Zoe Delmanico',
    secondary: `아이돌 연습생 겸 유튜버`,
    person: '/static/images/zoe.jpeg',
    claimed: 3,
    unclaimed: 23,
    isNew: true,
    isHot: false,
  },
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  bottomAppBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#354a6e',
  },
  topAppBar: {
    top: 0,
    bottom: 'auto',
    backgroundColor: '#354a6e',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  bottomIconButton: {
    marginLeft: '10%',
  },
  galleryHintText: {
    color: '#ba5476',
  },
  galleryDescriptionBox: {
    marginLeft: '30px',
  },
  artistNameText: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.topAppBar}>
        <Toolbar>
          <img className='main-logo' src='/static/images/sponsors-logo.png' alt='logo' />
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Artists
        </Typography>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person, claimed, unclaimed, isNew, isHot }) => (
            <React.Fragment key={id}>
              <ListItem button>
                {
                  !isNew && !isHot ?
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar> :
                    <Badge
                      badgeContent={isNew ? 'New' : 'Hot'}
                      color={isNew ? 'error' : 'secondary'}>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={person} />
                      </ListItemAvatar>
                    </Badge>
                }
                <div className={classes.galleryDescriptionBox}>
                  <ListItemText primary={
                    <Typography className={classes.artistNameText}>{primary}</Typography>
                  } secondary={secondary} />
                  <div className={classes.galleryHintText}>
                    {claimed + ' NFTs claimed, ' + unclaimed + ' up for grabs'}
                  </div>
                </div>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" className={classes.bottomAppBar}>
        <Toolbar>
          <IconButton color="inherit" className={classes.bottomIconButton}>
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" className={classes.bottomIconButton}>
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" className={classes.bottomIconButton}>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" className={classes.bottomIconButton}>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
