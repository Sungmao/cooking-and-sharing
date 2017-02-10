// export function changeInputName(name) {
//   return {
//     type: 'CHANGE_INPUT_NAME',
//     payload: name
//   }
// }

export function changeInputTitle(newtitle) {
  return {
    type: 'CHANGE_INPUT_TITLE',
    payload: newtitle
  }
}

export function changeInputContent(newContent) {
  return {
    type: 'CHANGE_INPUT_CONTENT',
    payload: newContent
  }
}

export function changeInputImage(newImage) {
  return {
    type: 'CHANGE_INPUT_IMAGE',
    payload: newImage
  }
}

// export function submitName() {
//   return {
//     type: 'CHANGE_USER'
//   }
// }

export function submitTitle() {
  return {
    type: 'CHANGE_TITLE'
  }
}


export function submitContent() {
  return {
    type: 'CHANGE_CONTENT'
  }
}

export function submitImage() {
  return {
    type: 'CHANGE_IMAGE'
  }
}



