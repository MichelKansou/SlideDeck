// Actions in Redux :D

export function addSlide(name, path){
  return {
    type: 'addSlide',
    name,
    path
  }
}

export function deleteSlide(index){
  return {
    type: 'deleteSlide',
    index
  }
}

export function editSlide(index, name, path){
    return {
        type: 'editSlide',
        index,
        name,
        path
    }
}

export function showSlide(path){
  return {
    type: 'showSlide',
    path
  }
}

export function updateSlide(index, name, path){
    return {
      type: 'updateSlide',
      index,
      name,
      path
    }
}
