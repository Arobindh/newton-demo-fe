export const APP_LABELS = {
  home: {
    pageTitle: 'Video Game Catalogue',
    tableHeaders: {
      id: 'ID',
      gameTitle: 'Game Title',
      genre: 'Genre',
      ageRating: 'Age Rating',
      price: 'Price',
      author: 'Author',
      description: 'Description',
      actions: 'Actions'
    },
    buttons: {
      edit: 'Edit'
    },
    messages: {
      noGamesFound: 'No games found'
    }
  },
  edit: {
    pageTitle: 'Edit Game',
    formLabels: {
      name: 'Game Title',
      genre: 'Genre',
      ageRating: 'Age Rating',
      price: 'Price ($)',
      author: 'Author',
      description: 'Description'
    },
    buttons: {
      save: 'Save Changes',
      cancel: 'Cancel'
    },
    messages: {
      updateSuccess: 'Game updated successfully!',
      updateError: 'Failed to update game. Please try again.',
      loadError: 'Game not found!'
    }
  }
};

export const API_MESSAGES = {
  errors: {
    loadGames: 'Failed to load games. Please try again later.',
    getGame: 'Failed to load game details. Please try again later.',
    updateGame: 'Failed to update game. Please try again later.'
  }
};
