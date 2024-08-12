const getLabelTextColor = (id) => {
  switch(id) {
    case 1: {
      return "text-custom-primary"
    }
    case 2: {
      return "text-custom-greenPrimary"
    }
    case 3: {
      return "text-custom-bluePrimary"
    }
    default: {
      return "text-custom-primary"
    }
  }
}

const getPriorityTextColor = (id) => {
  switch(id) {
    case 1: {
      return "text-custom-bluePrimary"
    }
    case 2: {
      return "text-custom-greenPrimary"
    }
    case 3: {
      return "text-custom-redPrimary"
    }
    default: {
      return "text-custom-redPrimary"
    }
  }
}

export {
  getLabelTextColor,
  getPriorityTextColor
}

