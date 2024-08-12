const getLabelBackgroundColor = (id) => {
  switch(id) {
    case 1: {
      return "bg-custom-secondary"
    }
    case 2: {
      return "bg-custom-greenSecondary"
    }
    case 3: {
      return "bg-custom-blueSecondary"
    }
    default: {
      return "bg-custom-secondary"
    }
  }
}

const getPriorityBorderColor = (id) => {
  switch(id) {
    case 1: {
      return "border-custom-bluePrimary"
    }
    case 2: {
      return "border-custom-greenPrimary"
    }
    case 3: {
      return "border-custom-redPrimary"
    }
    default: {
      return "border-custom-bluePrimary"
    }
  }
}

export {
  getLabelBackgroundColor,
  getPriorityBorderColor,
}