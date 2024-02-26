export function maskCep(value: string) {
  if (!value) return ''

  return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2')
}

export function removeSpecialCharacters(string: string) {
  return string.replace(/\D/g, '')
}
