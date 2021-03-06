export default function reducer(state={
    // user: '',
    // inputName: '',
    newtitle: '',
    inputTitle: '',
    newContent: '',
    inputContent: '',
    newImage: '',
    inputImage: '',
    newCity: '',
    inputCity: '',
    newPrice: '',
    inputPrice: ''
  }, action) {

    switch (action.type) {
      // case 'CHANGE_USER':
      //   return {...state, user: state.inputName, inputName: ''}
      // case 'CHANGE_INPUT_NAME':
      //   return {...state, inputName: action.payload}
      case 'CHANGE_TITLE':
        return {...state, newtitle: state.inputTitle, inputTitle: ''}
      case 'CHANGE_INPUT_TITLE':
        return {...state, inputTitle: action.payload}
      case 'CHANGE_CONTENT':
        return {...state, newContent: state.inputContent, inputContent: ''}
      case 'CHANGE_INPUT_CONTENT':
        return {...state, inputContent: action.payload}
      case 'CHANGE_IMAGE':
        return {...state, newImage: state.inputImage, inputImage: ''}
      case 'CHANGE_INPUT_IMAGE':
        return {...state, inputImage: action.payload}
      case 'CHANGE_CITY':
        return {...state, newCity: state.inputCity, inputCity: ''}
      case 'CHANGE_INPUT_CITY':
        return {...state, inputCity: action.payload}
      case 'CHANGE_PRICE':
        return {...state, newPrice: state.inputPrice, inputPrice: ''}
      case 'CHANGE_INPUT_PRICE':
        return {...state, inputPrice: action.payload}

      default:
        return state;
    }
}
