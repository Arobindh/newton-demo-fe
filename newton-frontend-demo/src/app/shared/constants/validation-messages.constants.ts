export const VALIDATION_MESSAGES = {
  price: {
    required: 'Price is required.',
    min: 'Price must be 0 or greater.'
  },
  name: {
    required: 'Game title is required.',
    minlength: 'Game title must be at least 2 characters.',
    maxlength: 'Game title cannot exceed 100 characters.'
  },
  genre: {
    required: 'Genre is required.',
    minlength: 'Genre must be at least 2 characters.',
    maxlength: 'Genre cannot exceed 50 characters.'
  },
  ageRating: {
    required: 'Age rating is required.'
  },
  author: {
    required: 'Author is required.',
    minlength: 'Author must be at least 2 characters.',
    maxlength: 'Author cannot exceed 100 characters.'
  },
  description: {
    required: 'Description is required.',
    minlength: 'Description must be at least 10 characters.',
    maxlength: 'Description cannot exceed 500 characters.'
  }
} as const;
