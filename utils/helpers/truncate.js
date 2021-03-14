
const truncate = (text, length, suffix) => {
  if (text.length > length) {
    return text.substring(0, length) + suffix
  } else {
    return text
  }
}

export default truncate
