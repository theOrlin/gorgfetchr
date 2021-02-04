const styles = (theme) => ({
  paper: {
    margin: 'auto',
    overflow: 'hidden'
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  currentLink: {
    color: '#29abe2'
  },
  drawer: {
    display: 'flex'
  },
  card: {
    padding: '0 25px',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between ',
    alignItems: 'center',
    marginTop: '20px'
  },
  modalTitle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between ',
    alignItems: 'flex-start',
    padding: "20px"
  },
  modalTitleText: {
    flex: 3,
    padding: '0 30px'
  },
  modalTitleClose: {

  },
  starButton: {
    cursor: 'pointer',
  },
  avatarLarge: {
    width: 80,
    height: 80
  },
  avatarMed: {
    width: 60,
    height: 60
  },
  loadMoreButton: {
    marginTop: 20,
    marginBottom: 20

  },
  ghIcon: {
    marginRight: 10
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textColumn: {
    flex: 1,
    paddingLeft: 40
  },
  avatarColumn: {
    padding: '10px 0'
  },
  repoTextColumn: {
    width: 500
  },
  itemIcon: {
    minWidth: 'auto'
  }
});

export default styles;
