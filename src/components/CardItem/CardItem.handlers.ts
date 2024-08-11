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
  getLabelBackgroundColor,
  getLabelTextColor,
  getPriorityBorderColor,
  getPriorityTextColor
}